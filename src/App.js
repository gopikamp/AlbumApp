import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAllAlbum from './components/ViewAllAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/Search' element={<SearchAlbum/>}/>
      <Route path='/Delete' element={<DeleteAlbum/>}/>
      <Route path='/ViewAll' element={<ViewAllAlbum/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
