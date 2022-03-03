import './App.css';
import Profile from './profile/Profile';

function App() {
  const alertInput = fullName => alert(fullName);

  return (
    <div className="App">
      
      <Profile fullName= "Achraf Sallem"
          bio= "Step by Step"
          profession= "Budding Full Stack Developer"
          alertInput= {alertInput}> <img src="/ProfilePhoto.jpg" alt='profilephoto'/> </Profile>
    </div>
  );
}

export default App;
