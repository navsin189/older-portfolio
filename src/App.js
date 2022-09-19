import React,{useEffect} from 'react';
import './App.css';
import AppBar from './AppBar';
import Dashboard from './DashBoard';
function App() {
  useEffect(() => {
    document.title = "Naveen - DevOps Engineer"
  },[])
  return (
    
    <React.Fragment>
      <div style={{minWidth:"344px"}}>
      <AppBar />
      <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
