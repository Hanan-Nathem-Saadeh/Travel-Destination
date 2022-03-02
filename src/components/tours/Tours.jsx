// import "./Tours.css";

const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(Tour => {
             return(
            <div>
            <p>{Tour.name}</p>
            <img src={Tour.image} alt="" />                       
            </div>
                )
                
            })
        }
        </>
    )
}

export default Tours;