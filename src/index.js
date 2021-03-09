import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Photo from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>  
    <div className="page"> 
      <div className="page_image">
        <h1> Photo Feed</h1>    
      </div>
      <Photo />
    </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

   
