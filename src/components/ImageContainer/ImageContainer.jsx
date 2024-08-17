

import "./ImageContainer.css";
import PerfumeImg from '../../assets/images/Perfume.jpg';
function ImageContainer(){
    return(
<div id="imageDiv">
<img src={PerfumeImg} alt="Perfume" id="MyImg"></img>
</div>
    )
}
export default ImageContainer