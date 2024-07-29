import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Login from './Pages/Auth/Login/Login';
import Homepage from './Pages/Homepage/Homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/katalog' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}