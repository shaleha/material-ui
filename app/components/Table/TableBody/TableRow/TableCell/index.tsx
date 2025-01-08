import { FC } from "react";
import { renderNestedValue } from "../../../utils";
import { useTableContext } from "@/app/components/Providers/TableProvider";

type CellProps = {
  value: string;
};

const TableCell: FC<CellProps> = ({ value }) => {
  const { borderStyle } = useTableContext();
  const baseClass = "px-4 py-2 text-center";

  return (
    <td className={`${baseClass} ${borderStyle}`}>
      {renderNestedValue(value)}
    </td>
  );
};

export default TableCell;
