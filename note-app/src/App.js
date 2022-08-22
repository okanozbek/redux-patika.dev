import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Search from './Components/Search';
import TextArea from './Components/TextArea';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <TextArea />
      <Content />
    </div>
  );
}

export default App;
