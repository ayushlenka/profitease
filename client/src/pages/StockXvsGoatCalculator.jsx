import React from 'react';
import CalcTaskbar from '../components/calculatorstaskbar';
import '../components/calculator.css';

const StockXVsGOAT = () => {
    const countries = [ "United States", "Australia", "Austria", "Belgium", "Bulgaria", "Canada", "China", "Croatia",
                        "Czechia", "Cyprus","Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", 
                        "Greece", "Guam", "Hong Kong", "Hong Kong(drop-off)", "Hungary", "Iceland", "Indonesia", "Ireland", 
                        "Italy", "Japan", "Japan(drop-off)", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", 
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
                        <div className="headerStyle">StockX vs GOAT Profit Calculator</div>
                        <div className="rectangleStyle">
                        <label htmlFor="itemPrice">Item Price ($)</label>
                            <input type="number" id="itemPrice" placeholder="Enter price" />

                            <label htmlFor="itemCost">Item Cost ($)</label>
                            <input type="number" id="itemCost" placeholder="Enter cost" />

                            <label htmlFor="sellerLevel">StockX Seller Level</label>
                            <select id="sellerLevel">
                                {[1, 2, 3, 4, 5].map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                            <label htmlFor="sellerLevel">GOAT Seller Rating</label>
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
                        <div className="headerStyle">StockX vs GOAT Calculator Explained</div>
                        <div className="rectangleStyleInfo">
                            <div className="informationStyleFirst">This calculator will calculate where it is most profitable for you sell your item based on your location and seller information.</div>
                            <div className="informationStyleRest">Our calculator follows StockX's and GOAT's guidelines for shipping fees, minimum seller fees, and seller level fees.</div>
                            <div className="informationStyleRest">Our calculator is simple. Input the following:</div>
                            <div className="informationStyleFollowing"> ➡ Item Price: How much do you want to sell your item for?</div>
                            <div className="informationStyleFollowing"> ➡ Item Cost: How much did your item cost?</div>
                            <div className="informationStyleFollowing"> ➡ Seller Level: What is your StockX Seller Level?</div>
                            <div className="informationStyleFollowing"> ➡ Seller Rating: What is your GOAT Seller Rating?</div>
                            <div className="informationStyleFollowing"> ➡ Location: Where are you selling your item from?</div>
                            <div className="informationStyleRest">More information can be found on StockX's website about seller fees for&nbsp;
                                <a href="https://stockx.com/help/articles/How-much-does-shipping-cost-for-sellers" target="_blank" rel="noopener noreferrer" className="customLink">shipping</a>&nbsp;and&nbsp;
                                <a href="https://stockx.com/help/articles/What-are-StockXs-fees-for-sellers" target="_blank" rel="noopener noreferrer" className="customLink">seller level</a>.&nbsp;
                                <a href="https://www.goat.com/fees" target="_blank" rel="noopener noreferrer" className="customLink">Goat</a>&nbsp;fees can be found on their website.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockXVsGOAT;
