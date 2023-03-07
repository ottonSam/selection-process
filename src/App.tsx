import React, { useState } from "react";
import { FormPage } from "./pages/FormPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      {!showForm ? (
        <LandingPage goToForm={handleShowForm} />
      ) : (
        <FormPage goToHome={handleShowForm} />
      )}
    </div>
  );
}

export default App;
