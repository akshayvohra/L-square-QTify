// App.js
import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import 'swiper/css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Top Albums Section */}
      <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />

      {/* New Albums Section */}
       <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
      
      {/* Songs Section */}
      <Section title="Songs" 
      apiUrl="https://qtify-backend-labs.crio.do/songs" isSongsSection={true} />

      
      {/* <Card /> */}
    </div>
  );
}

export default App;





