import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Scholarship from './pages/Scholarship';
import LoadingScreen from './components/LoadingScreen';

import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import PopupForm from './components/PopupForm';

function App() {
  return (
    <>
      <ScrollToTop />
      <LoadingScreen />
      <FloatingContact />
      <PopupForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseSlug" element={<CourseDetail />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
    </>
  );
}

export default App;

