"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === pathname || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      className={cn(
        "transition-colors text-lg duration-200 text-gray-600 hover:text-rose-500",
        className,
        isActive && "text-rose-500"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
