import React, { FC } from "react";
import { PXButton, PXRadioGroup } from "@components/styled";
import { Col, Row, Space, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { options } from "./Filters.data";

const { Text } = Typography;

interface IProps {}

const Filters: FC<IProps> = () => {
	return (
		<Row justify={"space-between"} align={"middle"}>
			<Col>
				<Text type="secondary">
					<Space size={"small"}>
						<FilterOutlined /> Filter Results By
					</Space>
				</Text>
			</Col>
			<Col>
				<PXRadioGroup options={options} optionType="button" buttonStyle="solid" />
			</Col>
			<Col>
				<Space size={"middle"}>
					<PXButton size={"large"}>Custom Range</PXButton>
					<PXButton size={"large"} type={"primary"} $primary>
						Assign to group
					</PXButton>
					<PXButton size={"large"} type={"primary"} $primary>
						Notification Preferences
					</PXButton>
				</Space>
			</Col>
		</Row>
	);
};

export default Filters;
