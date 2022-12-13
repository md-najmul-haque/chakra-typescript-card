import './App.css';
import { Heading } from '@chakra-ui/react'
import Card from './components/Card';




function App() {
  return (
    <div className="App">
      <Heading color='white' pt='10'>Chakra Typescript Card</Heading>
      <Card />
    </div>
  );
}

export default App;
