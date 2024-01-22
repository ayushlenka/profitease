import React, {useState} from 'react';
import '../components/taskbar.css'

const CalcDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
   
    const calculatorOptions = [
        { label: 'StockX', value: 'StockX'},
        { label: 'GOAT', value: 'GOAT' },
        { label: 'StockXVsGOAT', value: 'StockXVsGOAT' },
    ];
    const dropdownStyle = {
        display: showDropdown ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'cornflowerblue',
        color: 'white',
        borderRadius: '0px',
        zIndex: 1,
        fontFamily: 'Roboto, sans-serif',
        width: '160px',
        // minWidth: '160px',
    };

    const dropdownItemStyle = {
        display: 'block',
        padding: '10px 20px',
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
        border: '1px solid cornflowerblue', // Remove border
        textAlign: 'center', // Center the text
    };

    const dropdownButton = {
        backgroundColor: 'cornflowerblue',
        color: 'white',
        textAlign: 'center',
        padding: '23px 20px', // Same as the Home button
        borderRadius: '0px',
        cursor: 'pointer',
        fontSize: '18px', // Ensure this matches the Home button
        fontFamily: 'Roboto, sans-serif',
        border: 'none'
    };
    
    return (
        <div onMouseLeave={() => setShowDropdown(false)}>
            <button style={dropdownButton} onMouseEnter={() => setShowDropdown(true)}>Calculators ▼</button>
            <div style={dropdownStyle}>
                {calculatorOptions.map((option) => (
                    <a key={option.value} href={`/calculators/${option.value}`} style={dropdownItemStyle}>
                        {option.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

const CalcTaskbar = () => {
    return(
        <> 
            <div className="taskbarcalculator">
                <div>profitease</div>
                <div className="button-container">
                    <CalcDropdown></CalcDropdown>
                    <a href={'/'}>
                        <button className="button-sign-up" >Home</button>
                    </a>
                    
                </div>
            </div>
        </>
    );

}

export default CalcTaskbar;