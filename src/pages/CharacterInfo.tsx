import { Outlet } from "react-router-dom";
import MenuList from "../components/MenuList";

function CharacterInfo() {
  return (
    <>
      <MenuList />
      <Outlet />
    </>
  );
}

export default CharacterInfo;
