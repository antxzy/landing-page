import './App.css';
import Contact from "./components/Contact.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/scss/themes.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
