import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './Pages/LandPage';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/r" element={"Hello"} />
    </Routes>
    
    </>
  );
}

export default App;
