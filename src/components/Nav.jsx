import { headerLogo, man } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../redux/const/actionsTypes";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user_info_dap_v1"));
    if (localUser && localUser.user) {
      setAuthenticated(true);
      setLocalUserData(localUser.user);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const [authenticated, setAuthenticated] = useState(false);
  const [localUserData, setLocalUserData] = useState(null);

  function handleLogOut(e) {
    e.preventDefault();
    // Dispatch logout action
    dispatch({ type: LOGOUT });
    // Clear user data from localStorage
    localStorage.removeItem("user_info_dap_v1");
    navigate("/login");
  }

  return (
    <header className="pading-x sm:py-8 absolute z-50 w-screen">
      <nav className="flex justify-between items-center max-container padding-l">
        <Link to="/">
          <img src={headerLogo} alt="LOGO" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {!authenticated && (
          <>
            <Link to="/signup">
              <button className="bg-white text-teal-600 rounded-lg p-4 mx-1 max-lg:hidden">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-teal-600 text-white rounded-lg p-4 mx-1 max-lg:hidden">
                Log In
              </button>
            </Link>
          </>
        )}
        {authenticated && (
          <div className="flex flex-row justify-around  items-center max-container padding-l  max-lg:hidden">
            <Link to="/dashboard">
              <img
                src={
                  localUserData.profilePicture
                    ? localUserData.profilePicture
                    : man
                }
                alt="User Profile"
                width={100}
                height={26}
                className="rounded-full px-1"
              />
            </Link>
            <div className="flex  flex-col">
              <Link to="/dashboard">
                <h2 className="font-palanquin sm:text-2xl  max-sm:leading[41]   text-[#007E85] inline-block  ">
                  {localUserData.firstName}
                </h2>
              </Link>
              <Link onClick={handleLogOut}>
                <button className="bg-red-600 text-white rounded-lg p-2 mx-1 max-lg:hidden">
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className="hidden max-lg:block ">
          <img
            className="mx-8"
            src={hamburger}
            onClick={toggleDropdown}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="w-full bg-green-500 hidden max-lg:block ">
          <ul className="flex-1 text-center gap-16  ">
            {navLinks.map((item) => (
              <li
                className="py-2  hover:bg-teal-300 hover:text-black active:bg-Emerald-100 focus:outline-none focus:ring focus:ring-Emerald-300   focus:text-black   "
                key={item.label}
              >
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-stone-50  focus:text-black hover:text-Emerald-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!authenticated && (
              <>
                <li className="py-2  hover:bg-teal-300 hover:text-black active:bg-Emerald-100 focus:outline-none focus:ring focus:ring-Emerald-300   focus:text-black">
                  <Link
                    to="/login"
                    className="font-montserrat leading-normal text-lg text-stone-50  focus:text-black hover:text-Emerald-800"
                  >
                    Log In
                  </Link>
                </li>
                <li className="py-2  hover:bg-teal-300 hover:text-black active:bg-Emerald-100 focus:outline-none focus:ring focus:ring-Emerald-300   focus:text-black">
                  <Link
                    to="/signup"
                    className="font-montserrat leading-normal text-lg text-stone-50  focus:text-black hover:text-Emerald-800"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {authenticated && (
              <li className="py-2  hover:bg-teal-300 hover:text-black active:bg-Emerald-100 focus:outline-none focus:ring focus:ring-Emerald-300   focus:text-black">
                <Link to="/dashboard">
                  <div className="flex flex-row justify-center px-1 items-center">
                    <img
                      src={
                        localUserData.profilePicture
                          ? localUserData.profilePicture
                          : man
                      }
                      alt="User Profile"
                      width={50}
                      height={13}
                      className="rounded-full px-1"
                    />{" "}
                    <h2 className="font-palanquin sm:text-2xl  max-sm:leading[41]   text-[#007E85] inline-block  ">
                      {localUserData.firstName}
                    </h2>
                  </div>
                </Link>
              </li>
            )}
            {authenticated && (
              <li className="py-2  hover:bg-red-600 hover:text-black active:bg-red-100 focus:outline-none focus:ring focus:ring-red-600   focus:text-black">
                <Link
                  onClick={handleLogOut}
                  className="font-montserrat leading-normal text-lg text-stone-50  focus:text-black hover:text-stone-800"
                >
                  LOG OUT
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({ user_info_dap_v1: state.user });

export default connect(mapStateToProps)(Nav);
