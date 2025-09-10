import { Route, Routes } from 'react-router-dom'
import Courses from '@/pages/Courses/Courses';
import Home from '@/pages/Home/Home';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  )
}

export default AppRouter