import { Outlet, Route, Routes } from 'react-router-dom';

import HeaderPatentSelection from '../../layouts/headerPatentSelection/HeaderPatentSelection';
import MainPatentSelection from '../../layouts/sections/mainPatentSelection/MainPatentSelection';
import CreatePatent from '../../layouts/sections/createPatent/CreatePatent';
import MyBriefcase from '../../layouts/sections/myBriefcase/MyBriefcase';
import SearchServices from '../../layouts/sections/searchServices/SearchServices';
import MKTUDirectory from '../../layouts/sections/MKTUDirectory/MKTUDirectory';

export const LayoutPatentSelection = () => (
  <>
    <HeaderPatentSelection />
    <Outlet />
  </>
);

function PatentSelection() {
  return (
    <div className="bg-teal-50 min-h-screen pb-6">
      <Routes>
        <Route path="/" element={<LayoutPatentSelection />}>
          <Route index element={<MainPatentSelection />} />
          <Route path="/createPatent" element={<CreatePatent />} />
          <Route path="/myBriefcase" element={<MyBriefcase />} />
          <Route path="/searchServices" element={<SearchServices />} />
          <Route path="/mktuDirectory" element={<MKTUDirectory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default PatentSelection;
