import { User } from "@/app/types/user";

export const renderNestedValue = (obj: any) => {
  if (typeof obj === "object") {
    return Object.values(obj).join(", ");
  }
  return obj;
};

export const getColumnHeaders = (users: User[]) => {
  if (users.length === 0) {
    return [];
  }
  const user = users[0];
  return Object.keys(user).reduce<string[]>((acc, key) => {
    acc.push(key);

    return acc;
  }, []);
};
