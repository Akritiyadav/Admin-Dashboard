import React from 'react';
import "./User.css";
import {LocationSearching, MailOutline, PermIdentity,PhoneAndroid,CalendarToday,Publish} from "@material-ui/icons";
import { NavLink } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <NavLink to="/newUser">
        <button className="userAddButton">Create</button>
        </NavLink>
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
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form  className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='atuly17' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input type="text" placeholder='Atul yadav' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='atuly17@gmail.com' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 123 456 68' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='Delhi | India' className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="./image/atul.jpg" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                <input type="file" id='file' style={{display:"none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
     </div>
    </div>
  );
}