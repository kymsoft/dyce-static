"use client";

import Image from "next/image";
import React, { useState } from "react";
import { components, images } from "@/constants";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import NavigationMenuArea from "@/components/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const Home = () => {
  const [isClick, setIsClick] = useState(false);

  const toogleNavbar = (): void => {
    setIsClick(!isClick);
  };
  return (
    <div className="home-bg h-[100vh]">
      <div className="py-5 pl-10 pr-5 flex items-end justify-between">
        <div className="flex items-end">
          <Image
            src={images.logo}
            alt="Logo"
            height={24}
            width={24}
            className="mx-2"
          />
          <h3 className="text-white">Dyce</h3>
        </div>
        <div className="flex items-end max-md:hidden">
          <NavigationMenuArea />
        </div>

        <div className="flex items-end space-x-3">
          <div>
            <Link
              href="/sign-in"
              className="text-white border px-4 py-2 text-sm rounded-md hover:bg-slate-700"
            >
              Sign In
            </Link>
          </div>
          <div className="md:hidden items-center">
            <Button
              className="inline-flex items-center justify-center p-2 rounded-md
          focus:outline-none bg-transparent hover:bg-transparent"
              onClick={toogleNavbar}
            >
              {isClick ? (
                <ImCross height={20} className="text-2xl" />
              ) : (
                <IoReorderThreeOutline className="text-2xl" />
              )}
            </Button>
            {isClick && (
              <div className="fixed md:hidden ml-auto w-full h-full bg-slate-700 mt-2 pt-10 p-4 rounded-md left-0 right-0 shadow-md transition-all duration-1000 ease-in-out overflow-y-auto opacity-95">
                <div className="px-2 pt-2 pb-2 space-y-3 sm:px-3 ">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white">
                        Why Dyce?
                      </AccordionTrigger>
                      <AccordionContent className="text-white">
                        <ul className=" gap-3 p-6 ">
                          <li className="row-span-3">
                            <div>
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
                                  Dyce is a package solution that aims to step
                                  up the payment and checkout ecosystem in
                                  Africa through the introduction of 3 solid
                                  products. The Wallet, A Virtual Terminal and
                                  The S-mall
                                </p>
                              </a>
                            </div>
                          </li>
                          <ListItem
                            href="/"
                            title="Get Started"
                            className="text-white"
                          >
                            Register your Dyce Account. Sign up, Link your
                            cards, and start making seamless, contactless
                            payments in seconds.
                          </ListItem>
                          <ListItem
                            href="/"
                            title="Installation"
                            className="text-white"
                          >
                            Get your Wallet and Terminals on App Store or Google
                            store to enjoy our services.
                          </ListItem>
                          <ListItem
                            href="/"
                            title="Panel"
                            className="text-white"
                          >
                            Access your dashboard for management. Hop on on the
                            ecosystem of tomorrow. You are good to go!
                          </ListItem>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-white">
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="text-white">
                        <ul className=" gap-3 p-6 ">
                          <ListItem
                            href="/sign-in"
                            title="Wallet"
                            className="text-white"
                          >
                            A digital wallet for contactless payment initiation
                            with your virtual payment cards
                          </ListItem>
                          <ListItem
                            href="/sign-in"
                            title="Terminal"
                            className="text-white"
                          >
                            A virtual Point Of Sale terminal for receiving
                            payments and boosting productivity
                          </ListItem>
                          <ListItem
                            href="/sign-in"
                            title="S-mall"
                            className="text-white"
                          >
                            A mobile self-checkout system for better shopping
                            experience
                          </ListItem>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-white">
                        Resources
                      </AccordionTrigger>
                      <AccordionContent className="text-white">
                        <ul className=" w-[400px] gap-3 p-4 ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                              className="text-white"
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      
                      <div className="mb-8 mt-4">
                        <ListItem href="/sign-in" className="text-white text-[15px]">
                          Pricing
                        </ListItem>
                      </div>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <div className="mb-8">
                        <ListItem
                          href="mailto:kemdinachi@dyce.com"
                          className="text-white text-[15px]"
                        >
                          Contact
                        </ListItem>
                      </div>
                    </AccordionItem>
                  </Accordion>

                  <div className="w-full">
                    <Link href="/sign-up">
                      <Button className="bg-[#3e006e] hover:bg-[#1b0030] w-full rounded-2xl px-3 py-1 opacity-100">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex h-[80vh] justify-center items-center ">
        <div className="block">
          <h1 className="text-center mx-10 text-white mb-2 text-3xl md:mx-48">
            Skip the hassle. One Tap at the Time.
          </h1>
          <h2 className="text-center mx-10 text-white mb-10 text-xl md:mx-48">
            Stepping up Africa&apos;s payment and checkout ecosystem. Hop on!
          </h2>
          <div className="text-center">
            <Link
              href="/sign-up"
              className="rounded-lg text-white bg-[#3E006E] px-4 py-3 hover:bg-[#6800B8] text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <div>
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
      </div>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Home;
