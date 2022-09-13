import React, { useState } from 'react';
import "../Styles/global.scss"

// ================= components ================= //
import Navbar from './Navbar';
import ScribblePage from './ScribblePage';

function App() {
  const [displayedPage, setDisplayedPage] = useState("Scribble Board")
  return (
    <>
      <Navbar displayedPage={displayedPage} />
      <ScribblePage />
    </>
  );
}

export default App;
