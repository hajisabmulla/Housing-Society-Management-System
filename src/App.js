import { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header'
import{BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './MyComponents/Footer'
import SocietyMemberLogin from './SocietyMemberpages/SocietyMemberLogin';
import SocietyMemberPage from './SocietyMemberpages/SocietyMemberPage';



import ChairmanLogin from './ChairmanPage/ChairmanLogin';
import ChairmanSignup from './ChairmanPage/ChairmanSignup';
import ChairmanCRUD from './ChairmanPage/SidebarOption/ChairmanCRUD';
import ForgetPassword from './Pages/ForgetPassword';
import ChairmanMainPage from './ChairmanPage/ChairmanMainPage'
import CMMeetings from './ChairmanPage/SidebarOption/CMMeetings';

import SecretaryLogin from './SecretaryPage/SecretaryLogin';
import SecretarySignUp from './SecretaryPage/SecretarySignUp';
import ManageMeetings from './SecretaryPage/SidebarOptions/ManageMeetings';
import SecretaryMainPage from './SecretaryPage/SecretaryMainPage';
import SidebarSecretary from './SecretaryPage/SidebarSecretary';

import LoginPage from './MyComponents/LoginPage';

import SocietyMemberSignUp from './SocietyMemberpages/SocietyMemberSignUp' 
import SidebarSocietyMember from './SocietyMemberpages/SidebarSocietyMember';
import UserProfile from './SocietyMemberpages/SidebarOptions/UserProfile'
import MonthlyFees from './SocietyMemberpages/SidebarOptions/MonthlyFees';
import AnnualFees from './SocietyMemberpages/SidebarOptions/AnnualFees';
import OneTimeFees from './SocietyMemberpages/SidebarOptions/OneTimeFees';
import Meetings from './SocietyMemberpages/SidebarOptions/Meetings';

import TreasurerLogin from './TreasurerPage/TreasurerLogin';
import TreasurerSignUp from './TreasurerPage/TreasurerSignUp';
import ManageExpenses from './TreasurerPage/SideBarTreasurer/ManageExpenses';
import ViewFees from './TreasurerPage/SideBarTreasurer/ViewFees';
import SideBarTreasurer from './TreasurerPage/SideBarTreasurer';
import TreasurerMainPage from './TreasurerPage/TreasurerMainPage';
import TRMeetings from './TreasurerPage/SideBarTreasurer/TRMeetings'



import AddMeetings from './SecretaryPage/SidebarOptions/AddMeetings';
import SidebarChairman from './ChairmanPage/SidebarChairman';
// import Alert from './MyComponents/Alert'

import Alert from './MyComponents/Context/Alert'
import Payment from './MyComponents/Payment';
import AlertContext from './MyComponents/Context/alertContext';
import AlertReducer from './MyComponents/Context/alertReducer';
import AlertState from './MyComponents/Context/AlertState';
function App() {


  // const [alert, setAlert] = useState(null);

  
  // const showAlert = (message, type)=>{

  //   setAlert({
  //     msg: message,
  //     type: type
  
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1500);
    
  // }







  return (
    <div className="App">
      
    <BrowserRouter>
    
    <Header/>
   
  <Routes>
    
      <Route path='/'  element={<Home/>}/>
      <Route path='LoginPage'  element={<LoginPage/>}/>
      <Route path='SocietyLogin'  element={<SocietyMemberLogin/>}/>


      <Route path='ChairmanLogin' element={<ChairmanLogin/>}/>
      <Route path="ChairmanSignup" element={<ChairmanSignup/>}/>
      <Route path='ChairmanCRUD' element={<ChairmanCRUD/>}/>
      <Route path="ChairmanMainPage" element={<ChairmanMainPage/>}/>
      <Route path="SidebarChairman" element={<SidebarChairman/>}/>
      <Route path="CMMeetings" element={<CMMeetings/>}/>



      <Route path='SecretaryLogin' element={<SecretaryLogin/>}/>
      <Route path='SecretarySignUp' element={<SecretarySignUp/>}/>
      <Route path='ManageMeetings' element={<ManageMeetings/>}/>
      <Route path='SecretaryMainPage' element={<SecretaryMainPage/>}/>
      <Route path='SidebarSecretary' element={<SidebarSecretary/>}/>
      <Route path='AddMeetings' element={<AddMeetings/>}/>

      <Route path='TreasurerMainPage' element={<TreasurerMainPage/>}/>
      <Route path='TreasurerLogin' element={<TreasurerLogin/>}/>
      <Route path='TreasurerSignup' element={<TreasurerSignUp/>}/>
      <Route path='ForgetPassword' element={<ForgetPassword/>}/>
      <Route path='ManageExpenses' element={<ManageExpenses/>}/>
      <Route path='ViewFees' element={<ViewFees/>}/>
      <Route path='SideBarTreasurer' element={<SideBarTreasurer/>}/>
      <Route path='TRMeetings' element={<TRMeetings/>}/>



      <Route path='SocietyMemberSignUp' element={<SocietyMemberSignUp/>}/>
      <Route path="SocietyMemberPage" element={<SocietyMemberPage/>}/>
      <Route path="SidebarSocietyMember" element={<SidebarSocietyMember/>}/>
      <Route path="UserProfile" element={<UserProfile/>}/>
      <Route path="MonthlyFees" element={<MonthlyFees/>}/>
      <Route path="AnnualFees" element={<AnnualFees/>}/>
      <Route path="OneTimeFees" element={<OneTimeFees/>}/>
      <Route path="Meetings" element={<Meetings/>}/>


      <Route path="Payment" element={<Payment/>}/>
      <Route path="ALert" element={<Alert/>}/>
      <Route path="AlertContext" element={<AlertContext/>}/>
      <Route path="AlertReducer" element={<AlertReducer/>}/>
      <Route path="AlertState" element={<AlertState/>}/>
  </Routes>
    
    <Footer/>
    
    
    </BrowserRouter>

    </div>
  );
}

export default App;
