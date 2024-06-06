import '~app/styles/App.css';
import { Header } from '~widgets/site/header';
import { AppRouter } from './providers/router';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
