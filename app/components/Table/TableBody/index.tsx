import { User } from "@/app/types/user";
import { FC } from "react";
import TableRow from "./TableRow";
import { flattenUser } from "../utils";

interface TableBodyProps {
  users: User[];
}

const TableBody: FC<TableBodyProps> = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TableRow key={user.id} user={flattenUser(user)} />
      ))}
    </tbody>
  );
};

export default TableBody;
