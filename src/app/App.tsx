
import { Home } from '../pages/ui/home/Home';
import './styles/App.css';

import { AppRouter } from './router';
import { PersonalInfo } from '~pages/personalInformation/index';

function App() {
  return (
    <>

      <Home/>
      <PersonalInfo />

    </>
  );
}

export default App;
