import React from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}></GuessedWords>
      </div>
    );
  }
}

export default App;
