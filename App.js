import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About'

function App() {
  return (
    <div>
       <Navbar
   title='TextUtils'
   about= 'About TextUtils'
   />
   <div className='container my-3'>
{/* <Textform
heading = 'Enter text to analyze below'
/> */}
<About/>
   </div>
   
    </div>
  
  );
}

export default App;
