import { FC } from "react";

type FilterProps = {
  filter: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
};

const Filter: FC<FilterProps> = ({
  filter,
  onChange,
  placeHolder = "Filter",
}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <label htmlFor="filter" className="text-sm font-semibold text-gray-700">
        Filter:
      </label>
      <input
        id="filter"
        type="text"
        placeholder={placeHolder}
        value={filter}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default Filter;
