import './App.sass'

import { VscFiles } from "react-icons/vsc"

function App() {
  return (
    <div className="App">
      <main className="vs-app">
        <div className="Side-Bar">
          <VscFiles />
        </div>
        <div className="Editor"></div>
        <div className="Terminal"></div>
        <div className="ActivityBar"></div>
        <div className="Minimap"></div>
        <div className="TitleBar"></div>
        <div className="StatusBar"></div>
      </main>
    </div>
  );
}

export default App;
