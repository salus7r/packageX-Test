import React, { FC } from "react";
import Filters from "./Filters";
import Table from "./Table";
import { Divider } from "antd";

interface IProps {}

const RecipientsTable: FC<IProps> = () => {
	return (
		<>
			<Filters />
			<Divider />
			<Table />
		</>
	);
};

export default RecipientsTable;
