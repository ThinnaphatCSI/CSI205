import './hexCounter.css'

function resetcounter() {
    for(let i=0; i<3; i++) {
        document.getElementsByClassName('hexBox')[i].innerHTML = '0';
    }
    for(let i=0; i<4; i++) {
        document.getElementsByClassName('decBox')[i].innerHTML = '0';
        document.getElementsByClassName('octBox')[i].innerHTML = '0';
    }
    return;
}

function increment() {
    let hexBox = document.getElementsByClassName('hexBox');
    let hexValue = "";
    if(hexBox[0].innerHTML === 'F' && hexBox[1].innerHTML === 'F' && hexBox[2].innerHTML === 'F') {
        document.getElementsByClassName('hexBox')[0].innerHTML = '0';
        document.getElementsByClassName('hexBox')[1].innerHTML = '0';
        document.getElementsByClassName('hexBox')[2].innerHTML = '0';
        for(let i=0; i<4; i++) {
            document.getElementsByClassName('decBox')[i].innerHTML = '0';
            document.getElementsByClassName('octBox')[i].innerHTML = '0';
        }
        return;
    }
    for (let i = 0; i < hexBox.length; i++) {
        hexValue += hexBox[i].innerHTML;
    }
    let decimalValue = parseInt(hexValue, 16);
    decimalValue++;
    let newHexValue = decimalValue.toString(16).toUpperCase().padStart(3, '0');
    for (let i = 0; i < hexBox.length; i++) {
        hexBox[i].innerHTML = newHexValue[i];
    }
    let decBox = document.getElementsByClassName('decBox');
    let decValue = "";
    for (let i = 0; i < decBox.length; i++) {
        decValue += decBox[i].innerHTML;
    }
    let newDecValue = decimalValue.toString(10).padStart(4, '0');
    for (let i = 0; i < decBox.length; i++) {
        decBox[i].innerHTML = newDecValue[i];
    }   
    let octBox = document.getElementsByClassName('octBox');
    let octValue = "";
    for (let i = 0; i < octBox.length; i++) {
        octValue += octBox[i].innerHTML;
    }
    let newOctValue = decimalValue.toString(8).padStart(4, '0');
    for (let i = 0; i < octBox.length; i++) {
        octBox[i].innerHTML = newOctValue[i];
    }
}

function decrement() {
    let hexBox = document.getElementsByClassName('hexBox');
    let hexValue = "";
    if(hexBox[0].innerHTML === '0' && hexBox[1].innerHTML === '0' && hexBox[2].innerHTML === '0') {
        document.getElementsByClassName('hexBox')[0].innerHTML = 'F';
        document.getElementsByClassName('hexBox')[1].innerHTML = 'F';
        document.getElementsByClassName('hexBox')[2].innerHTML = 'F';
        document.getElementsByClassName('decBox')[0].innerHTML = '4';
        document.getElementsByClassName('decBox')[1].innerHTML = '0';
        document.getElementsByClassName('decBox')[2].innerHTML = '9';
        document.getElementsByClassName('decBox')[3].innerHTML = '5';
        document.getElementsByClassName('octBox')[0].innerHTML = '3';
        document.getElementsByClassName('octBox')[1].innerHTML = '7';
        document.getElementsByClassName('octBox')[2].innerHTML = '7';
        document.getElementsByClassName('octBox')[3].innerHTML = '7';
        return;
    }
    for (let i = 0; i < hexBox.length; i++) {
        hexValue += hexBox[i].innerHTML;
    }   
    let decimalValue = parseInt(hexValue, 16);
    decimalValue--;
    let newHexValue = decimalValue.toString(16).toUpperCase().padStart(3, '0');
    for (let i = 0; i < hexBox.length; i++) {
        hexBox[i].innerHTML = newHexValue[i];
    }   
    let decBox = document.getElementsByClassName('decBox');
    let decValue = "";
    for (let i = 0; i < decBox.length; i++) {
        decValue += decBox[i].innerHTML;
    }
    let newDecValue = decimalValue.toString(10).padStart(4, '0');
    for (let i = 0; i < decBox.length; i++) {
        decBox[i].innerHTML = newDecValue[i];
    }   
    let octBox = document.getElementsByClassName('octBox');
    let octValue = "";
    for (let i = 0; i < octBox.length; i++) {
        octValue += octBox[i].innerHTML;
    }   
    let newOctValue = decimalValue.toString(8).padStart(4, '0');
    for (let i = 0; i < octBox.length; i++) {
        octBox[i].innerHTML = newOctValue[i];
    }   
}

function hexCounter() {
    return ( 
        <>
        <div className="hexCounter">
            <p className='menu'>Counter Program</p>
            <p><span className='hexBox'>0</span><span className='hexBox'>0</span><span className='hexBox'>0</span></p>
            <hr />
            <p><span className='decBox'>0</span><span className='decBox'>0</span><span className='decBox'>0</span><span className='decBox'>0</span></p>
            <hr />
            <p><span className='octBox'>0</span><span className='octBox'>0</span><span className='octBox'>0</span><span className='octBox'>0</span></p>
            <hr />
            <button id='idIncrement' type="button" className='btn' onClick={decrement}>-</button>
            <button id='idResut' type="button" className='btn' onClick={resetcounter}>Reset</button>
            <button id='idDecrement' type="button" className='btn' onClick={increment}>+</button>
        </div> 
        </>
    );
}
export default hexCounter;
