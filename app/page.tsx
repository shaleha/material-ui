"use client";

import { useEffect, useState } from "react";
import { User } from "./types/user";
import Table from "./components/Table";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("name");
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch users based on filter, pagination, and sorting
  const fetchUsers = async () => {
    setLoading(true);

    // Make the API request to get users based on the current state (pagination, sorting, filtering)
    const res = await fetch(
      `/api/users?page=${page}&limit=${limit}&filter=${filter}&sort=${sort}`
    );
    console.log("🚀 ~ fetchUsers ~ res:", res);
    const data = await res.json();

    setUsers(data.data);
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
    // Fetch the data whenever pagination, sorting, or filtering changes
    fetchUsers();
  }, [page, limit, filter, sort]);

  return (
    <div className="h-screen w-full bg-white p-10 gap-4 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center mb-6">Users List: </h1>

      <div className="flex flex-row w-full justify-start gap-6">
        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter by name or company"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 p-2 rounded"
        />

        {/* Sorting Dropdown */}
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        // <>
        //   <ul className="list-none p-0">
        //     {users.map((user) => (
        //       <li
        //         key={user.id}
        //         className="p-4 border-b border-gray-200 flex flex-col items-center text-lg font-bold text-center"
        //       >
        //         <h2>{user.name}</h2>
        //         <p>{user.email}</p>
        //         <p>{user.company.name}</p>
        //       </li>
        //     ))}
        //   </ul>

        //   {/* Pagination Controls */}
        //   <div className="flex justify-between mt-4">
        //     <button
        //       onClick={() => handlePageChange(page - 1)}
        //       disabled={page === 1}
        //       className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        //     >
        //       Previous
        //     </button>
        //     <span>
        //       Page {page} of {Math.ceil(total / limit)}
        //     </span>
        //     <button
        //       onClick={() => handlePageChange(page + 1)}
        //       disabled={page * limit >= total}
        //       className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        //     >
        //       Next
        //     </button>
        //   </div>
        // </>
        <Table users={users} />
      )}
    </div>
  );
};

export default UsersPage;
