import React from 'react';
import { Badge } from '@/src/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { GET_USERS } from '@/src/utils/gql/queries/users';
import { useQuery } from '@apollo/client';

export default function Component() {
  const [users, setUsers] = React.useState([]);
  useQuery(GET_USERS, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      console.log('users', data);
      setUsers(data.users);
    },
  });
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Users</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className='hidden sm:table-cell'>User</TableHead>
              <TableHead className='hidden sm:table-cell'>Email</TableHead>
              <TableHead className='hidden md:table-cell'>Role</TableHead>
              <TableHead className='hidden md:table-cell'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.image} />
                  </Avatar>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  {user.name}
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {user.email}
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant='secondary'>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell  '>
                  <Badge className='text-xs' variant='default'>
                    Edit
                  </Badge>
                  <Badge className='text-xs' variant='default'>
                    Delete
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
