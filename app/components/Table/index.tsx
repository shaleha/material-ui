import { User } from "@/app/types/user";
import { FC } from "react";
import { getColumnHeaders } from "./utils";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { tableDynamicProps, useTableContext } from "../Providers/TableProvider";

export interface UsersTableProps extends tableDynamicProps {
  users: User[];
}

const Table: FC<UsersTableProps> = ({ users }) => {
  const headers = getColumnHeaders(users) ?? [];
  const baseClass = "w-full shadow-lg";
  return (
    <table className={`${baseClass}`}>
      <TableHeader headers={headers} />
      <TableBody users={users} />
    </table>
  );
};

export default Table;
