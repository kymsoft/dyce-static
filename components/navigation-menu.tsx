import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { components } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "@/constants";

const NavigationMenuArea = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Why Dyce?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.90fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium flex items-end">
                      <Image
                        src={images.logo}
                        alt="Logo"
                        height={36}
                        width={36}
                        className=" bg-[#3e006e] p-2 rounded-md mr-2"
                      />
                      Dyce
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Dyce is a package solution that aims to step up the payment and checkout ecosystem in Africa through the introduction of 3 solid products. The Wallet, A Virtual Terminal and The S-mall
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/sign-in" title="Get Started">
                Register your Dyce Account. Sign up, link your cards, and start
                making seamless, contactless payments in seconds.
              </ListItem>
              <ListItem href="/sign-in" title="Installation">
                Get your Wallet and Terminals on App Store or Google store to
                enjoy our services.
              </ListItem>
              <ListItem href="/sign-in" title="Panel">
                Access your dashboard for management. Hop on on the ecosystem of
                tomorrow. You are good to go!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" gap-3 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/sign-in" title="Wallet">
                A digital wallet for contactless payment initiation with your
                virtual payment cards
              </ListItem>
              <ListItem href="/sign-in" title="Terminal">
                A virtual Point Of Sale terminal for receiving payments and
                boosting productivity
              </ListItem>
              <ListItem href="/sign-in" title="S-mall">
                A mobile self-checkout system for better shopping experience
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sign-in" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="mailto:kemdinachi@dyce.com" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuArea;
