import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
// import { SidebarItemList } from "../../model/items";
// import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

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
			{/* <button onClick={onToggle}>toggle</button> */}
			<Button 
				// theme={ButtonTheme.CLEAR}
				className={cls.collapseBtn}
				data-testid="sidebar-toggle"
				// size={ButtonSize.L}
				// square
				onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>

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
