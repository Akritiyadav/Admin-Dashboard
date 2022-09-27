import React from 'react';
import "./WidgetSm.css";
import { VisibilityOutlined } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="./image/user.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dev</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmbtn">
                        <VisibilityOutlined  className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./image/user.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dev</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmbtn">
                        <VisibilityOutlined />
                        Display
                    </button>
                </li><li className="widgetSmListItem">
                    <img src="./image/user.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dev</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmbtn">
                        <VisibilityOutlined />
                        Display
                    </button>
                </li><li className="widgetSmListItem">
                    <img src="./image/user.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dev</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmbtn">
                        <VisibilityOutlined />
                        Display
                    </button>
                </li><li className="widgetSmListItem">
                    <img src="./image/user.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dev</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmbtn">
                        <VisibilityOutlined />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
