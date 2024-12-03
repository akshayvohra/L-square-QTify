// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to haha reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import  'swiper/css';


function App() {
  const searchData = []; // Your search data goes here

  return (
    <div className="App">
      <Navbar searchData={searchData} />
      <Hero />
      {/* Top Albums Section */}
      <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />

      {/* New Albums Section */}
      <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
      {/* <Card /> */}
    </div>
  );
}

export default App;

