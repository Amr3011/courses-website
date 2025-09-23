import { Route, Routes } from "react-router-dom";
import Courses from "@/pages/Courses/Courses";
import Home from "@/pages/Home/Home";
import All_PurchasedCourses from "@/pages/Purchased Courses/All_PurchasedCourses";
import Faq from "@/pages/FAQ/FAQ.tsx";
import Lesson from "@/pages/Lesson/Lesson";
import AllMentors from "@/pages/All Mentors/AllMentors";
import Login from "@/pages/Auth/Login/Login";
import SignUp from "@/pages/Auth/SignUp/SignUp";
import BlogDetails from "@/pages/Blog Details/BlogDetails";
import MentorsDetails from "@/pages/Mentors Details/MentorsDetails";
import Contact_Us from "@/pages/Contact_Us/Contact_Us";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact_Us />} />
      <Route path="/PurchasedCourses" element={<All_PurchasedCourses />} />
      <Route path="/FAQ" element={<Faq />} />
      <Route path="/Lesson/*" element={<Lesson />} />
      <Route path="/AllMentors" element={<AllMentors />} />
      <Route path="/AllMentors/:id" element={<MentorsDetails />} />
      {/* <Route path="/Blog" element={<Blog />} /> */}
      <Route path="/Blog/:id" element={<BlogDetails />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
