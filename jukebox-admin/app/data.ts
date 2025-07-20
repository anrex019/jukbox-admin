
export type User = {
    id: number;
    name: string;
    bio: string;
    date: string;
    status: 'Active' | 'Inactive';
  };
  
  export const mockData: User[] = [
    {
      id: 1,
      name: 'Brooklyn Simmons',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '24 Oct, 2023',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jenny Wilson',
      bio: 'Sed do eiusmod tempor incididunt ut labore.',
      date: '12 Nov, 2023',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation.',
      date: '3 Dec, 2023',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Wade Warren',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate.',
      date: '18 Jan, 2024',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Kristin Watson',
      bio: 'Excepteur sint occaecat cupidatat non proident.',
      date: '29 Feb, 2024',
      status: 'Active',
    },
  ];