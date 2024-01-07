import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Art, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { forest } from './assets';

// Create a context for the global state
const AppContext = createContext();

// Create a custom hook to access the context
export const useAppContext = () => useContext(AppContext);

const App = () => {
  // State variables for the global context
  const [is3DButtonClicked, setIs3DButtonClicked] = useState(false);

  // Function to handle 3D button click and update toggle state
  const handle3DButtonClick = () => {
    setIs3DButtonClicked(true);
    console.log('3D button clicked');
    // Other logic if needed
  };

  // Function to update both is3DButtonClicked and toggleState
  const updateStates = () => {
    handle3DButtonClick(); // Update is3DButtonClicked
    // Add logic to update toggleState
    // setToggleState(...); // Update toggleState
  };

  // Provide the state and functions through the context
  const contextValue = {
    is3DButtonClicked,
    updateStates, // Add the function to the context
  };

  return (
    <AppContext.Provider value={{ is3DButtonClicked, handle3DButtonClick }}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            <About />
          </div>
          <Experience />
          <Tech />
          <Works />
          <Art />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
