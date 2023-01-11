import Layouts from './components/Layouts';
import './App.scss';
import { BrowserRouter as Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element= {<Layouts />} />
    </Routes>
    </div>
  );
}

export default App;
