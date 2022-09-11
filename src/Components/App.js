import React, { useState } from 'react';
import "../Styles/global.scss"

// ================= components ================= //
import Navbar from './Navbar';

function App() {
  const [displayedPage, setDisplayedPage] = useState("scribble")
  return (
    <main>
      <Navbar displayedPage={displayedPage} />
    </main>
  );
}

export default App;
