import { Outlet } from "react-router-dom";
import FetchData from "../components/FetchData";

function CharacterInfo() {
  return (
    <>
      <FetchData />
      <Outlet />
    </>
  );
}

export default CharacterInfo;
