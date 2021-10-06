import styled from "styled-components";
import { Layout } from "antd";
import { device } from "@utils/responsive";

const { Header, Sider, Content } = Layout;

export const AppContainer = styled.div`
	padding: 25px;
`;

export const AppMainLayout = styled(Layout)`
	height: 100%;
	background: transparent;
`;

export const AppBodyLayout = styled(Layout)`
	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;
	background-color: #f8fbff;
`;

export const AppSiderWrapper = styled(Sider)`
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
	background-color: #4c9aff;
	padding: 64px 14px;

	@media ${device.desktop} {
		min-width: 250px !important;
	}

	@media ${device.desktopL} {
		min-width: 300px !important;
	}

	@media ${device.desktopXL} {
		min-width: 384px !important;
	}

	> .ant-layout-sider-children {
		overflow-x: hidden;

		::-webkit-scrollbar {
			width: 10px;
			padding-left: 10px;
		}

		::-webkit-scrollbar-thumb {
			background: #bbb;
			border-radius: 20px;
			margin-right: 5px;
		}

		::-webkit-scrollbar-track {
			background: #eee;
			border-radius: 20px;
		}
	}

	> .ant-layout-sider-zero-width-trigger {
		top: 35px;
	}

	&.ant-layout-sider-collapsed {
		background-color: #f8fbff;

		> .ant-layout-sider-zero-width-trigger {
			right: -8px;
		}
	}
`;

export const AppHeaderWrapper = styled(Header)`
	background: transparent;
	height: initial;
	line-height: initial;
	padding: 20px 30px;

	@media ${device.tablet} {
		padding: 30px 40px !important;
	}

	@media ${device.desktop} {
		padding: 40px 60px !important;
	}

	@media ${device.desktopXL} {
		padding: 70px 100px !important;
	}
`;

export const AppContentWrapper = styled(Content)`
	padding: 0 30px 30px;

	@media ${device.tablet} {
		padding: 0 40px 30px !important;
	}

	@media ${device.desktop} {
		padding: 0 60px 30px !important;
	}

	@media ${device.desktopXL} {
		padding: 0 100px 30px !important;
	}
`;
