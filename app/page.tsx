"use client";

import { useEffect, useState } from "react";
import { User } from "./types/user";
import Table from "./components/Table";
import { getColumnHeaders } from "./components/Table/utils";
import Filter from "./components/Filter";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import { TableProvider } from "./components/Providers/TableProvider";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [sortList, setSortList] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("name");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/users?page=${page}&limit=${limit}&filter=${filter}&sort=${sort}`
    );
    const data = await res.json();

    setUsers(data.data);
    setSortList(getColumnHeaders(data.data));
    setTotal(data.total);
    setLoading(false);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Handle filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setPage(1); // Reset to first page when filter changes
  };

  // Handle sorting change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    fetchUsers();
  }, [page, limit, filter, sort]);

  return (
    <div className="h-screen w-full bg-white p-10 gap-4 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center mb-6">Users List </h1>

      <div className="flex flex-col w-full justify-start gap-4">
        {/* Filter Input */}
        <Filter
          filter={filter}
          onChange={handleFilterChange}
          placeHolder="Filter by name or company"
        />

        {/* Sorting Dropdown */}
        <SortBy sort={sort} onChange={handleSortChange} list={sortList} />
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex flex-col justify-between">
          <TableProvider withBorders>
            <Table users={users} />
          </TableProvider>
          {/* Pagination Controls */}
          <Pagination
            pageNumber={page}
            changePage={handlePageChange}
            total={total}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
};

export default UsersPage;
