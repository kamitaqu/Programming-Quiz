import React from 'react'

const styles = {
    button:{
        width: '300px',
        height: '50px',
        cursor: 'pointer',
        background: 'rgb(56 198 230)',
        color: '#2d1616',
        fontFamily: 'Segoe UI',
        fontSize: '23px',   
        margin: 0,
        padding: 0
    }
}

function remove(el) {
    let element = document.getElementById(el.target.id)
    element.parentNode.removeChild(element);
    return false;
}


export default function StartButton() {
    return (
        <button id="SB" style={styles.button} onClick = {remove.bind()}>Start</button>
    )
}