import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetail from './pages/Characters/Detail';
import Header from './components/Header';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/Quotes/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character/:char_id" element={<CharacterDetail />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="quote/:quote_id" element={<QuoteDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
