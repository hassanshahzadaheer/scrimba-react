import react from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
function Page(){

  return (
    <div className="container">
      <div className='card'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );

}

export default function App(){

  const jsxPage = <Page/>
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(jsxPage);
}
