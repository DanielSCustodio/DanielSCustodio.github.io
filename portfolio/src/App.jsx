import React from "react";
import Sections from "./gridSections/Sections";
import "./App.css";
const App = () => {
  React.useEffect( () => {
    const script = document.createElement( "script" );
    script.src = "./static/js/script.js";
    script.async = true;
    script.document = document;
    document.body.appendChild( script );
  }, [] )
  return (
    <main className="body" style={ { height: '300vh' } }>
      <Sections />
    </main>
  );
}

export default App;
