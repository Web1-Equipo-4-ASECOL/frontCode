import './App.css';
import './assets/style.css';
import TheHeader from './Components/TheHeader';
import TheHome from './Components/TheHome';
import TheServices from './Components/TheServices';
import TheNews from './Components/TheNews';
import TheTeam from './Components/TheTeam';
import TheFooter from './Components/TheFooter';


function App() {
  return (
    <div className="App">
      <TheHeader />
      <main className="main">
        <TheHome />
        <TheServices/>
        <TheNews />
        <TheTeam/>
      </main>
      <TheFooter/>
    </div>
  );
}

export default App;
