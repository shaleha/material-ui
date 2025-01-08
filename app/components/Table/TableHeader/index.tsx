import { FC } from "react";
import { useTableContext } from "../../Providers/TableProvider";

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  const { borderStyle } = useTableContext();
  const baseClass = "px-4 text-center";

  return (
    <thead className={`bg-gray-100`}>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className={`${baseClass} ${borderStyle}`}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
