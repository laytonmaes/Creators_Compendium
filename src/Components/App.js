import React, { useState } from 'react';
import "../Styles/global.scss"

// ================= components ================= //
import Navbar from './Navbar';
import ScribblePage from './ScribblePage';
import Footer from './Footer';

const App = () => {
  const [displayedPage, setDisplayedPage] = useState("Scribble Board")
  return (
    <>
      <Navbar displayedPage={displayedPage} />
      <ScribblePage />
      <Footer />
    </>
  );
}

export default App;
