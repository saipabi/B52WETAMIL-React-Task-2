import PropTypes from"prop-types";
import"./Boxes.css";





const data = [
    {name:"Jackal", image:"https://img.freepik.com/free-photo/mature-woman-with-shopping-bags_1303-19309.jpg?w=740&t=st=1706505472~exp=1706506072~hmac=f3f6b3b71f5b2d2dae7c4575a1dd7d2ef392657eb0cb3028dc19f44c2a203fa6"},
    {name: "Emy", image:"https://img.freepik.com/free-photo/young-lady-shirt-jacket-holding-hands-mouth-looking-shocked-front-view_176474-85084.jpg?w=740&t=st=1706512017~exp=1706512617~hmac=03bbb98024d604c768e5e388981d881732ecbebdcdb7be49d2f040e389db676f"},
    {name:"Daisy", image:"https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-75008.jpg"},
    {name:"Jancy",image:"https://img.freepik.com/free-photo/happy-girl-with-headphone-is-looking-up-by-holding-headphone-white-background_176474-120039.jpg?t=st=1706505777~exp=1706506377~hmac=19ce71b428ce0310274620ef653b62ee71543effe3e74aa2e73c50528532d651"}
]




    // destructure method 
const Box1=({image, name})=> {
const handleClick =(e)=> {
    console.log();
    console.log("Clicking");
};
    return(

    

    <div className="box">
    <img src={image}/>
    <h1>{name}</h1>
    {/* CONDITIONAL RENDERING */}
    {name === "Jancy" && <i className="fa-solid fa-star"></i>}
    {/* <h1>{name}</h1>{PropTypes.children}
     <h3>{PropTypes.subtitle}</h3>  */}


     <button onClick={handleClick}>ClickMe</button>
     </div>

       );

    }

Box1.proptypes = {
    image:PropTypes.string,
    name:PropTypes.string,

}


const Boxes = (props)=> {

    return(
        
        <div style ={{
            margin:16,
        }}
        className="boxes"
        >
        
           
            <div className="Box"><br /><h1>Shop in style</h1><span>With this shop homepage template</span></div>
           
        <div className="box">
            <img src={data[0].image}/>
            <h1>{data[0].name} </h1>{props.children} <h3>{props.subtitle}</h3> </div>
        
        <div className="box">
            <img src={data[1].image}/>
            <h1>{data[1].name}</h1>
            {props.children2} <h3>{props.subtitle1}</h3>
</div>

        <div className="box">
            <img src={data[2].image}/>
            <h1>{data[2].name}</h1>{props.children3} <h3>{props.subtitle2}</h3></div>
        <div className="box"><img src={data[3].image}/><h1>{data[3].name}</h1>{props.children4} <h3>{props.subtitle3}</h3>
</div>
 



{/* <Box1  name={data[0].name} image={data[0].image}  />
{props.children} <h3>{props.subtitle}</h3>
{/* (same attributers in Object and Box1 props name so we can use spreading attributers here) */}
{/* <Box1 {...data[1]}/>

<Box1 {...data[2]}/>
// <Box1  name={data[3].name} image={data[3].image}  /> */} 

      
        {/* do not use index as key VDOM gets confused because of the indexing*/}
        { data.map((boxData) =>(
            <Box1
             key ={boxData.name}
             name={boxData.name}
             image={boxData.image}

            
            />
        ))};
        {/* EVENTS */}
            <div>
            
            <button className="dropbtn">Shop</button>
            <div className="dropdown-content">
                <a href = "#">All products</a>
                <a href = "#">Ppopular items</a>
                <a href = "#">New Arrivals</a>
            </div>

            </div>






            

            </div>
    );


};



Boxes.propTypes={
    subtitle:PropTypes.string,
    subtitle1:PropTypes.string,
    subtitle2:PropTypes.string,
    subtitle3:PropTypes.string,
    children:PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 



}  ; 


export default Boxes;