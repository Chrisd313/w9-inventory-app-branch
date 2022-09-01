import Navbar from './Navbar';
import Home from './Home';
import Create from './CreateForm';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/createitem" element ={<Create />} />
        </Routes>
      </div>
    </>
  )
}



export default App;

 