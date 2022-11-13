import React,{useEffect} from 'react';
import './App.css';
import AppBar from './AppBar';
import Dashboard from './DashBoard';
import LabelBottomNavigation from './BottomNavigation';

const initialState = true
const reducer = (state, action) => {
  switch(action) {
    case 'Truth':
      return false
    case 'False':
      return true
    default:
      return state
  }
}


export const context = React.createContext()

function App() {
  const [theme, dispatch] = React.useReducer(reducer,initialState)
  useEffect(() => {
    document.title = "Naveen - DevOps Engineer"
  },[])
  return (
    
    <React.Fragment>
      <context.Provider value={{themeState: theme, themeDispatch: dispatch}}>
      <div style={{minWidth:"344px",backgroundColor:"#F9F9F9"}}>
      <AppBar />
      <Dashboard />
      <LabelBottomNavigation />
      </div>

      </context.Provider>
    </React.Fragment>
  );
}

export default App;
