import { User } from "@/app/types/user";

export const renderNestedValue = (obj: any) => {
  if (typeof obj === "object") {
    return Object.values(obj).join(", "); // Join nested object values
  }
  return obj;
};

// Extract all keys from the User object, including nested objects
export const getColumnHeaders = (users: User[]) => {
  if (users.length === 0) {
    return [];
  }
  const user = users[0]; // Assuming users array is not empty
  console.log("🚀 ~ getColumnHeaders ~ user:", user);
  return Object.keys(user).reduce<string[]>((acc, key) => {
    if (typeof user[key as keyof User] === "object") {
      // If the value is an object, expand its keys as well
      acc.push(
        ...Object.keys(user[key as keyof User]).map(
          (nestedKey) => `${key}\n${nestedKey}`
        )
      );
    } else {
      acc.push(key);
    }
    return acc;
  }, []);
};

export const flattenUser = (
  obj: any,
  parentKey: string = ""
): { [key: string]: any } => {
  let result: { [key: string]: any } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const prop = obj[key];
      const newKey = parentKey ? `${parentKey} ${key}` : key;

      if (typeof prop === "object" && prop !== null) {
        // Recursively flatten objects
        result = { ...result, ...flattenUser(prop, newKey) };
      } else {
        // Assign the flattened value
        result[newKey] = prop;
      }
    }
  }

  return result;
};
