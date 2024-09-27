import React from "react";
import { NavbarComponent } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footercomponent } from "./Footer";
import ChatBot from "../../pages/auth/ChatBot";
export default function RootLayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className="dark:bg-black">
        <Outlet />
        <ChatBot/>
      </main>
      <Footercomponent />
    </>
  );
}
