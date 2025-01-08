import { FC } from "react";
import TableRow from "./TableRow";
import { UsersTableProps } from "..";

const TableBody: FC<UsersTableProps> = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </tbody>
  );
};

export default TableBody;
