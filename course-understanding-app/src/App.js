import './App.css';

function App() {

  const name = "Kamran";
  let age = 25;
  let l = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{age}</h2>
      {l.map((item) => {
        return (
          <div>
            {item}
          </div>
        )
      })}  
    </div>
  );
}

export default App;
