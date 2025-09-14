import { Route, Routes } from "react-router-dom";
import Courses from "@/pages/Courses/Courses";
import Home from "@/pages/Home/Home";
import All_PurchasedCourses from "@/pages/Purchased Courses/All_PurchasedCourses";
import Faq from "@/pages/FAQ/FAQ.tsx";
import Lesson from "@/pages/Lesson/Lesson";
import AllMentors from "@/pages/All Mentors/AllMentors";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/PurchasedCourses" element={<All_PurchasedCourses />} />
      <Route path="/FAQ" element={<Faq />} />
      <Route path="/Lesson/*" element={<Lesson />} />
      <Route path="/AllMentors" element={<AllMentors />} />
    </Routes>
  );
};

export default AppRouter;
