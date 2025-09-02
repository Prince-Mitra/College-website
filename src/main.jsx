import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import CoursesPage from './Pages/CourseCard.jsx';
import Gallery from './Pages/Gallery.jsx';
import Faculty from './components/Faculty.jsx';
import Department from './components/Department.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="courses" element={<CoursesPage/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="faculty" element={<Faculty/>}/>
      <Route path="department" element={<Department/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
