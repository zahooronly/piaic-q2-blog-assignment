"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navigation() {
  const loggedIn: boolean = false;
  return (
    <div className="flex justify-between px-4">
      <NavigationMenu className="px-4 py-3">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Logo</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="px-4 py-3">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Blogs</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="">
        <NavigationMenuItem>
          {loggedIn ? (
            <Image
              src="/person.jpg"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <Link href="/">
              <Button className="bg-primary text-white">Login</Button>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
