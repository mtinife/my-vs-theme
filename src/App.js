import './App.sass'

import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscAccount, VscGear, VscChromeMinimize, VscChromeMaximize, VscChromeClose, VscEllipsis, VscChevronDown, VscRemote, VscError, VscWarning, VscBracketDot, VscFeedback, VscBellDot, VscCircleLargeFilled } from "react-icons/vsc"
import { DiPython } from "react-icons/di"

import logo from './vs-themer-logo-dark.png'

function App() {
  return (
    <div className="App">
      <main className="vs-app">
      <div className="TitleBar">
          <div className="TitleBarLeft">
            <img className="logo" src={logo} />
            <div>
              <span className="TitleBarSpacing">File</span>
              <span>Edit</span>
              <span className="TitleBarSpacing">Selection</span>
              <span>View</span>
              <span className="TitleBarSpacing">Go</span>
              <span>Run</span>
              <span className="TitleBarSpacing">Terminal</span>
              <span>Help</span>
            </div>
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
        <div className="StatusBar">
          <div className="StatusBarRemote">
            <VscRemote />
          </div>
          <div className="StatusBarContent">
            <div className="StatusBarContentLeft">
              <VscError />
              <span> 0 </span>
              <VscWarning />
              <span> 0 </span>
            </div>
            <div className="StatusBarContentRight">
              <p className="spacing">Ln <span>0,</span> Col <span>0</span></p>
              <p>Spaces: <span>4</span></p>
              <p className="spacing">UTF-8</p>
              <p>CRLF</p>
              <p className="spacing"><VscBracketDot /> Python</p>
              <p>Layout: US</p>
              <p className="spacing"><VscFeedback /></p>
              <p><VscBellDot /></p>
            </div>
          </div>
        </div>
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
        <div className="SideBar">
          <div className="SideBarTop">
            <div className="SideBarExplorer">
              <p>explorer</p>
              <div><VscEllipsis /></div>
            </div>
            <div className="SideBarFileGroup">
              <div><VscChevronDown /></div>
              <p>Project Folder Title</p>
            </div>
          </div>
          <div className="SideBarBottom">
            <div className="SideBarFileGroup borderTop">
              <div><VscChevronDown /></div>
              <p>outline</p>
            </div>
            <div className="SideBarFileGroup borderTop">
              <div><VscChevronDown /></div>
              <p>timeline</p>
            </div>
          </div>
        </div>
        <div className="Editor">
          <div className="EditorTabGroup">
            <div className="EditorTabs">
              <p>
                <DiPython />
                demo.py
              </p>
              <p><VscCircleLargeFilled /></p>
            </div>
          </div>
          <div className="EditorContainer"></div>
        </div>
        <div className="Terminal"></div>

      </main>
    </div>
  );
}

export default App;
