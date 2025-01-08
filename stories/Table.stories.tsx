import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { User } from "@/app/types/user";
import { TableProvider } from "@/app/components/Providers/TableProvider";
import Table, { UsersTableProps } from "@/app/components/Table";
import "../app/styles/globals.css";

// Example user data
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    website: "www.johndoe.com",
    company: {
      name: "Acme Corp",
      catchPhrase: "Innovation in the future",
      bs: "Tech Solutions",
    },
    address: {
      street: "123 Elm St",
      suite: "Suite 100",
      city: "Metropolis",
      zipcode: "12345",
      geo: { lat: "40.7128", long: "-74.0060" },
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    website: "www.janesmith.com",
    company: {
      name: "Beta Ltd",
      catchPhrase: "Leading the industry",
      bs: "Consulting",
    },
    address: {
      street: "456 Oak St",
      suite: "Suite 200",
      city: "Gotham",
      zipcode: "54321",
      geo: { lat: "34.0522", long: "-118.2437" },
    },
  },
];

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    withBorders: { control: "boolean" },
    borderStyle: {
      control: "select",
      options: [
        "border-gray-100",
        "border-gray-300",
        "border-blue-500",
        "border-red-500",
      ], // Available border styles
    },
    users: {
      control: "object", // Control type to allow editing the users list
      defaultValue: users, // Set default users
    },
  },
} as Meta;

// The template that will accept the args
const Template: StoryFn<UsersTableProps> = (args) => {
  return (
    <TableProvider
      withBorders={args.withBorders}
      borderStyle={`${args.borderStyle}`}
    >
      <Table {...args} />
    </TableProvider>
  );
};

// Story for the table with dynamic args
export const Default = Template.bind({});
Default.args = {
  withBorders: false, // Default value for withBorders
  borderStyle: "border-blue-300", // Default border style
  users,
};
