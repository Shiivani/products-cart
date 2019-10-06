import React,{Component} from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { ProductProvider } from './context.js';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <ProductProvider>
        <BrowserRouter>
          <div className="app-container">    
            <Main/>
          </div>
        </BrowserRouter>
      </ProductProvider>
    )
  }

}

export default App;
