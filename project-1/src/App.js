import react from 'react';
import  ReactDOM  from 'react-dom/client';
import Main from './components/Main.js';

import NavBar from './components/Navbar';
function Page(){

  return (
    <>
    <NavBar/>
    <Main/>
    </>
  );

}

export default function App(){

  const jsxPage = <Page/>
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(jsxPage);
}
