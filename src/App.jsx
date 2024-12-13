import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Example1Page from './pages/exemple1';
import Example2Page from './pages/exemple2';
import Example3Page from './pages/exemple3';

import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exemple1" element={<Example1Page />} />
          <Route path="/exemple2" element={<Example2Page />} />
          <Route path="/exemple3" element={<Example3Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;