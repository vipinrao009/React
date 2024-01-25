import logo from "./logo.svg";
import "./App.css";
import DogCard from "./DogCard";
import Person from "./AssignmentQue1";
import Button from "./AssignmentQue2";
import { Header } from "./AssignmentQue3";
import { List } from "./AssignmentQue4";

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

      {/* Assignment */}
      {/* Question 1 */}
      <h2>
        <Person 
          name="Vipin" 
          age="23" 
        />

        <Person
        name="Shivangi"
        agee="20"
        />
      </h2>

      {/*Question 2 */}
      <Button 
        text="Click me!" 
        onClick={() =>console.log("Button clicked")} 
      />

      {/*Question 3 */}
      <Header
      title="Welcome to my Youtube channel"
      />

      {/*Question 4 */}
      <List
        items={["Apple","Banana","Mango"]}
      />
    </div>
  );
}

export default App;
