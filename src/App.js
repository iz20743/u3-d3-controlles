import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <WarningSign/>
      <MyBadge title="hello World"/>
      <SingleBook/>
      <BookList/>
    </div>
  );
}

export default App;
