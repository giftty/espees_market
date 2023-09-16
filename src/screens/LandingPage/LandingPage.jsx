import React from "react";
import { Group } from "../../components/Group";
import "./style.css";
import {Menu} from "../../screens/menu"
import Carousel from "../../components/carousel";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
  <>
    <div className="landing-page">
      <div className="div-2">
        <div className="overlap-2">
          <div className="text-wrapper-4">Contact Us</div>
          <div className="text-wrapper-5">Download App</div>
          <img className="img" alt="Line" src="/img/line-34.svg" />
          <div className="group-2">
            <div className="text-wrapper-6">Most Popular Categories</div>
            <p className="p">
              Staples
              <br />
              Beverages
              <br />
              Personal Care
              <br />
              Home Care
              <br />
              Baby Care
              <br />
              Vegetables &amp; Fruits
              <br />
              Snacks &amp; Foods
              <br />
              Dairy &amp; Bakery
            </p>
            <img className="line-2" alt="Line" src="/img/line-31.svg" />
          </div>
          <div className="overlap-3">
            <div className="group-3">
              <div className="text-wrapper-6">Customer Services</div>
              <p className="p">
                About Us
                <br />
                Terms &amp; Conditions
                <br />
                FAQ
                <br />
                Privacy Policy
                <br />
                E-waste Policy
                <br />
                Cancellation &amp; Return Policy
              </p>
              <img className="line-3" alt="Line" src="/img/line-32.svg" />
            </div>
            <img className="mask-group" alt="Mask group" src="/img/mask-group-4.png" />
          </div>
          <div className="group-4">
            <div className="text-wrapper-7">+1 202-918-2132</div>
            <div className="text-wrapper-8">Whats App</div>
            <img className="img-2" alt="Ant design whats app" src="/img/ant-design-whats-app-outlined.svg" />
          </div>
          <div className="group-5">
            <div className="text-wrapper-9">+1 202-918-2132</div>
            <div className="text-wrapper-10">Call Us</div>
            <img className="img-2" alt="Call" src="/img/call.svg" />
          </div>
          <div className="group-6">
            <img className="image-2" alt="Image" src="/img/image-10.png" />
            <img className="image-3" alt="Image" src="/img/image-11.png" />
          </div>
          <p className="text-wrapper-11">© 2023 All rights reserved. Newmedia technologies Ltd.</p>
        </div>
         <Carousel/>
        <p className="grab-the-best-deal">
          <span className="span">Grab the best deal on </span>
          <span className="text-wrapper-15">Smartphones</span>
        </p>
        <div className="overlap-5">
          <img className="line-4" alt="Line" src="/img/line-24.svg" />
          <img className="line-5" alt="Line" src="/img/line-25.svg" />
       </div>
        <div className="overlap-6">
          <div className="overlap-7">
            <img className="line-6" alt="Line" src="/img/line-27.svg" />
            <div className="frame">
              <p className="div-3">
                <span className="span">Shop From </span>
                <span className="text-wrapper-15">Top Categories</span>
              </p>
              <img className="line-7" alt="Line" src="/img/line-27-1.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-16">View All</div>
              <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-1.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="overlap-7">
            <img className="line-6" alt="Line" src="/img/line-29.svg" />
            <div className="frame">
              <p className="div-3">
                <span className="span">Daily </span>
                <span className="text-wrapper-15">Essentials</span>
              </p>
              <img className="line-8" alt="Line" src="/img/line-27-2.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-16">View All</div>
              <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-2.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-9">
          <div className="overlap-7">
            <img className="line-6" alt="Line" src="/img/line-28.svg" />
            <div className="frame">
              <p className="div-3">
                <span className="span">Top </span>
                <span className="text-wrapper-15">Electronics Brands</span>
              </p>
              <img className="line-9" alt="Line" src="/img/line-27-3.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-16">View All</div>
              <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-3.svg" />
            </div>
          </div>
        </div>
        <div className="group-25 d-flex"> 
         <Group main_text='Galaxy M13 (4GB | 64 GB )' old_cost='1499 espees' now_cost='104 espees' discount='56% OFF' />
         <Group  main_text='Galaxy M33 (4GB | 64 GB )' old_cost='249 espees' now_cost='169 espees' discount='56% OFF' />
         <Group  main_text='Galaxy M53 (4GB | 64 GB )' old_cost='4099 espees' now_cost='319 espees' discount='56% OFF' />
         <Group  main_text='Galaxy S22 Ultra' old_cost='859 espees' now_cost='679 espees' discount='56% OFF' />
         <Group  main_text='Galaxy S22 Ultra' old_cost='859 espees' now_cost='679 espees' discount='56% OFF' />
        </div>
      
        <div className="group-12">
          <div className="frame-2">
            <div className="text-wrapper-16">View All</div>
            <img className="img-3" alt="Arrow down" src="/img/arrow-down-2.svg" />
          </div>
        </div>
        <div className="overlap-14">
          <div className="component">
            <div className="image-wrapper">
              <img className="image-9" alt="Image" src="/img/image-3-6.png" />
            </div>
            <div className="text-wrapper-29">Cosmetics</div>
          </div>
          <img className="image-10" alt="Image" src="/img/image-3-8.png" />
        </div>
        <div className="component-2">
          <div className="overlap-15">
            <img className="image-11" alt="Image" src="/img/image-3-7.png" />
          </div>
          <div className="text-wrapper-30">Mobile</div>
        </div>
        <div className="component-3">
          <img className="ellipse-7" alt="Ellipse" src="/img/ellipse-41.svg" />
          <div className="text-wrapper-31">Electronics</div>
        </div>
        <div className="overlap-16">
          <div className="component">
            <div className="ellipse-8" />
            <div className="text-wrapper-32">Furniture</div>
          </div>
          <img className="image-12" alt="Image" src="/img/image-4.png" />
        </div>
        <div className="overlap-17">
          <div className="component">
            <div className="ellipse-8" />
            <div className="text-wrapper-33">Watches</div>
          </div>
          <img className="image-13" alt="Image" src="/img/image-5.png" />
        </div>
        <div className="overlap-18">
          <div className="component">
            <div className="ellipse-8" />
            <div className="text-wrapper-34">Decor</div>
          </div>
          <img className="image-14" alt="Image" src="/img/image-6.png" />
        </div>
        <div className="overlap-19">
          <div className="component">
            <div className="ellipse-8" />
            <div className="text-wrapper-35">Accessories</div>
          </div>
          <img className="image-12" alt="Image" src="/img/image-7.png" />
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-20">
            <div className="rectangle-8" />
            <div className="apple-svg-wrapper">
              <img className="apple-svg" alt="Apple svg" src="/img/apple-svg.svg" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-36">IPHONE</div>
            </div>
            <div className="text-wrapper-37">UP to 80% OFF</div>
            <img className="mask-group-3" alt="Mask group" src="/img/mask-group-1.png" />
            <img className="image-15" alt="Image" src="/img/image-9.png" />
          </div>
        </div>
        <div className="overlap-21">
          <div className="overlap-group-wrapper">
            <div className="overlap-22">
              <div className="rectangle-9" />
              <div className="frame-4">
                <div className="text-wrapper-38">REALME</div>
              </div>
              <div className="text-wrapper-39">UP to 80% OFF</div>
              <img className="mask-group-3" alt="Mask group" src="/img/mask-group-2.png" />
              <img className="image-16" alt="Image" src="/img/image-9-1.png" />
            </div>
          </div>
          <img className="download" alt="Download" src="/img/download-1.svg" />
        </div>
        <div className="overlap-23">
          <div className="overlap-group-wrapper">
            <div className="overlap-24">
              <div className="rectangle-10" />
              <div className="frame-5">
                <div className="text-wrapper-38">XIAOMI</div>
              </div>
              <div className="text-wrapper-40">UP to 80% OFF</div>
              <img className="mask-group-3" alt="Mask group" src="/img/mask-group-3.png" />
              <img className="image-17" alt="Image" src="/img/image-9-2.png" />
            </div>
          </div>
          <img className="mi-xiaomi" alt="Mi xiaomi" src="/img/mi-xiaomi-1.svg" />
        </div>
        <div className="group-13">
          <div className="ellipse-9" />
          <div className="ellipse-10" />
          <div className="ellipse-11" />
          <div className="ellipse-12" />
          <div className="ellipse-13" />
          <div className="ellipse-14" />
          <div className="rectangle-11" />
        </div>
        <div className="element-groceries-hd-wrapper">
          <img
            className="element-groceries-hd"
            alt="Element groceries hd"
            src="/img/41624-7-groceries-hd-download-hd-png-1.png"
          />
        </div>
        <div className="element-grocery-free-wrapper">
          <img
            className="element-grocery-free"
            alt="Element grocery free"
            src="/img/54018-9-grocery-free-hq-image-2.png"
          />
        </div>
        <div className="pngegg-wrapper">
          <img className="pngegg" alt="Pngegg" src="/img/pngegg-1.png" />
        </div>
        <div className="element-strawberry-wrapper">
          <img className="element-strawberry" alt="Element strawberry" src="/img/23410-4-strawberry-photo-1.png" />
        </div>
        <div className="element-mango-fruit-wrapper">
          <img className="element-mango-fruit" alt="Element mango fruit" src="/img/22136-3-mango-fruit-1.png" />
        </div>
        <div className="element-cherry-fruit-wrapper">
          <img className="element-cherry-fruit" alt="Element cherry fruit" src="/img/35763-7-cherry-fruit-file-1.png" />
        </div>
        <div className="text-wrapper-41">Daily Essentials</div>
        <div className="text-wrapper-42">UP to 50% OFF</div>
        <div className="group-14">
          <div className="text-wrapper-43">Vegitables</div>
          <div className="text-wrapper-44">UP to 50% OFF</div>
        </div>
        <div className="group-15">
          <div className="text-wrapper-45">Fruits</div>
          <div className="text-wrapper-44">UP to 50% OFF</div>
        </div>
        <div className="group-16">
          <div className="text-wrapper-46">Strowberry</div>
          <div className="text-wrapper-44">UP to 50% OFF</div>
        </div>
        <div className="group-17">
          <div className="text-wrapper-47">Mango</div>
          <div className="text-wrapper-44">UP to 50% OFF</div>
        </div>
        <div className="group-18">
          <div className="text-wrapper-47">Cherry</div>
          <div className="text-wrapper-44">UP to 50% OFF</div>
        </div>
        <div className="rectangle-12" />
        <div className="rectangle-13" />
        <div className="text-wrapper-48">Espees Market</div>
        <img className="line-12" alt="Line" src="/img/line-3.svg" />
        <img className="line-13" alt="Line" src="/img/line-4.svg" />
        <div className="group-wrapper">
          <div className="group-19">
            <img className="line-14" alt="Line" src="/img/line-4-1.svg" />
            <img className="line-15" alt="Line" src="/img/line-5.svg" />
            <img className="line-16" alt="Line" src="/img/line-6.svg" />
          </div>
        </div>
        <div className="group-20">
          <div className="frame-6">
            <img className="img-3" alt="Search" src="/img/search.svg" />
            <input type="text" className="div-4" placeholder="Search essentials, groceries and more..."/>
          </div>
          <div className="draft-action-list">
            <img className="union" alt="Union" src="/img/union.svg" />
            <div className="ellipse-15" />
            <div className="ellipse-16" />
            <div className="ellipse-17" />
          </div>
        </div>
        <div className="frame-7">
          <div className="frame-8">
            <div className="frame-9">
              <div className="buy">
                <div className="ellipse-18" />
                <img className="vector" alt="Vector" src="/img/vector-75.svg" />
              </div>
              <div  className="text-wrapper-49"><a href="signup">Sign Up/Sign In</a> </div>
            </div>
            <img className="line-17" alt="Line" src="/img/line-23.svg" />
          </div>
          <div className="frame-9">
            <img className="buy" alt="Buy" src="/img/buy.svg" />
            <div className="text-wrapper-49">Cart</div>
          </div>
        </div>
        <Menu />
        <div className="rectangle-14" />
        <p className="text-wrapper-52">Welcome to worldwide Espees Market!</p>
        <div className="frame-18">
          <img className="img-3" alt="Location" src="/img/location.svg" />
          <p className="div-4">
            <span className="text-wrapper-53">423651 </span>
            <span className="text-wrapper-54">Delivered </span>
          </p>
        </div>
        <div className="frame-19">
          <img className="img-3" alt="Iconoir delivery" src="/img/iconoir-delivery-truck.svg" />
          <div className="div-4">Track your order</div>
        </div>
        <div className="frame-20">
          <img className="img-3" alt="Discount" src="/img/discount.svg" />
          <div className="div-4">All Offers</div>
        </div>
        <img className="line-18" alt="Line" src="/img/line-1.svg" />
        <img className="line-19" alt="Line" src="/img/line-2.svg" />
        <div className="text-wrapper-55">Espees Market</div>
      </div>
 </div>
 
  <div id="toTop"></div>
      {/* Back to top button  */}
	
	{/* COMMON SCRIPTS --> */}
    <script src="./Ecommerce-main/js/common_scripts.min.js"></script>
    <script src="./Ecommerce-main/js/main.js"></script>
	
	{/* <!-- SPECIFIC SCRIPTS --> */}
	<script src="./Ecommerce-main/js/carousel-home.min.js"></script>
 </>
  );
};
