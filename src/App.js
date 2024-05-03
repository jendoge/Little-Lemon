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

// "To get started, install the Node modules by running 'npm install'. If the installation fails, ensure that you are in the 'Little-Lemon' directory. If not, navigate to it by using 'cd Little-Lemon'."
// "Alternatively, you can copy and paste to replace the 'public' and 'src' directories with another React app."
// "If you encounter any errors while running 'npm start', please install the following dependencies:
// 'npm install react-router-dom'
// 'npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons'
// 'npm install yup'
// 'npm install formik'"
// Happy Learning
