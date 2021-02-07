import React from 'react'
import './Main.css';
import Picture3 from './Picture3.png';

function Main() {
    return (
        <div className="header">
            <div class="banner">
                <div class="app-text">
                    <p className="p1" style={{ fontWeight: "bolder" }}>Connecting the Disconnected</p>

                    <p className="p2" style={{ fontSize: "30px" }, { fontWeight: "bolder" }}><span className="colorText">Vyorius</span> brings unmanned <br /> robots
                  <span className="colorText"> Together</span>, <br /> wherever they are
                </p>
                    <p className="p3">With all of the operations, commanding and maintenance <br /> tools in one place, unmanned vehicles will stay connected <br /> and productive no matter where you’re Delivering.</p>

                    <div class="btn-group">
                        <button class="vyorius">Try Vyorius</button>
                        <button class="learn-more">Learn More</button>
                        <br />
                        </div>
                        <p className="p4">Need to order a delivery?<a href="#">Get Started</a></p>
                    
                </div>
                <div class="app-picture">
                    <img className="imgMain" src={Picture3} alt="Main" />
                </div>
            </div>
        </div>
    )
}

export default Main;
