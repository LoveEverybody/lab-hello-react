import iron from "../images/iron.png";
import burguer from "../images/burguer.png";
// import back from "../images/back.png"; 


function Icon() {
    return (
      <div className="icon-container">
        <img className="foreground-image" src={iron} alt="ironhack logo" width="65" height="65"/>
        <img className="foreground-image" src={burguer} alt="burguer menu" width="65" height="65"/>
      </div>
    );
  }
  
  export default Icon;