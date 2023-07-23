import type { FC, ReactNode} from 'react';
import { useCallback} from 'react';
import { useEffect} from 'react';
import { useRef} from 'react';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
	lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const { 
		className, 
		children, 
		isOpen,
		onClose, 
		lazy
	} = props;

	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if(onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

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
	}, [isOpen, onKeyDown])
    
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	//если есть флаг изОпен то меняем состояние измаунтед.
	useEffect(()=> {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])
	
	//монтирование модалки при открытии, если есть lazy и не смонтирована модалка то возращаем null
	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(cls.modal, mods, [className, 'app_modal'])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div 
						className={cls.content}
						onClick={onContentClick}>
						{/* Lorem, ipsum dolor sit {children}x temporibus error delectus excepturi. */}
						{children}
					</div>
				</div>
			</div>
		</Portal>
	) 
}