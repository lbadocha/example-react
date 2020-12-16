import React from 'react';

const Buttons = props => {
    
    let headingText = 'Nowy tekst nagłówka';

    return <div>
        <button onClick={()=>props.changeTextMethod(headingText)}>Zmień teskst</button>
    </div>;
}


export default Buttons;