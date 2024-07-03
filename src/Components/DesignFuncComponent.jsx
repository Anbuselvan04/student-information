import React, { useState } from "react";
import "../Components/DesignFuncComponent.css"
function DesignFuncComponent() {
    
    const [firstfunc, setFirstFunc] = useState(true)

    const showDetails = () => { 
        
        document.getElementById('info').innerHTML = "I am pursuing B.E Computer Science Engineering"

        document.getElementById('show').innerHTML = "HIDE DETAILS"

        let image = document.getElementById('image')
        image.src = "close.jpeg"
        image.alt = "Eye Close"
    }

    const hideDetails = () => { 
        
        document.getElementById('info').innerHTML = ""

        document.getElementById('show').innerHTML = "SHOW DETAILS"

        let image = document.getElementById('image')
        image.src = "open.jpeg"
        image.alt = "Eye Open"
    }
    const buttonevent = () => {
        if(firstfunc){
            showDetails()
        }
        else{
            hideDetails()
        }
        setFirstFunc(!firstfunc)
    }
    

    return (
        <React.Fragment>
            <div className="container">
                <img src="open.jpeg" alt="Eye Close" id="image"/>
                <div><h1>Name: Anbuselvan A</h1></div>
                <div><p>Registeration No: 212221040013</p></div>
                <div id="info"></div>
                <div><button id="show" onClick={buttonevent}>SHOW DETAILS</button></div>
            </div>
        </React.Fragment>
    );
}

export default DesignFuncComponent;
