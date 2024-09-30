import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import BookingPage from './Components/BookingPage/BookingPage';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import About from './Components/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookingPage />} />
      </Route>
      <Route path="/admin" element={<AdminDashboard />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
