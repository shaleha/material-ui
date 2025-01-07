import { FC } from "react";

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="border border-gray-300 px-4 text-center">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
