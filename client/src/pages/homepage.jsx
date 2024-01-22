import React from 'react';
import Taskbar from '../components/taskbar';
import SneakerImage from '../images/snkrs2.jpg'
import Dropdown from '../components/calculatorsdropdown';


const Homepage = () => {
    //Narrowing under taskbar section
    const contentSectionStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto',
        maxWidth: '1400px',
        padding: '0 10px',
    };

    const contentSectionStyle2 = {
        color: 'cornflowerblue',
        fontWeight: 'bold', // Bold text
        fontSize: '64px',
        fontFamily: 'Roboto, sans-serif', // Roboto font
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center align items
        margin: '-160px auto 20px',
        maxWidth: '1400px',
        padding: '0 10px',
    };

    //Spliting text onto left half of new section
    const sideStyle = {
        flex: 1,
        padding: '0px',
        color: 'cornflowerblue', // Text color
        
    };
    const firstStyle = {
        fontWeight: 'bold', // Bold text
        fontSize: '40px',
        fontFamily: 'Roboto, sans-serif', // Roboto font
    }
    const secondStyle = {
        fontSize: '30px',
        fontFamily: 'Roboto, sans-serif', // Roboto font
    }
    
    
    //Image needs to take up whole section
    const imageStyle = {
        width: '100%',
        height: '65%',
    };

    //Information positioning under taskbar
    const taskbarHeightStyle = {
        height: '200px',
    };

    // const nextSectionStyle = {
    //     fontWeight: 'bold', // Bold text
    //     fontSize: '64px',
    //     fontFamily: 'Roboto, sans-serif', // Roboto font
    //     display: 'flex',
    //     justifyContent: 'center',
    //     margin: '20px auto',
    //     color: 'cornflowerblue',
    //     maxWidth: '1400px',
    //     padding: '0 10px',
    // }

    return (
        <>
            <Taskbar />
            <div style={taskbarHeightStyle} /> 
            <div style={contentSectionStyle}>
                <div style={sideStyle}>
                    <p style={firstStyle}>Profitease provides profit calculators for popular re-selling websites like StockX and Goat.</p>
                    <p style={secondStyle}>Make the most from your sneakers.</p>
                    <Dropdown></Dropdown>
                </div>
                <div style={sideStyle}>
                    <img 
                        src={SneakerImage}
                        alt=""
                        style={imageStyle} 
                    />
                </div>
            </div>
            <div style={contentSectionStyle2}>
                Why should you use profitease's calculators?
            </div>
            {/* <div style={contentSectionStyle}>
                <div style={sideStyle}>
                    {/* First section text */}
                {/* </div>
                <div style={sideStyle}>
                    <img src={SneakerImage} alt="" style={imageStyle} />
                </div>
            </div>
            <div style={contentSectionStyle}>
                <div style={sideStyle}>
                    {/* Second section text */}
                {/* </div>
                <div style={sideStyle}>
                    <img src={SneakerImage} alt="" style={imageStyle} />
                </div>
            </div>
            <div style={contentSectionStyle}>
                <div style={sideStyle}>
                    {/* Third section text */}
                {/* </div>
                <div style={sideStyle}>
                    <img src={SneakerImage} alt="" style={imageStyle} />
                </div>
            </div> */}
        </>
    );
}

export default Homepage;

