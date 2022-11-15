// import Header from './components/Header';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlockList from './components/Blocks/BlockList';
import data from './data/items.json';

function App() {
  const [blocks, setBlocks] = useState(data);

  return (
    <div className="App">
      <Header />
      <Hero />
      <BlockList blocks={blocks} />
    </div>
  );
}

export default App;
