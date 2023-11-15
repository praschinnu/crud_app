import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Header from './components/Header';
import Read from './components/Read';
import Update from './components/Update';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Create></Create>}></Route>
        <Route exact path='/read' element={<Read></Read>}></Route>
        <Route exact path='/edit/:id' element={<Update></Update>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

