import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Home from './Home';
import MyProfile from './MyProfile';
import Mocktest from './Mocktest';
import Practicequiz from './Practicequiz';
import TestPage from './TestPage';
import Allcourses from './Allcourses';
import Footer from './Footer';
import About from '../footer/About';
import Services from '../footer/Services';
import Legal from '../footer/Legal';
import Faq from '../footer/Faq';
import Contact from '../footer/Contact';
import MyCourse from './Mycourse';
import AdminLogin from '../admin/AdminLogin';
import Protection from '../admin/Protection';
import AdminDashboard from '../admin/AdminDashboard';
import ChapterUpload from '../admin/ChapterUpload';
import QuizManager from '../admin/QuizManager';
import StudentList from '../admin/StudentList';
import ProtectedRoute from './ProtectedRoute';
import CoursePage from '../coursesDiscription/CoursePage';
import Video from './video';


const Router = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/Mocktest" element={<Mocktest />} />
          <Route path="/video" element={<Video />} />
          
          <Route path="Mocktest/:test" element={<TestPage />} />
          <Route path="/allcourses" element={<Allcourses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/PrivacyPolicy" element={<Legal />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/coursediscription" element={<CoursePage />} />
          
          <Route path="/AdminLogin" element={<AdminLogin />} />


          <Route element={<Protection />}>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/chapters" element={<ChapterUpload />} />
          <Route path="/quiz" element={<QuizManager />} />
          <Route path="/students" element={<StudentList />} />
        </Route>
        <Route element={<ProtectedRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/pquiz" element={<Practicequiz />} />
          <Route path="/MyCourse" element={<MyCourse />} />
        </Route>
        </Routes>
    </div>
  )
}

export default Router
