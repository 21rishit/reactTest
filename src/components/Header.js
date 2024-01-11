import "../../src/App.css";
function Header(){

    // const mystyle = {
    //     color : "green",
    //     backgroundColor : "black",
    // }

    return(
        // <div>
        //     <h1 style={{color:"red"}}>Shoppy Website</h1>
        //     <h2 style={mystyle}>low cost..... More products</h2>
        //     <p id="i1">Explore More... Various products</p>
        // </div>
        
        <div class= "bg-warning text-center text-danger p-3">
            <h1>Shoppy Website</h1>
            <h2>low cost..... More products</h2>
            <p>Explore More... Various products</p>
        </div>
        
    )
}
export default Header;