import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />    
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
