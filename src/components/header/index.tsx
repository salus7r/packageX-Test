import React, { FC } from "react";
import { PXAvatar, PXInput } from "@components/styled";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import LanguagePicker from "./LanguagePicker";

interface IProps {}

const Header: FC<IProps> = (props) => {
	return (
		<Row justify="space-between">
			<Col sm={24} md={10}>
				<PXInput size="large" placeholder="Search..." prefix={<SearchOutlined />} />
			</Col>
			<Col sm={24} md={14}>
				<span className={"float-right"}>
					<Space size={"middle"}>
						<LanguagePicker />
						<PXAvatar
							size={{ xs: 15, sm: 20, md: 25, lg: 30, xl: 40, xxl: 50 }}
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						/>
					</Space>
				</span>
			</Col>
		</Row>
	);
};

export default Header;
