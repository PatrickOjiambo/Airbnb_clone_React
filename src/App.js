import './App.css';
import './components/Header'
import Header from './components/Header';
import Top from './components/Top';
import Card from './components/Card';
import Data from './components/data';
function App() {
  const card_data = Data.map(data => {
    return <Card
                title = {data.title}
                price = {data.price}
                coverImg = {data.coverImg}
                reviewCount = {data.stats.reviewCount}
                rating = {data.stats.rating}
                
                location = {data.location}
    
            />
  })
  return (
    <div className="App">
      <Header/>
      <Top/>
      <section className='card--list'>
      {card_data}
      </section>
    </div>
  );
}

export default App;
