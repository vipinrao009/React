function Avatar({src,height,width,children}){
    return(
        <>
           <img src={src} height={height} width={width}/>
           {children} //child props
        </>
    )
}

export  default Avatar