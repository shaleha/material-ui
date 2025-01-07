import { User } from "@/app/types/user";
import { FC } from "react";
import { getColumnHeaders } from "./utils";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface UsersTableProps {
  users: User[];
}

const Table: FC<UsersTableProps> = ({ users }) => {
  console.log("🚀 ~ users:", users);
  const headers = getColumnHeaders(users) ?? [];
  return (
    <table className="w-full border rounded-xl shadow-lg border-gray-300">
      <TableHeader headers={headers} />
      <TableBody users={users} />
    </table>
  );
};

export default Table;
