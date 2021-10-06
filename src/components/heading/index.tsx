import React, { FC } from "react";
import { HeadingWrapper } from "./Heading.styled";
import { LeftOutlined } from "@ant-design/icons";
import { Row, Col, Space } from "antd";

interface IProps {
	title: string;
	extra?: React.ReactElement;
}

const Heading: FC<IProps> = (props) => {
	const { title, extra } = props;

	return (
		<Row justify={"space-between"}>
			<Col md={12} sm={24}>
				<HeadingWrapper>
					<Space size={"middle"}>
						<LeftOutlined /> {title}
					</Space>
				</HeadingWrapper>
			</Col>
			{extra && (
				<Col md={12} sm={24} className={"text-right"}>
					{extra}
				</Col>
			)}
		</Row>
	);
};

export default Heading;
