import React from 'react';
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';
import { LineStyle, Timeline, TrendingUp ,PersonOutline,EmailOutlined,ChatBubbleOutlineOutlined,Report,
  Assessment,Storefront,WorkOutlineOutlined,DynamicFeedOutlined} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <NavLink to="/user" className="link">
            <li className="sidebarListItem ">
              <PersonOutline className='sidebarIcon' />
              Users
            </li>
            </NavLink>
            <NavLink to="/products" className="link">
            <li className="sidebarListItem ">
              <Storefront className='sidebarIcon' />
              Products
            </li>
            </NavLink>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Transaction
            </li>
            <li className="sidebarListItem">
              <Assessment className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <EmailOutlined className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedOutlined className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineOutlined className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
