import React from 'react';
import "./Home.css";
import Featuredinfo from '../components/featuredinfo/Featuredinfo';
import Chart from '../components/Charts/Chart';
import { userData } from '../DummyData';
import WidgetLg from '../components/WidgetLg/WidgetLg';
import WidgetSm from '../components/WidgetSm/WidgetSm';

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={userData} title="User Analytics"grid dataKey="Active User"/>
          <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
          </div> 
    </div>
  );
}
