function Counter(){
    let x=0;
    return(
        <>
           count:{x}
           <button onClick={()=> x+1}>Inc</button>
        </>
    )
}

export default Counter