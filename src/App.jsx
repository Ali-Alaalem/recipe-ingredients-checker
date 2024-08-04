// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'sult', available: true },
    { name: 'shuger', available: false },
    { name: 'spices', available: true },
  ];

  return (
    <>
      <h1>ingredients needed for a recipe List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.available ? 'available' : 'not-available'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
