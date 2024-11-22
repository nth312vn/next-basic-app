"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { clearCookieService, logoutService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

export default function AccountMenuButton({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const router = useRouter();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logoutService();
      await clearCookieService();
      logout();
      router.push("/login");
    } catch {
      toast.error("Failed to logout");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
