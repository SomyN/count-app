import Card from "./components/Card";

function App() {

  const handleClick = () => {
    alert("Clicked")
  }
  return (
    <main className="container w-full h-screen flex justify-center items-center ">
      <Card />
    </main>
  );
}

export default App;
