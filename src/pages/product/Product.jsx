import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import Chart from "../../components/Charts/Chart";
import { productData } from '../../DummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
  return (
    <div className='product'>
       <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
        <button className="productAddButton">Create</button>
        </Link>
       </div>
       <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="./image/apple.jfif" alt="" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">int stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
       </div>
       <div className="productBottom">
        <form  className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpod' />
            <label >In stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label >Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="" alt="" className="productUploadImg" />
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id='file' style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
       </div>
    </div>
  );
}
