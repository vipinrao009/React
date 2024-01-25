function Image(props) {
  return (
    <div className="image-box">
      <img src={props.src} />
    </div>
  );
}


/*
 
We can use props as destructor

function Image({ src }) {
  return (
    <>
      <div className="image-box">
        <img src={src} />
      </div>
    </>
  );
}

U can send all JSX in props 
 */
export default Image;
