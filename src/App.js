import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import StudentsDataComponent from './components/StudentsDataComponent.jsx';


function App() {


  return (
    <div className='App'>
      <div>Test APP</div>
      <br/>
      <StudentsDataComponent/>
    </div>
  );
}

export default App;
