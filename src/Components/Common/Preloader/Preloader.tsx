import React from "react";
import preloader from "../../../assets/img/preloader.svg";

type PropsType = {

}
const Preloader: React.FC<PropsType> = () => {
return (
    <>
        <img src={preloader} style={ { width : "30px" }}/>
    </>
)
}
export default Preloader