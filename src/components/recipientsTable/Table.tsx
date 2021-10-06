import React, { FC, useState, useRef } from "react";
import { data } from "./Table.data";
import { getColumns } from "./Table.columns";
import { PXTable } from "@components/styled";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps, FilterConfirmProps } from "antd/lib/table/interface";
import Highlighter from "react-highlight-words";

interface IProps {}

const RecipientsTable: FC<IProps> = () => {
	const searchInput = useRef<Input>(null);
	const [searchText, setSearchText] = useState<string>("");
	const [searchedColumn, setSearchedColumn] = useState<string>("");

	const handleSearch = (selectedKeys: React.Key[], confirm: (param?: FilterConfirmProps | undefined) => void, dataIndex: string) => {
		confirm();
		setSearchText(selectedKeys[0] as string);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: (() => void) | undefined) => {
		if (clearFilters) {
			clearFilters();
		}

		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex: string) => ({
		filterDropdown: (filterDropdownProps: FilterDropdownProps) => {
			const { setSelectedKeys, selectedKeys, confirm, clearFilters } = filterDropdownProps;

			return (
				<div style={{ padding: 8 }}>
					<Input
						ref={searchInput}
						placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
						onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
						style={{ marginBottom: 8, display: "block" }}
					/>
					<Space>
						<Button
							type="primary"
							onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
							icon={<SearchOutlined />}
							size="small"
							style={{ width: 90 }}
						>
							Search
						</Button>
						<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
							Reset
						</Button>
						<Button
							type="link"
							size="small"
							onClick={() => {
								confirm({ closeDropdown: false });

								setSearchText(selectedKeys[0] as string);
								setSearchedColumn(dataIndex);
							}}
						>
							Filter
						</Button>
					</Space>
				</div>
			);
		},
		filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
		onFilter: (value: any, record: any) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
		onFilterDropdownVisibleChange: (visible: any) => {
			if (visible) {
				setTimeout(() => searchInput && searchInput.current && searchInput.current.select(), 100);
			}
		},
		render: (text: any) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

	const columns = getColumns(getColumnSearchProps);

	return <PXTable columns={columns} dataSource={data} />;
};

export default RecipientsTable;
