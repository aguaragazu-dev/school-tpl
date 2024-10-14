'use client';

import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
</boltArtifact>

Now, let's update the side menu to be role-specific and responsive:

<boltArtifact id="responsive-side-menu" title="Create responsive and role-specific side menu">
<boltAction type="file" filePath="components/SideMenu.tsx">
'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Home,
  Users,
  FileText,
  Calendar,
  BookOpen,
  Bell,
  Settings,
} from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const adminNavItems: NavItem[] = [
  { title: 'Dashboard', href: '/admin', icon: <Home size={20} /> },
  { title: 'Users', href: '/admin/users', icon: <Users size={20} /> },
  { title: 'News', href: '/admin/news', icon: <FileText size={20} /> },
  { title: 'Events', href: '/admin/events', icon: <Calendar size={20} /> },
];

const teacherNavItems: NavItem[] = [
  { title: 'Dashboard', href: '/teacher', icon: <Home size={20} /> },
  { title: 'Courses', href: '/teacher/courses', icon: <BookOpen size={20} /> },
  { title: 'Students', href: '/teacher/students', icon: <Users size={20} /> },
];

const studentNavItems: NavItem[] = [
  { title: 'Dashboard', href: '/student', icon: <Home size={20} /> },
  { title: 'Courses', href: '/student/courses', icon: <BookOpen size={20} /> },
  { title: 'Grades', href: '/student/grades', icon: <FileText size={20} /> },
];

const parentNavItems: NavItem[] = [
  { title: 'Dashboard', href: '/parent', icon: <Home size={20} /> },
  { title: 'Children', href: '/parent/children', icon: <Users size={20} /> },
  { title: 'Notifications', href: '/parent/notifications', icon: <Bell size={20} /> },
];

export default function SideMenu() {
  const { data: session } = useSession();
  const pathname = usePathname();

  let navItems: NavItem[] = [];

  switch (session?.user?.role) {
    case 'ADMIN':
      navItems = adminNavItems;
      break;
    case 'TEACHER':
      navItems = teacherNavItems;
      break;
    case 'STUDENT':
      navItems = studentNavItems;
      break;
    case 'PARENT':
      navItems = parentNavItems;
      break;
    default:
      navItems = [];
  }

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start',
              pathname === item.href
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:underline'
            )}
          >
            {item.icon}
            <span className="ml-3">{item.title}</span>
          </Button>
        </Link>
      ))}
    </nav>
  );
}