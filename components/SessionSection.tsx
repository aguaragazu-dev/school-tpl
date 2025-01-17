import { useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { Settings, User, LogOut, LogIn } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SessionSection(): JSX.Element {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  if (isSignedIn && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.imageUrl} alt={user.fullName || "User avatar"} />
              <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-sm font-medium dark:text-white">
              {user.firstName}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href="/admin" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center w-full" onClick={() => { signOut({redirectUrl: '/'}) }}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Salir</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button variant="ghost" asChild className="p-0">
      <Link href="/sign-in" className="flex items-center hover:text-blue-400">
        <LogIn className="mr-2 h-4 w-4" />
        <span>Ingresar</span>
      </Link>
    </Button>
  );
}