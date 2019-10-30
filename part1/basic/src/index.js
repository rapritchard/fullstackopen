import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
};

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Reece" age={20 + 3} />
      <Hello name={name} age={age} />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
