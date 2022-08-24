import React from "react";



const Contact  : React.FC<PropsType>= ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b> : {contactValue}
    </div>
}
export default Contact


type PropsType = {
    contactTitle : string ,
    contactValue : string
}