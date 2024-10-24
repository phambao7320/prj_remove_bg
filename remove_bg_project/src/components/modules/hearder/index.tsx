import React from "react";
import { assets } from "@assets/index";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <header className="h-20">
      <nav className="flex items-center justify-between h-full">
        <img src={assets.logo} />
        {!isSignedIn && (
          <span
            className="flex items-center justify-center gap-2 bg-[#313131] h-14 w-52 rounded-[40px] cursor-pointer"
            onClick={() => openSignIn({})}
          >
            <span className="text-white">Get started</span>
            <img src={assets.arrow_icon} />
          </span>
        )}
        {isSignedIn && (
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center gap-3 bg-[#D7EBFF] h-12 w-[202px] rounded-[40px]">
              <img src={assets.credit_icon} className="size-6" />
              <span className="text-[#4A4A4A]">Credits left: 4</span>
            </span>
            <span>Hi! {user.fullName}</span>
            <UserButton />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
