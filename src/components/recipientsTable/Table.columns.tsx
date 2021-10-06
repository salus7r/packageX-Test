import React from "react";
import { ColumnsType } from "antd/lib/table";
import { PXTag } from "@components/styled";

export const getColumns = (getColumnSearchProps: any): ColumnsType<any> => [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ["descend", "ascend"],
		...getColumnSearchProps("name"),
	},
	{
		title: "Group",
		dataIndex: "group",
		key: "group",
		sorter: (a, b) => a.group.length - b.group.length,
		sortDirections: ["descend", "ascend"],
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		render: (text) => <a href={"#"}>{text}</a>,
	},
	{
		title: "Building",
		dataIndex: "building",
		key: "building",
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		render: (text) => <a href={"#"}>{text}</a>,
	},
	{
		title: "Unit",
		dataIndex: "unit",
		key: "unit",
		align: "center",
		...getColumnSearchProps("unit"),
	},
	{
		title: "Phone",
		dataIndex: "phone",
		key: "phone",
	},
	{
		title: "Status",
		key: "status",
		dataIndex: "status",
		align: "center",
		render: (text) => <PXTag color={text === "Active" ? "success" : "red"}>{text}</PXTag>,
	},
	{
		title: "Last Update",
		dataIndex: "lastUpdate",
		key: "lastUpdate",
		align: "center",
	},
];
