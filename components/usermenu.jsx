"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const Usermenu = () => {
  return (
    <UserButton appearance={{ elements: { avatarBox: "w-60 h-60" } }}>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/events"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default Usermenu;
