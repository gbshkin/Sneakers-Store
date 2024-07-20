function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
       <div className='d-flex align-center'>
       <img width={40} height={40} src="/img/headLogo.png" alt="site logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
       </div>
        <ul className='d-flex'>
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart logo" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img\user.svg" alt="user logo" />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src=".\img\sneakers\nike-air-jordan-11.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus button"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="\img\sneakers\nike-air-max-270.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus button"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="\img\sneakers\nike-blazer-mid-seude-white.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus button"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="\img\sneakers\under-armour-curry-8.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/plus.svg" alt="plus button"/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

