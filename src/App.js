import './App.css';
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import UserDetails from './components/UserDetails';



function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/UserDetails"  element={<UserDetails />} />
      </Routes>
    </main>
  );
}

export default App;
