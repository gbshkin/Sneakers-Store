import Card from '../components/Card';

function Home({
  items,
  searchValue,
  SetSearchValue,
  onChangeSearchInpur,
  onAddToFavorite,
  onAddtoCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="search_icon" />
          {searchValue && (
            <img
              src="/img/btnDel.svg"
              onClick={() => SetSearchValue('')}
              className="clear removeBtn cu-p"
              alt="clear"
            />
          )}
          <input onChange={onChangeSearchInpur} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {/* cards */}
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, id) => (
            <Card
              key={item.id}
              onPlus={(obj) => onAddtoCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
