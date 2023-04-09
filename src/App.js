import logo from './logo.svg';

import Greeter from './Components/Greeter';
import Counter from './Components/Counter';
import List from './Components/List';
import './App.css';

function App(props) {
  return (
    
    <>
    <h1>React Tutorial {props.message} </h1>
    <Greeter name={"Trishit"}></Greeter>
    <Greeter name={"Bhowmik"}></Greeter>
    <Counter></Counter>
    <List></List>
    </>
  );
}

export default App;
