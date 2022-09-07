import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import books from './data/books/fantasy.json'

// console.log(arrayOfBooks)
function App() {
  // let book = arrayOfBooks[0]
  return (
    <div className="App">
      <WarningSign/>
      <MyBadge title="hello World"/>
      {/* <SingleBook image={book.img} title={book.title}/> */}
      <BookList books={books}/>
    </div>
  );
}

export default App;
