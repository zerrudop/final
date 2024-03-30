// import logo from './logo.svg';
import './App.css';

const magazines = [
  {id:1, title:'Architectural Digest', theme:'architecture', isAvailable: true},
  {id:2, title:'Dwell', theme:'architecture', isAvailable: true},
  {id:3, title:'Communication Arts', theme:'design', isAvailable: false}
];

function ZineRack(){
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return(
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'Diary of a Wimpy Kid',
  author: 'Jeff Kinney',
  published: '2007',
  image: 'https://3.bp.blogspot.com/-vWm8B0jTtGw/UNBMOU1px0I/AAAAAAAACBg/lr40GFfNm7w/s1600/Diary+of+a+Wimpy+Kid+Book+1_ABRAMS.JPG',
  width: '100',
  height: '100'
};

function Bookshelf(){
  return(
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className='bookCover'
        src= {book.image}
        alt= {book.title +'cover'}
        style={{
          width:book.width,
          height:book.height
        }}
      />
      
    </div>
  );
}

function MagicButton(){
  return(
    <>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack/>
        <Bookshelf/>
        <MagicButton/>
      </header>
      
    </div>
  );
}

export default App;
