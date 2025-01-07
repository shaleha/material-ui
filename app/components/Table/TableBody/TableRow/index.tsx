import { TableUser } from "@/app/types/user";
import { FC } from "react";
import { renderNestedValue } from "../../utils";

interface TableRowProps {
  user: TableUser;
}

const TableRow: FC<TableRowProps> = ({ user }) => {
  console.log("🚀 ~ user:", user);
  return (
    <tr>
      {Object.values(user).map((value, index) => (
        <td
          key={`${user.id} ${index}`}
          className="border border-gray-300 px-4 py-2"
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
