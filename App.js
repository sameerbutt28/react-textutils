import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //will tell wehather dark mode is enables or not
  const [labelText, setLabelText] = useState('Enable Light Mode')

  const toogleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setLabelText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';

    }
    else {
      setMode('dark')
      setLabelText('Enable Light Mode')
      document.body.style.backgroundColor = '#042743';

    }
  }
  return (
    <>
      <Main>
        <Navbar
          mode={mode}
          toogleMode={toogleMode}
          labelText={labelText}
          // labelClick ={labelClick}
          title='TextUtils'
          about='About TextUtils'
        />
        <Routes>
          <Route exact path='/textform' element={<Textform
            heading='Enter text to analyze below'
            mode={mode}

          />} />
          <Route exact path='/about' element={<About/>} />

        </Routes>



      </Main>


    </>

  );
}

export default App;
