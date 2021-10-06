import React from "react";
import { PXButton, PXSelect } from "@components/styled";
import { Space } from "antd";

export default function HeadingButtons() {
	return (
		<Space size={"middle"}>
			<PXButton size={"large"}>Download Recipients</PXButton>
			<PXSelect bordered={false} size={"large"} defaultValue={"filter1"} placeholder={"Select Filter"}>
				<PXSelect.Option value="filter1">Filter Recipients</PXSelect.Option>
				<PXSelect.Option value="filter2">Filter 2</PXSelect.Option>
			</PXSelect>
			<PXSelect bordered={false} size={"large"} defaultValue={"add1"} placeholder={"Add New"} $primary>
				<PXSelect.Option value="add1">Add New</PXSelect.Option>
				<PXSelect.Option value="add2">Add 2</PXSelect.Option>
			</PXSelect>
		</Space>
	);
}
