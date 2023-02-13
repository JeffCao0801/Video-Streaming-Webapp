import { BsCollectionPlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";


function MobileFooter() {
  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";

  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;
  return (
    <>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/movieslist" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <FiUserCheck />
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
