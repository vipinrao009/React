import Image from "./Image";

function DogCard(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <Image src={props.image} />
      
    </>
  );
}

export default DogCard;

/*
   Note=>......
   (0) componant are internally 

   (1) Function name should start with capital letters
   
   Line-2:(i) if JSX is define in single line then we don't need to use parenthesis  (......)
   
   (ii) if JSX is define in multilevel line then we need to use parenthesis (.....)

   (iii) return contain a single parent (line 3 - line 10) and a parent can contain multiple element (line 4 and line 5)

   (4) There are two way to import and export 

      (a) export default => When we want to import a single function then we use this method 
          (i) it can be named by use or export name and import name can be different  

      (b) export by name => When we wnat to import multiple function then we use this method and this method is known as destructure 
          (i) In this method , Export and import name should be same 
          (ii) We can use both method at time
*/
