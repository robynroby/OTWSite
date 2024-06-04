import React from 'react';
import './Tokenomics.css';

const Tokenomics = () => {
    return (
        <section className="tokenomics">
            <h2>Tokenomics</h2>
            <div className="tokenomics-holder">
                <div className="tokenomics-item">
                    <h3>Token Name</h3>
                    <p>Out of this world</p>
                </div>
                <div className="tokenomics-item">
                    <h3>Token Symbol</h3>
                    <p>OTW</p>
                </div>
                <div className="tokenomics-item">
                    <h3>Initial Supply</h3>
                    <p>37,000,000</p>
                </div>
                <div className="tokenomics-item">
                    <h3>Token Type</h3>
                    <p>icrc-2</p>
                </div>
                <div className="tokenomics-item">
                    <h3>Contract Address</h3>
                    <p>**********</p>
                </div>
            </div>
        </section>
    );
}

export default Tokenomics;
