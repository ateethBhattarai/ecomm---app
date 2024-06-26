import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Cart from "./Cart";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SideMenu from "./SideMenu";
import svg from "/logo.svg";

const Navbar = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { user } = useUserContext();

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(45,39,39,0.97)]">
      <MaxWidthWrapper className="border-b mb-2 py-3 flex items-center justify-around">
        <div>
          <Link to={"/"}>
            <img src={svg} height={"50px"} width={"50px"}></img>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search here..."
            className="py-1 px-2 max-sm:hidden rounded-lg border-2 border-gray-400 outline-none"
          />
        </div>

        {/* Desktop view */}
        <div className="flex gap-5 max-md:hidden">
          {user ? (
            <Link to={"/"} className="btn btn-ghost rounded-xl font-medium">
              Logout ({user.name})
            </Link>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-ghost rounded-xl font-medium"
              >
                Login
              </Link>
              <span className="border" />
              <Link
                to={"/sign-up"}
                className="btn btn-ghost rounded-xl font-medium"
              >
                SignUp
              </Link>
            </>
          )}
          <span className="border" />
          <div className="flex items-center gap-1.5 indicator">
            <Cart quantity={cartQuantity} className="h-5 w-5" />
            <span className="badge badge-md mt-2 indicator-item">
              {cartQuantity >= 99 ? "99+" : cartQuantity}
            </span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <SideMenu />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
