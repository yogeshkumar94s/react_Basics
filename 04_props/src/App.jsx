import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    user: "Yogesh Kumar",
    age: 22,
  };

  let myArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className='bg-green-500 mb-5'>Tailwind Test</h1>
      <Card username='pooja' someObj={myObj} btnText='call me' />
      <Card username='yogesh' newArr={myArr} />
    </>
  );
}

export default App;
