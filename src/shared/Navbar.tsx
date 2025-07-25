"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menu from "../assets/images/hamburger2.png";
import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { logout } from "@/redux/authSlice";

// import { Button } from "./ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.auth?.user);
  // console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
     Cookies.remove("accessToken", {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  })
  };
  // console.log(user);
  return (
    <section className=" py-4 h-[133px] z-50 relative flex ">
      <div className="absolute h-full top-0 bg-white w-full lg:w-[55%] "></div>
      <div className="relative lg:px-28 md:px-12 px-5 flex gap-3 justify-between items-center w-full">
        <Link href="/" id="image" className="my-auto flex gap-2">
          <Image src={logo} alt="logo_image"></Image>
          <span className="text-xl font-extrabold font-manrope text-[#1F2937]">
            Aviation™
          </span>
        </Link>
        <div
          id="routes"
          className="lg:flex hidden gap-1 flex-wrap my-auto items-center space-x-8 justify-end"
        >
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-[#F76641]"
          >
            Home
          </Link>
          <Link
            href="#licenses"
            className="text-lg font-medium transition-colors hover:text-[#F76641]"
          >
            Lizenzen
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-[#F76641]"
          >
            Kontakt
          </Link>

          <Link
            href="/shop"
            className="text-lg font-medium transition-colors hover:text-[#F76641]"
          >
            Shop
          </Link>
          {/* <Image src={user?.imgUrl || ""} width={80} height={80} alt={user?.name}></Image> */}
          {/* Login Button */}
          {user !== null ? (
            <>
              {user.role === "STUDENT" ? (
                <Link
                  href="/user-dashboard"
                  className="text-lg font-medium transition-colors hover:text-[#F76641]"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/admin"
                  className="text-sm text-[#F76641] font-manrope border border-[#F76641] px-5 py-2 rounded-lg shadow-md hover:bg-[#F76641] hover:text-white transition duration-200"
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-sm text-[#F76641] font-manrope border border-[#F76641] px-5 py-2 rounded-lg shadow-md hover:bg-[#F76641] hover:text-white transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-[#F76641] font-manrope border border-[#F76641] px-5 py-2 rounded-lg shadow-md hover:bg-[#F76641] hover:text-white transition duration-200"
              >
                Login
              </Link>
            </>
          )}
        </div>

        <div
          id="mobile and tablet version"
          className="my-auto h-full lg:hidden flex items-center"
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={menu} alt="hamburger_menu" width={30} height={30} />
          </button>
          {isOpen && (
            <div
              id="social-slider"
              className="fixed top-0 left-0 h-[40vh] w-full bg-[#f6efe3] text-orange-500 z-50 shadow-lg"
            >
              <div className="px-10 h-full relative">
                {/* Close Button */}
                <button
                  className="absolute top-10 md:right-10 right-4 bg-orange-500 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-orange-600 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>

                {/* Navigation Links */}
                <div
                  id="routes"
                  className="flex flex-col items-center justify-center h-full gap-4"
                >
                  <Link
                    href="/"
                    className="text-lg font-semibold text-orange-500 hover:text-white hover:bg-orange-500 px-6 py-1 rounded-full transition duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    href="#licenses"
                    className="text-lg font-semibold text-orange-500 hover:text-white hover:bg-orange-500 px-6 py-1 rounded-full transition duration-200"
                  >
                    Lizenzen
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg font-semibold text-orange-500 hover:text-white hover:bg-orange-500 px-6 py-1 rounded-full transition duration-200"
                  >
                    Kontakt
                  </Link>
                  <Link
                    href="/shop"
                    className="text-lg font-semibold text-orange-500 hover:text-white hover:bg-orange-500 px-6 py-1 rounded-full transition duration-200"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/login"
                    className="text-lg font-semibold text-orange-500 hover:text-white hover:bg-orange-500 px-6 py-1 rounded-full transition duration-200"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
