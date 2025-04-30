// import logo from './logo.svg';
import Header from './components/Header';
import Entry from './components/Entry'
import entries from './data/data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      {entries.map(entry => (
        <Entry 
        key ={entry.id}
        dataObj = {entry}
        // {....entry}

        // countryName = {entry.countryName}
        // mapLink={entry.mapLink}
        // title={entry.title}
        // date={entry.date}
        // description={entry.description}
        // mainImage={entry.mainImage}
        // markerImage={entry.markerImage}
       />
      ))}
    </div>
  );
}

export default App;
