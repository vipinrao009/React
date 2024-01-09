import logo from "./logo.svg";
import "./App.css";
import DogCard from "./DogCard";
function App() {
  return (
    <div className="App">
      Hello
      <DogCard
        name="Honey"
        image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=sph"
      />
      <DogCard
        name="Tiger"
        image=" https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-6_1562-695.jpg"
      />
    </div>
  );
}

export default App;
