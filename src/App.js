import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';

const arr = [ 
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 15800, 
    imageUrl:'img/sneakers/nike-blazer-mid-seude-white.jpg',
  }, 
  {
    name: 'Мужские Кроссовки Nike Air Max 270', 
    price: 8400, 
    imageUrl:'img/sneakers/nike-air-max-270.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 11000, 
    imageUrl:'img/sneakers/nike-blazer-mid-seude-green.jpg',
  },  
  {
    name: 'Мужские Кроссовки Under Armour Curry 8', 
    price: 9200, 
    imageUrl:'img/sneakers/under-armour-curry-8.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie 7', 
    price: 10500, 
    imageUrl:'img/sneakers/nike-kyrie7.jpg',
  },  
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11', 
    price: 10400, 
    imageUrl:'img/sneakers/nike-air-jordan-11.jpg',
  }, 
  {
    name: 'Мужские Кроссовки Jordan Air Jordan 11', 
    price: 16499, 
    imageUrl:'img/sneakers/nike-air-jordan-11.jpg',
  },  
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII', 
    price: 19600, 
    imageUrl:'img/sneakers/nike-lebron-XVIII.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low ', 
    price: 15400, 
    imageUrl:'img/sneakers/nike-lebron-XVIII-low.jpg',
  },  
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider', 
    price: 18200, 
    imageUrl:'img/sneakers/puma-future-rider.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', 
    price: 11299, 
    imageUrl:'img/sneakers/nike-kyrie-flytrap-VI.jpg',
  },

  
];

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>

      <div className='content p-40'> {/* main content */}
          <div className="d-flex align-center mb-40 justify-between">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="img/search.svg" alt='search_icon'/>
              <input placeholder="Поиск..."/>
            </div>
          </div>

          <div className="d-flex">  {/* cards */}
            {arr.map((obj) => (<Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl}/>)
            )}
            
          </div>
      </div> 
    </div> 
  );
}

export default App;

