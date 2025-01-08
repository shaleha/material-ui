import { FC } from "react";

type SortByProps = {
  sort: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
};
const SortBy: FC<SortByProps> = ({ sort, onChange, list }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <label>Sort by:</label>
      <select
        value={sort}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded"
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
