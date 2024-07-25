
import Card from '../components/Card';
function Favorites({items, onAddToFavorite}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Избранное</h1>
      </div>
      
      <div className="d-flex flex-wrap">
        {/* cards */}
        {items.map((item, id) => (
            <Card
              key={item.id}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}

            
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
