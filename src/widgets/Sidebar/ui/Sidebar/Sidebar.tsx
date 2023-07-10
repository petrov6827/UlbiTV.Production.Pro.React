import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
// import { SidebarItemList } from "../../model/items";
// import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const {t} = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className
			])}
		>
			<Button 
				theme={ButtonTheme.OUTLINE}
				className={cls.collapseBtn}
				data-testid="sidebar-toggle"
				size={ButtonSize.M}
				square
				onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>

			<div className={classNames(cls.slinks)}>
				<div className={cls.item}>
					<AppLink to='/' theme={AppLinkTheme.SECONDARY} className={cls.slink}>
						<MainIcon className={cls.icon} />
						<span className={classNames(cls.link_title)}>
							{t('Главная')}
						</span>
					</AppLink>
				</div>
				<div className={cls.item}>
					<AppLink to='/about' theme={AppLinkTheme.SECONDARY} className={cls.slink}>
						<AboutIcon className={cls.icon} />
						<span className={classNames(cls.link_title)}>
							{t('О сайте')}
						</span>
					</AppLink>
				</div>
			</div>

			{/* <div className={cls.items}>
                                  
            {SidebarItemList.map((item)=>(
              <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
              />
            ))
            }
                  
          </div> */}
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
});
