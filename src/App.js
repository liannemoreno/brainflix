import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import UploadVideo from './pages/UploadVideo/UploadVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/video/:idFromParams' element={<HomePage />}></Route>
          <Route path='/video-upload' element={<UploadVideo />}></Route>
          <Route path= '*' element= {<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

