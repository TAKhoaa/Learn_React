import React from "react";

import { Navbar, Typography, Chip } from "@material-tailwind/react";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block"></div>
        <div className="flex items-center gap-x-1">
          <div className="flex gap-2">
            <Chip color="blue" value="blue" />
            <Chip color="red" value="red" />
            <Chip color="green" value="green" />
            <Chip color="amber" value="amber" />
            <Chip color="pink" value="pink" />
            <Chip color="indigo" value="indigo" />
            <Chip color="purple" value="purple" />
            <Chip color="teal" value="teal" />
            <Chip color="cyan" value="cyan" />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
