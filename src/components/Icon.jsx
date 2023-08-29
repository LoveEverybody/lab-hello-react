import iron from "../images/iron.png";
import burguer from "../images/burguer.png";
// import back from "../images/back.png"; 


function Icon() {
    return (
      <div>        
        <img className="foreground-image" src={iron} alt="" />
        <img className="foreground-image" src={burguer} alt="" />
      </div>
    );
  }
  
  export default Icon;