//파일정보 : src/index.js
import ReactDOM from 'react-dom/client';
import {App} from './step17/App';
// import {App} from './App003';
// import {Login} from './Loginpage';
// const App = ()=> {
//   const divStyle= {
//     border: '1px solid blue'
//   }
//   return (
//     <div style={divStyle}>
//     <p>안냥하세요</p>
//     <p>반갑습니다</p>
//     </div>
//   );
// }
// ReactDOM.render(<App/>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Login/> */}
  {console.log('lender')}
  <App/>
  </>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();