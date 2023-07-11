import { FC, ReactNode, useCallback} from 'react';
import { useEffect} from 'react';
import { useRef} from 'react';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const { 
		className, 
		children, 
		isOpen,
		onClose 
	} = props;

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = () => {
		if(onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}

    ///новые ссылки
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

	const onContentClick = (e:React.MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])}
    
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	return (
		<div className={classNames(cls.modal, mods, [className])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div 
					className={cls.content}
					onClick={onContentClick}>
					Lorem, ipsum dolor sit {children}x temporibus error delectus excepturi.
				</div>
			</div>
		</div>
	)
}