import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(tmpNote => (
        <Note 
          key={tmpNote.key}
          title={tmpNote.title}
          content={tmpNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
