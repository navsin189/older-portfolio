import React,{useEffect} from 'react';
import './App.css';
import AppBar from './AppBar';
import Dashboard from './DashBoard';
import LabelBottomNavigation from './BottomNavigation';
function App() {
  useEffect(() => {
    document.title = "Naveen - DevOps Engineer"
  },[])
  return (
    
    <React.Fragment>
      <div style={{minWidth:"344px",backgroundColor:"#F9F9F9"}}>
      <AppBar />
      <Dashboard />
      <LabelBottomNavigation />
      </div>
    </React.Fragment>
  );
}

export default App;
