import './App.css';

function App() {

  const name = "Kamran";
  let age = 25;
  let l = [1,2,3,4,5,6,7,8,9,10];

  let status = true;

  let obj = {
    name: "Aryan",
    age: 25,
  }

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

      <div>
        {obj.name}
        {obj.age}
      </div> 

      {(status) ? <h1 style = {{color: "Green"}}>HELLO FRIENDS</h1> : <h1 style = {{color: "Red"}}>HELLO ENEMIES</h1>}
    </div>
  );
}

export default App;
