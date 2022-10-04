import './App.sass'

import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscAccount, VscGear, VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc"

import logo from './vs-themer-logo-dark.png'

function App() {
  return (
    <div className="App">
      <main className="vs-app">
        <div className="Side-Bar">
          
        </div>
        <div className="Editor"></div>
        <div className="Terminal"></div>
        <div className="ActivityBar">
          <div className="ActivityBarTop">
            <div className="ActivityBarSpacing ActivityBarIcon">
              <VscFiles />
            </div>
            <div className="ActivityBarIcon">
              <VscSearch />
            </div>
            <div className="ActivityBarSpacing ActivityBarIcon">
              <VscSourceControl />
            </div>
            <div className="ActivityBarIcon">
              <VscExtensions />
            </div>
          </div>
          <div className="ActivityBarBottom">
          <div className="ActivityBarIcon">
            <VscAccount />
          </div>
          <div className="ActivityBarSpacing ActivityBarIcon">
            <VscGear />
          </div>
          </div>
        </div>
        <div className="Minimap"></div>
        <div className="TitleBar">
          <div className="TitleBarLeft">
            <img className="logo" src={logo} />
            <ul>
              <li>File</li>
              <li className="TitleBarSpacing">Edit</li>
              <li>Selection</li>
              <li className="TitleBarSpacing">View</li>
              <li>Go</li>
              <li className="TitleBarSpacing">Run</li>
              <li>Terminal</li>
              <li className="TitleBarSpacing">Help</li>
            </ul>
          </div>
          <div className="TitleBarCenter">
            <div>
              <span>Project Name</span>
              -
              <span>Project Folder</span>
              -
              <span>Visual Studio Code</span>
            </div>
          </div>
          <div className="TitleBarRight">
            <VscChromeMinimize />
            <VscChromeMaximize className="TitleBarSpacing" />
            <VscChromeClose />
          </div>
        </div>
        <div className="StatusBar"></div>
      </main>
    </div>
  );
}

export default App;
