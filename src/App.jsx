import './App.scss';
import Main from './components/Main/Main';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/it-services' />} />
        <Route path='/it-services' element={<Main />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
