import React from 'react';
import CalcTaskbar from '../components/calculatorstaskbar';
import '../components/calculator.css';

const GOAT = () => {
    const countries = [ "United States", "Australia", "Austria", "Belgium", "Bulgaria", "Canada", "China", "Croatia",
                        "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", 
                        "Greece", "Guam", "Hong Kong", "Hong Kong(drop-off)", "Hungary", "Indonesia", "Ireland", 
                        "Italy", "Japan", "Japan(drop-off)" , "Latvia", "Lithuania", "Luxembourg", "Malaysia", "Malta", 
                        "Netherlands", "Philippines", "Poland", "Portugal", "Romania", "Singapore", "Slovakia", "Slovenia", 
                        "South Korea", "Spain", "Sweden", "Taiwan", "Thailand", "United Kingdom", "Other"];
    return (
        <div className="background">
            <div className="calc-taskbar-container">
                <CalcTaskbar />
            </div>
            <div className="contentSectionStyle">
                <div className="narrowRectangle">
                    <div className="contentWrapper">
                        <div className="headerStyle">GOAT Profit Calculator</div>
                        <div className="rectangleStyle">
                        <label htmlFor="itemPrice">Item Price ($)</label>
                            <input type="number" id="itemPrice" placeholder="Enter price" />

                            <label htmlFor="itemCost">Item Cost ($)</label>
                            <input type="number" id="itemCost" placeholder="Enter cost" />

                            <label htmlFor="sellerLevel">Seller Rating</label>
                            <select id="sellerLevel">
                                {["90 or above", "Between 70-89","Between 50-69", "Below 50"].map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                            <label htmlFor="location">Location</label>
                            <select id="location">
                                {countries.map(country => (<option key={country} value={country}>{country}</option>))}
                            </select>
                            <button className="calculateButton">Calculate</button>
                        </div>
                    </div>
                </div>
                <div className="sideStyle"> 
                    <div className="contentWrapper">
                        <div className="headerStyle">GOAT Calculator Explained</div>
                        <div className="rectangleStyleInfo">
                            <div className="informationStyleFirst">This calculator will calculate how much profit you can make on GOAT accurately based on your location and seller level.</div>
                            <div className="informationStyleRest">Our calculator follows GOAT's guidelines for shipping fees, minimum seller fees, and seller level fees.</div>
                            <div className="informationStyleRest">Our calculator is simple. Input the following:</div>
                            <div className="informationStyleFollowing"> ➡ Item Price: How much do you want to sell your item for?</div>
                            <div className="informationStyleFollowing"> ➡ Item Cost: How much did your item cost?</div>
                            <div className="informationStyleFollowing"> ➡ Seller Rating: What is your GOAT Seller Rating?</div>
                            <div className="informationStyleFollowing"> ➡ Location: Where are you selling your item from?</div>
                            <div className="informationStyleRest">More information can be found on Goat website about seller fees for&nbsp;
                                <a href="https://www.goat.com/fees" target="_blank" rel="noopener noreferrer" className="customLink">location and seller rating</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GOAT;
