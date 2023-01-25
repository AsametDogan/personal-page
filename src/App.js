
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { MainPage, ContactPage } from './pages';

function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-row w-screen h-screen bg-blueberrybackground text-sm overflow-hidden">
        <Navbar />
        <div className='rounded-lg w-full'>

          <Routes>
            <Route default path='/*' element={<MainPage />} />
            <Route path='/projects' element={<MainPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
