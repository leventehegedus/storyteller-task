import React, { useState } from "react";
import MainContent from "./components/MainContent";
import Overlay from "./components/Overlay";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header open={isMenuOpen} setOpen={setIsMenuOpen} />
      <MainContent isMenuOpen={isMenuOpen} />
      <Overlay isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default App;
