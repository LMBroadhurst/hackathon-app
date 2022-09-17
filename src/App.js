import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import GroupOverview from './Routes/GroupOverview';
import Login from './Routes/Login';
import Register from './Routes/Register';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/groupOverview' element={<GroupOverview />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
