import React from 'react';
import "./Featuredinfo.css";

export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4</span>
        </div>
      </div>
    </div>
  );
}
