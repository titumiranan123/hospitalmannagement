import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar: React.FC = () => {
  interface linkProp {
    href: string;
    className: string;
    title: string;
  }
  const CustomLink = ({ href, title, className }: linkProp) => {
    return (
      <Link className={`${className} text-[16px] `} to={href}>
        {title}
      </Link>
    );
  };
  const path = useLocation();
  console.log(path);
  return (
    <div className="max-w-[1240px] mx-auto">
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} />
        </div>
        <div className="">
          <CustomLink href="/" title="Home" className=" " />
          <CustomLink href="/finde-doctor" title="Find Doctor" className=" " />
          <CustomLink href="/our-service" title="Our Services" className=" " />
          <CustomLink href="/about" title="About" className=" " />
          <CustomLink href="/contact" title="Contact" className=" " />
        </div>
        <div>
          <button>Sign Up </button>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
