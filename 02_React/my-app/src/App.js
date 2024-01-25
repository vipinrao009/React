
import Counter from './Counter';
import {useState} from "react"

import Avatar from './Avatar';

// lecture 2 conditional rendering
function App() {
  const [x,setX] = useState(0)
  const [isEditing,setIsEditing] =useState(false)
  const [todo,setTodo] = useState(['todo 1', 'todo 2'])
  return (
    <>

    <Avatar 
    src = "https://www.itl.cat/pngfile/big/285-2851194_art-art-girl-background-beautiful-beautiful-girl-beautiful.jpg"
    hight="200px"
    width="200px"
    />
    
    <Avatar
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG20FJKJStAlsAV6ITZbtEJgHCGCU7uU-Sr6nXy_gHg3YQfbM2aCMDTNkFxZqTLO7krG8&usqp=CAU"
    hight="200px"
    width="200px"
    />

    <Avatar
    src = "https://e0.pxfuel.com/wallpapers/83/585/desktop-wallpaper-art-art-girl-background-beautiful-beautiful-girl-beauty-cartoon-cute-art-drawing-enakei-fashion-flowers-girl-illustration-illustration-girl-iphone-summer-sweet-girl-we-heart-it-lovely.jpg"
    hight="200px"
    width="200px"
    />

    {/* Example 3 */}
     <ul>
      {(todo.map((todo)=> <li>{todo}</li>))}
        
      <button onClick={()=> setTodo([... todo,'Another One'])}>Click me</button>
     </ul>

    <p>------------------------------------------------------------</p>
    {/* Example 2 */}

    {
      (isEditing) ? <input/> : <p>SOME TODO</p>
    }
    <br />
    <button onClick={()=> setIsEditing(!isEditing)}>Click</button>

    <br />
    <br />

    {/* Example 1 */}
    <p>------------------------------------------------------------</p>
      Count X:{x} is {( x%2 == 0) ? 'Even' :'Odd'}
     
      <button onClick={()=> setX(x+1)}>Increment</button>
      <button onClick={()=> setX(x-1)}>Decrement</button>

    </>

    
  );
}


// lecture 1 useState hooks

// let z = 10;
// function App() {
//   const [x,setX] = useState(0)
//   const [y,setY] = useState(0)
//   return (
//     <>
//       Count X:{x}
     
//       <button onClick={()=> setX(x+1)}>Increment</button>
//       <button onClick={()=> setX(x-1)}>Decrement</button>

//       <br />
//       Count Y:{y}
//       <button onClick={()=> setY(y+1)}>Increment</button>
//       <button onClick={()=> setY(y-1)}>Decrement</button>

//       <br />
//       Count Z:{z}
//       <button onClick={()=> z+=1}>Increment</button>
//     </>
//   );
// }

export default App;


// state variable => if any change occure in state variable then component will rerendor
 
// Hook=> hook means normal utility function and it many utility function
    //(i) useState => it returns an array that consist two argument another is state updater function

