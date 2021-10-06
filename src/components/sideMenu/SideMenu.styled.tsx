import styled from "styled-components";
import { Menu } from "antd";

export const LogoWrapper = styled.div`
	margin: 0 0 50px 26px;
`;

export const MenuWrapper = styled(Menu)`
	background-color: transparent;
	border-right: unset;
`;

export const MenuItemWrapper = styled(Menu.Item)`
	border-radius: 12px;
	height: 50px !important;
	color: white !important;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;

	&::after {
		visibility: hidden;
	}

	&.ant-menu-item-selected {
		background-color: #3d8aee !important;
	}
`;
