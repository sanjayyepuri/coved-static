import React from "react";
const GFORM = "https://docs.google.com/forms/d/e/1FAIpQLSfxcZibPsld6OoAAMmMnb4MGU2u5rzVYEwDABy-J5QWDI4KZQ/viewform?embedded=true";

const Register = () => {
    return (
        <div style={{display: "flex", minWidth:"80vw", minHeight:"100vh", alignContent:"center", justifyContent: "center", justifySelf:"center", justifyItems:"center"}}>
            <iframe src={GFORM} width="800px" height="900px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
    )
}

export default Register;
