import { Route, Routes } from 'react-router-dom';
import './App.css';
import SIgnUp from './Components/Form/SignUp/SIgnUp';
import Index from './Pages/LandPage';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/signup" element={<SIgnUp />} />
    </Routes>
    
    </>
  );
}

export default App;
