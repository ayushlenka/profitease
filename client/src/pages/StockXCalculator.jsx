import React from 'react';
import CalcTaskbar from '../components/calculatorstaskbar';
import '../components/calculator.css';

const StockX = () => {
    const countries = [ "United States", "Austria", "Belgium", "Bulgaria", "Canada", "China", "Croatia",
                        "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", 
                        "Greece", "Hong Kong", "Hungary", "Iceland", "Indonesia", "Ireland", 
                        "Italy", "Japan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", 
                        "Macao", "Malaysia", "Malta", "Mexico", "Netherlands", "New Zealand", 
                        "Norway", "Philippines", "Poland", "Portugal", "Puerto Rico", 
                        "Republic of Cyprus", "Romania", "Singapore", "Slovakia", "Slovenia", 
                        "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", 
                        "United Arab Emirates", "United Kingdom", "Vietnam", "All Other Markets"];

    return (
        <div className="background">
            <div className="calc-taskbar-container">
                <CalcTaskbar />
            </div>
            <div className="contentSectionStyle">
                <div className="narrowRectangle">
                    <div className="contentWrapper">
                        <div className="headerStyle">StockX Profit Calculator</div>
                        <div className="rectangleStyle">
                        <label htmlFor="itemPrice">Item Price ($)</label>
                            <input type="number" id="itemPrice" placeholder="Enter price" />

                            <label htmlFor="itemCost">Item Cost ($)</label>
                            <input type="number" id="itemCost" placeholder="Enter cost" />

                            <label htmlFor="sellerLevel">Seller Level</label>
                            <select id="sellerLevel">
                                {[1, 2, 3, 4, 5].map(level => (
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
                        <div className="headerStyle">StockX Calculator Explained</div>
                        <div className="rectangleStyleInfo">
                            <div className="informationStyleFirst">This calculator will calculate how much profit you can make on StockX accurately based on your location and seller level.</div>
                            <div className="informationStyleRest">Our calculator follows StockX's guidelines for shipping fees, minimum seller fees, and seller level fees.</div>
                            <div className="informationStyleRest">Our calculator is simple. Input the following:</div>
                            <div className="informationStyleFollowing"> ➡ Item Price: How much do you want to sell your item for?</div>
                            <div className="informationStyleFollowing"> ➡ Item Cost: How much did your item cost?</div>
                            <div className="informationStyleFollowing"> ➡ Seller Level: What is your StockX Seller Level?</div>
                            <div className="informationStyleFollowing"> ➡ Location: Where are you selling your item from?</div>
                            <div className="informationStyleRest">More information can be found on StockX's website about seller fees for&nbsp;
                                <a href="https://stockx.com/help/articles/How-much-does-shipping-cost-for-sellers" target="_blank" rel="noopener noreferrer" className="customLink">shipping</a>&nbsp;and&nbsp;
                                <a href="https://stockx.com/help/articles/What-are-StockXs-fees-for-sellers" target="_blank" rel="noopener noreferrer" className="customLink">seller level</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockX;
