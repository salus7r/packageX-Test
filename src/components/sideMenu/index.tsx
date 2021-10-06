import React, { FC } from "react";
import { LogoWrapper, MenuWrapper, MenuItemWrapper } from "./SideMenu.styled";
import { menuData } from "./SideMenu.Data";

const Logo = require("@assets/logo.png");

interface IProps {}

const SideMenu: FC<IProps> = () => {
	return (
		<>
			<LogoWrapper>
				<img src={Logo.default} alt={"logo"} width={48} height={48} />
			</LogoWrapper>
			<MenuWrapper defaultSelectedKeys={["2"]} mode="inline">
				{menuData.map((item, index) => {
					return (
						<MenuItemWrapper key={index} icon={item.icon}>
							{item.name}
						</MenuItemWrapper>
					);
				})}
			</MenuWrapper>
		</>
	);
};

export default SideMenu;
