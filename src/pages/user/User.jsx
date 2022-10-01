import React from 'react';
import "./User.css";

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
                    <div className="spanuserShowUsername">Atul yadav</div>
                    <div className="spanuserShowUserTitle">Software Engineer</div>
                </div>
            </div>
            <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
     </div>
    </div>
  );
}