import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



export default function App() {
  return (
    <Router >
      <div className='flex flex-col justify-between h-screen'>
      <Navbar title="Github Tracker" />
      <main className='container mx-auto px-3 pb-12'>main app </main>
      <Footer  />
      </div>
    </Router>
  )
}