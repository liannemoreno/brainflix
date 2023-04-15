import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import UploadVideo from './pages/UploadVideo/UploadVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/video/:idFromParams' element={<HomePage />}></Route>
          <Route path='/video-upload' element={<UploadVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

