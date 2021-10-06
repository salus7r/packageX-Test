import { device } from "@utils/responsive";
import { Input, Select, Button, Avatar, Card, Radio, Tag, Table } from "antd";
import styled, { css } from "styled-components";

const shared = () => css`
	border: none;
	color: #97a0af;
	background-color: #edf3fd;
`;

const sharedBorderRadius = () => css`
	border-radius: 12px;
`;

const sharedDarkAndBoldText = () => css`
	color: #172b4d;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
`;

export const PXAvatar = styled(Avatar)`
	${shared};
`;

export const PXButton = styled(Button)<{ $primary?: true }>`
	${shared};
	${sharedBorderRadius};
	${sharedDarkAndBoldText};

	color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
	background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

	height: auto;
	padding: 15px 20px;
`;

export const PXInput = styled(Input)`
	${shared};
	${sharedBorderRadius};

	padding: 10px 20px;

	@media ${device.tablet} {
		padding: 10px 20px;
	}

	@media ${device.desktop} {
		padding: 15px 30px;
	}

	@media ${device.desktopXL} {
		padding: 20px 40px;
	}

	> .ant-input {
		background: transparent;
	}
`;

export const PXSelect = styled(Select)<{ $primary?: true }>`
	${shared};
	${sharedBorderRadius};
	${sharedDarkAndBoldText};

	color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
	background-color: ${({ $primary }) => ($primary ? "#2684FF" : "#edf3fd")};

	padding: 10px 20px;
	padding: 5px 15px 3px;

	@media ${device.tablet} {
		padding: 5px 15px 3px;
	}

	@media ${device.desktop} {
		padding: 10px 25px 5px;
	}

	@media ${device.desktopXL} {
		padding: 15px 35px 10px;
	}

	.ant-select-arrow {
		${sharedDarkAndBoldText};

		right: 10%;
		color: ${({ $primary }) => ($primary ? "white" : "#172b4d")};
	}

	.ant-select-selector {
		border: none;
		background-color: transparent !important;
	}
`;

export const PXLanguageSelect = styled(PXSelect)`
	border-radius: 50px;
`;

export const PXCard = styled(Card)<{ $noBody?: true }>`
	${sharedBorderRadius}

	border: none;
	background: #ffffff;
	box-shadow: 0px 6px 16px #edf3fd;
	margin-top: 20px;

	.ant-card-body {
		${({ $noBody }) => ($noBody ? "padding: 0;" : undefined)};
	}
`;

export const PXRadioGroup = styled(Radio.Group)`
	.ant-radio-button-wrapper {
		${sharedDarkAndBoldText};

		height: auto;
		border: none;
		background-color: #edf3fd;
		padding: 15px 20px;
	}
`;

export const PXTag = styled(Tag)`
	border: none;
	padding: 5px 10px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
`;

export const PXTable = styled(Table)``;
