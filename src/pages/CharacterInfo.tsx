import { Outlet } from 'react-router-dom';
import MenuList from '../components/MenuList';

function CharacterInfo() {
  return (
    <div>
      <MenuList />
      <Outlet />
    </div>
  );
}

export default CharacterInfo;
