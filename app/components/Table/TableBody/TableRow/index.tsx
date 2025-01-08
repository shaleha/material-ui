import { User } from "@/app/types/user";
import { FC } from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  user: User;
}

const TableRow: FC<TableRowProps> = ({ user }) => {
  return (
    <tr>
      {Object.values(user).map((value, index) => (
        <TableCell key={index} value={value} />
      ))}
    </tr>
  );
};

export default TableRow;
