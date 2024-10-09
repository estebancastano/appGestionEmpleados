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
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';

export default function Component() {
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
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src={'https://github.com/shadcn.png'} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className='hidden sm:table-cell'>Juan Pablo</TableCell>
              <TableCell className='hidden md:table-cell'>ArangoJp1@gmial.com</TableCell>
              <TableCell className='hidden sm:table-cell'>
                <Badge className='text-xs' variant='secondary'>
                  Fulfilled
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
