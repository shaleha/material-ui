import { FC } from "react";

export type PaginationProps = {
  pageNumber: number;
  changePage: (newPage: number) => void;
  total: number;
  limit: number;
};

const Pagination: FC<PaginationProps> = ({
  pageNumber,
  changePage,
  total,
  limit,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => changePage(pageNumber - 1)}
        disabled={pageNumber === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {pageNumber} of {Math.ceil(total / limit)}
      </span>
      <button
        onClick={() => changePage(pageNumber + 1)}
        disabled={pageNumber * limit >= total}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
