import logo from './logo.svg';
import './App.css';
import ironhackLogo from './images/IH Logo.png'
import hamMenu from './images/Hamburguer Menu.png'
import fixPic from './images/Fix.png'
import playPic from './images/Play.png'
import settingsPic from './images/Settings.png'
import codePic from './images/Code.png'




function App() {
  return (
    <div className="App"> 
    <navbar>
    <img src={ironhackLogo} alt="ironhack logo" />
    <img src={hamMenu} alt="hamburguer menu" />
    </navbar>
    <div className="App-header">
    <h1>
    Say Hello to ReactJS
    </h1>
    <p>
      You will learn how to use the most popular frontend library, and become a super Ninja developer.
    </p>
    <button>
      Awesome!
    </button>
    </div>
    <div className= "features">
      <div>
        <img src={fixPic} alt="fix picture"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={playPic} alt="play picture"/>
        <h3>Declarative</h3>
        <p>Build encapsulated components that manager their state.</p>
      </div>
      <div>
        <img src={settingsPic} alt="settings picture"/>
        <h3>Declarative</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={codePic} alt="code picture"/>
        <h3>Declarative</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
    </div>

  );
}

export default App;
