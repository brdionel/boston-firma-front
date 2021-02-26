import './App.css';
import ContratoPage from './pages/ContratoPage'
// import Page404 from './pages/Page404'
import { BrowserRouter, Route } from 'react-router-dom';
import { DOMAIN, BASENAME } from './settings'

console.log(BASENAME)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route 
          path={`${BASENAME}/contrato/:clicrm`} 
          component={ContratoPage}
        /> 
        {/* <Route 
          path='*' 
          component={Page404}
        />  */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
