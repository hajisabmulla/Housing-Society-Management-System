import './App.css';
import Header from './MyComponents/Header'
import Home from './Pages/Home';
import Footer from './MyComponents/Footer'

import SocietyMemberLogin from './SocietyMemberpages/SocietyMemberLogin';
import SocietyMemberPage from './SocietyMemberpages/SocietyMemberPage';
import SocietyMemberSignUp from './SocietyMemberpages/SocietyMemberSignUp' 
import SidebarSocietyMember from './SocietyMemberpages/SidebarSocietyMember';
import UserProfile from './SocietyMemberpages/SidebarOptions/UserProfile';
import MonthlyFees from './SocietyMemberpages/SidebarOptions/MonthlyFees';
import AnnualFees from './SocietyMemberpages/SidebarOptions/AnnualFees';
import OneTimeFees from './SocietyMemberpages/SidebarOptions/OneTimeFees';
import Meetings from './SocietyMemberpages/SidebarOptions/Meetings';
import Payment from './MyComponents/Payment'



import STUserProfile from './SecretaryPage/STUserProfile';
import SecretaryLogin from './SecretaryPage/SecretaryLogin';
import SecretarySignUp from './SecretaryPage/SecretarySignUp';
import ManageMeetings from './SecretaryPage/SidebarOptions/ManageMeetings';
import SecretaryMainPage from './SecretaryPage/SecretaryMainPage';
import SidebarSecretary from './SecretaryPage/SidebarSecretary';
import AddMeetings from './SecretaryPage/SidebarOptions/AddMeetings';

import TreasurerLogin from './TreasurerPage/TreasurerLogin';
import TreasurerSignUp from './TreasurerPage/TreasurerSignUp';
import ManageExpenses from './TreasurerPage/SideBarTreasurer/ManageExpenses';
import ViewAnnualFees from './TreasurerPage/SideBarTreasurer/ViewAnnualFees';
import ViewMonthlyFees from './TreasurerPage/SideBarTreasurer/ViewMonthlyFees'
import ViewOneTimeFees from './TreasurerPage/SideBarTreasurer/ViewOneTimeFees'
import SideBarTreasurer from './TreasurerPage/SideBarTreasurer';
import TreasurerMainPage from './TreasurerPage/TreasurerMainPage';
import TRMeetings from './TreasurerPage/SideBarTreasurer/TRMeetings'
import TRUserProfile from './TreasurerPage/TRUserProfile'



import ChairmanLogin from './ChairmanPage/ChairmanLogin';
import ChairmanSignup from './ChairmanPage/ChairmanSignup';
import ChairmanCRUD from './ChairmanPage/SidebarOption/ChairmanCRUD';
import ChairmanMainPage from './ChairmanPage/ChairmanMainPage'
import CMMeetings from './ChairmanPage/SidebarOption/CMMeetings';
import CMUserProfile from './ChairmanPage/CMUserProfile';
import LoginPage from "./MyComponents/LoginPage"
import SidebarChairman from './ChairmanPage/SidebarChairman';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/SocietyMemberLogin">{user ? <SocietyMemberPage/> : <SocietyMemberLogin />}</Route>
        <Route path="/SocietyMemberPage">{user ? <Home /> : <SocietyMemberSignUp />}</Route>
        <Route path="/SocietyMemberSignUp">{user ? <Home /> : <SocietyMemberSignUp />}</Route>
        <Route path="/SidebarSocietyMember">{user ? <SidebarSocietyMember/> : <SocietyMemberSignUp/>}</Route>
        <Route path="/UserProfile">{user ? <UserProfile/> : <SocietyMemberSignUp/>}</Route>
        <Route path="/MonthlyFees">{user ? <MonthlyFees/> : <SocietyMemberSignUp/>}</Route>
        <Route path="/AnnualFees">{user ? <AnnualFees/> : <SocietyMemberSignUp/>}</Route>
        <Route path="/OneTimeFees">{user ? <OneTimeFees/> : <SocietyMemberSignUp/>}</Route>  
        <Route path="/Meetings">{user ? <Meetings /> : <SocietyMemberSignUp/>}</Route>


        <Route path="/TreasurerSignUp">{user ? <Home/> : <TreasurerSignUp />}</Route>
        <Route path="/TreasurerLogin">{user ? <TreasurerMainPage/> : <TreasurerLogin />}</Route>
        <Route path="/ManageExpenses">{user ? <ManageExpenses/> : <TreasurerSignUp />}</Route>
        <Route path="/ViewAnnualFees">{user ? <ViewAnnualFees/> : <TreasurerSignUp />}</Route>
        <Route path="/ViewMonthlyFees">{user ? <ViewMonthlyFees/> : <TreasurerSignUp />}</Route>
        <Route path="/ViewOneTimeFees">{user ? <ViewOneTimeFees/> : <TreasurerSignUp />}</Route>
        <Route path="/SideBarTreasurer">{user ? <SideBarTreasurer/> : <TreasurerSignUp />}</Route>
        <Route path="/TreasurerMainPage">{user ? <Home/> : <TreasurerSignUp />}</Route>
        <Route path="/TRMeetings">{user ? <TRMeetings/> : <TreasurerSignUp/>}</Route>
        <Route path="/TRUserProfile">{user ? <TRUserProfile/> : <TreasurerSignUp/>}</Route>




        <Route path="/SecretaryLogin">{user ? <SecretaryMainPage/> : <SecretaryLogin />}</Route>
        <Route path="/SecretarySignup">{user ? <SecretaryLogin/> : <SecretarySignUp/>}</Route>
        <Route path="/ManageMeetings">{user ? <ManageMeetings/> : <SecretarySignUp/>}</Route>
        <Route path="/SecretaryMainPage">{user ? <SecretaryMainPage/> : <SecretarySignUp/>}</Route>
        <Route path="/SidebarSecretary">{user ? <SidebarSecretary/> : <SecretarySignUp/>}</Route>
        <Route path="/AddMeetings">{user ? <AddMeetings/> : <SecretarySignUp/>}</Route>
        <Route path="/STUserProfile">{user ? <STUserProfile/> : <SecretarySignUp/>}</Route>




        <Route path="/ChairmanSignup">{user ? <ChairmanLogin/> : <ChairmanSignup />}</Route>
        <Route path="/ChairmanLogin">{user ? <ChairmanMainPage /> : <ChairmanLogin />}</Route>
        <Route path="/ChairmanCRUD">{user ? <ChairmanCRUD /> : <ChairmanSignup />}</Route>
        <Route path="/CMUserProfile">{user ? <CMUserProfile/> : <ChairmanSignup />}</Route>
        <Route path="/ChairmanMainPage ">{user ? <ChairmanMainPage /> : <ChairmanSignup />}</Route>
        <Route path="/CMMeetings">{user ? <CMMeetings /> : <ChairmanSignup/>}</Route>
        <Route path="/Payment">{user ? <Payment /> : <Home />}</Route>
        <Route path="/LoginPage " element={<LoginPage/>}/>
        <Route path="/SidebarChairman ">{user ? <SidebarChairman /> : <ChairmanSignup />}</Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
