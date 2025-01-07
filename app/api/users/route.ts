// app/api/users/route.ts
import { User } from "@/app/types/user";
import { NextResponse } from "next/server";

// Function to fetch users from JSONPlaceholder
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("🚀 ~ fetchUsers ~ response:", response);
  if (!response.ok) {
    throw new Error("Failed to fetch users from JSONPlaceholder");
  }
  const data = await response.json();
  return data;
};

// Handle the GET request for users with pagination, sorting, and filtering
export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page") || "1";
  const limit = url.searchParams.get("limit") || "10";
  const sort = url.searchParams.get("sort") || "name";
  const filter = url.searchParams.get("filter") || "";

  try {
    const usersData: User[] = await fetchUsers();
    console.log("🚀 ~ usersData:", usersData);

    // Pagination
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    let users = usersData;

    // Filtering by name or company name
    if (filter) {
      users = users.filter(
        (user) =>
          user.name.toLowerCase().includes(filter.toLowerCase()) ||
          user.company.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // Sorting by field
    users = users.sort((a, b) => {
      const field = sort as keyof User;
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });

    // Return the paginated, filtered, and sorted users
    return NextResponse.json({
      data: users.slice(startIndex, endIndex),
      total: users.length,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users from JSONPlaceholder" },
      { status: 500 }
    );
  }
}
