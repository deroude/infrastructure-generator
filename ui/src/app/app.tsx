// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes } from 'react-router-dom';
import Signin from './pages/signin/signin';
import Home from './pages/home/home';

export function App() {
  return (
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/" Component={Signin} />
    </Routes>
  );
}

export default App;
