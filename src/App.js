import './App.css';
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">

      <Drawer/>
    <Header/>
    <div className="content">
      <div className="mb-40 d-flex align-center justify-between">
        <h1 className="mainTitle">Все кроссовки</h1>
        <div className="d-flex search-block">
          <img src="/img/search.svg" alt="Search"/>
          <input type="text" placeholder="Поиск..."/>
        </div>
      </div>
      <div className="d-flex">
        <Card/>
       
      </div>
    </div>
    </div>
  );
}

export default App;
