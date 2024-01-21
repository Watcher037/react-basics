import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TexForm from './components/TexForm';
import About from './components/About';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Navbar/>
<div className="container">
{/* <h3>Enter the text to analyze</h3> */}
         {/* <TexForm/> */}
         <About/>
     </div>
    </>
  );
}

export default App
