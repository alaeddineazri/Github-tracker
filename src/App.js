import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';




export default function App() {
  return (
    <Router >
      <div className='flex flex-col justify-between h-screen'>
      <Navbar title="Github Tracker" />
      <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      </main>
      <Footer  />
      </div>
    </Router>
  )
}