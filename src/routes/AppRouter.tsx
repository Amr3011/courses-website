import { Route, Routes } from "react-router-dom";
import Courses from "@/pages/Courses/Courses";
import Home from "@/pages/Home/Home";
import All_PurchasedCourses from "@/pages/Purchased Courses/All_PurchasedCourses";
import Faq from "@/pages/FAQ/FAQ.tsx";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/PurchasedCourses" element={<All_PurchasedCourses />} />
        <Route path="/FAQ" element={<Faq />} />

    </Routes>
  );
};

export default AppRouter;
