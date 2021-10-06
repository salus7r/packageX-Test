import React, { FC } from "react";
import { Heading, HeadingButtons, RecipientsTable } from "@components/index";
import { PXCard } from "@components/styled";
import { ColumnWidthOutlined } from "@ant-design/icons";
import { tabList } from "./Content.data";

interface IProps {}

const Content: FC<IProps> = (props) => {
	return (
		<div>
			<Heading title={"Recipients"} extra={<HeadingButtons />} />
			<PXCard
				tabList={tabList}
				tabBarExtraContent={
					<>
						<ColumnWidthOutlined /> Column Preference
					</>
				}
				$noBody
			/>
			<PXCard>
				<RecipientsTable />
			</PXCard>
		</div>
	);
};

export default Content;
