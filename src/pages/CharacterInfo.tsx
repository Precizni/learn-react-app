import { Outlet } from 'react-router-dom';
import MenuList from '../components/MenuList';

function CharacterInfo() {
  return (
    <div className="my-16">
      <h1 className="mb-10 text-center text-4xl font-bold">Search LotR data</h1>
      <MenuList />
      <Outlet />
    </div>
  );
}

export default CharacterInfo;
