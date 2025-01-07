export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface TableUser {
  id: number;
  name: string;
  username: string;
  email: string;
  "address street": string;
  "address suite": string;
  "address city": string;
  "address zipcode": string;
  phone: string;
  website: string;
  "company name": string;
  "company catchPhrase": string;
  "company bs": string;
}

export interface UsersPageProps {
  users: User[];
}
