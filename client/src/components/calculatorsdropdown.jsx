import React, {useState} from 'react';


const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
   
    const calculatorOptions = [
        { label: 'StockX', value: 'StockX'},
        { label: 'GOAT', value: 'GOAT' },
        { label: 'StockXVsGOAT', value: 'StockXVsGOAT' },
    ];

    const dropdownContainerStyle = {
        position: 'relative',
        display: 'inline-block', // Use inline-block for proper alignment with the button
    };

    const dropdownStyle = {
        display: showDropdown ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'cornflowerblue',
        color: 'white',
        // boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        borderRadius: '0px',
        zIndex: 1,
        minWidth: '100%', // Match the width of the button
        fontFamily: 'Roboto, sans-serif'
    };

    const dropdownItemStyle = {
        display: 'block',
        padding: '10px 20px',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto, sans-serif',
        border: '1px solid cornflowerblue', // Remove border
        textAlign: 'center', // Center the text
    };

    const buttonStyle = {
        backgroundColor: 'cornflowerblue',
        color: 'white',
        padding: '10px 20px', 
        borderRadius: '0px', //Circular shape for buttons
        cursor: 'pointer', // Changes the cursor to a pointer when hovering over the buttons
        fontSize: '18px', 
        fontFamily: 'Roboto, sans-serif',
        border: 'none'
    };
    
    return(
        <>
            <div style={dropdownContainerStyle}
                         onMouseLeave={() => setShowDropdown(false)}>
                        <button 
                            style={buttonStyle} 
                            onMouseEnter={() => setShowDropdown(true)}
                        >
                            Calculators ▼
                        </button>
                        <div style={dropdownStyle}>
                            {calculatorOptions.map((option) => (
                                <a key={option.value} href={`/calculators/${option.value}`} style={dropdownItemStyle}>
                                    {option.label}
                                </a>
                            ))}
                        </div>
                    </div>
        </>
    );
}


export default Dropdown;