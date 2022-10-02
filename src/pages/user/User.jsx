import React from 'react';
import "./User.css";
import {LocationSearching, MailOutline, PermIdentity,PhoneAndroid,CalendarToday} from "@material-ui/icons";

export default function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
    </div>
     <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="./image/atul.jpg" alt="" className="userShowImg" />
                <div className="userShowToptitle">
                    <span className="userShowUsername">Atul yadav</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">atuly17</span>
              </div>
              <div className="userShowInfo">
              <CalendarToday className='userShowIcon'/>
              <span className="userShowInfoTitle">10-12-1998</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">+1 123 456 68</span>
              </div>
              <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">atuly17@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">Delhi | India</span>
              </div>
            </div>
        </div>
        <div className="userUpdate"></div>
     </div>
    </div>
  );
}