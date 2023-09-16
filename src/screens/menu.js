import React from "react";
import ReactDOMClient from "react-dom/client";
import { useState } from 'react';
import '../../Ecommerce-main/css/home_1.css'
import MenuTabComponent from "../components/menuTabComponent";
export var Menu = ()=>{
 return( 
<div className="group-21">
	<header class="version_1" >
        {/* <!-- Mobile menu overlay mask --> */}
		<div class="main_header">
			<div class=" ">
				<div class="row small-gutters">
					
					<nav class=" ">
						
						{/* <!-- Mobile menu button --> */}
						<div class="main-menu">
							<div id="header_menu">
								<a href="index.html"><img src="img/logo_black.svg" alt="" width="100" height="35"/></a>
								<a href="#" class="open_close" id="close_in"><i class="ti-close"></i></a>
							</div>
							<ul>
								<li class="submenu">
									<a href="javascript:void(0);" class="show-submenu">
                                    <MenuTabComponent tabName="Groceries" active={true}/>
                                    </a>
									<ul>
										<li><a href="index.html">Slider</a></li>
										<li><a href="index-2.html">Video Background</a></li>
										<li><a href="index-3.html">Vertical Slider</a></li>
										<li><a href="index-4.html">GDPR Cookie Bar</a></li>
									</ul>
								</li>
								<li class="megamenu submenu">
									<a href="javascript:void(0);" class="show-submenu-mega">
                                    <MenuTabComponent tabName="Premium Fruits" />
                                    </a>
									<div class="menu-wrapper">
										<div class="row small-gutters">
											<div class="col-lg-3">
												<h3>Listing grid</h3>
												<ul>
													<li><a href="listing-grid-1-full.html">Grid Full Width</a></li>
													<li><a href="listing-grid-2-full.html">Grid Full Width 2</a></li>
													<li><a href="listing-grid-3.html">Grid Boxed</a></li>
													<li><a href="listing-grid-4-sidebar-left.html">Grid Sidebar Left</a></li>
													<li><a href="listing-grid-5-sidebar-right.html">Grid Sidebar Right</a></li>
													<li><a href="listing-grid-6-sidebar-left.html">Grid Sidebar Left 2</a></li>
													<li><a href="listing-grid-7-sidebar-right.html">Grid Sidebar Right 2</a></li>
												</ul>
											</div>
											<div class="col-lg-3">
												<h3>Listing row &amp; Product</h3>
												<ul>
													<li><a href="listing-row-1-sidebar-left.html">Row Sidebar Left</a></li>
													<li><a href="listing-row-2-sidebar-right.html">Row Sidebar Right</a></li>
													<li><a href="listing-row-3-sidebar-left.html">Row Sidebar Left 2</a></li>
													<li><a href="listing-row-4-sidebar-extended.html">Row Sidebar Extended</a></li>
													<li><a href="product-detail-1.html">Product Large Image</a></li>
													<li><a href="product-detail-2.html">Product Carousel</a></li>
													<li><a href="product-detail-3.html">Product Sticky Info</a></li>
												</ul>
											</div>
											<div class="col-lg-3">
												<h3>Other pages</h3>
												<ul>
													<li><a href="cart.html">Cart Page</a></li>
													<li><a href="checkout.html">Check Out Page</a></li>
													<li><a href="confirm.html">Confirm Purchase Page</a></li>
													<li><a href="account.html">Create Account Page</a></li>
													<li><a href="track-order.html">Track Order</a></li>
													<li><a href="help.html">Help Page</a></li>
													<li><a href="help-2.html">Help Page 2</a></li>
													<li><a href="leave-review.html">Leave a Review</a></li>
												</ul>
											</div>
											<div class="col-lg-3 d-xl-block d-lg-block d-md-none d-sm-none d-none">
												<div class="banner_menu">
													<a href="#0">
														<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/banner_menu.jpg" width="400" height="550" alt="" class="img-fluid lazy"/>
													</a>
												</div>
											</div>
										</div>
										{/* <!-- /row --> */}
									</div>
									{/* <!-- /menu-wrapper --> */}
								</li>
								<li class="submenu">
									<a href="javascript:void(0);" class="show-submenu"><MenuTabComponent tabName="Home &amp; Kitchen" /></a>
									<ul>
										<li><a href="header-2.html">Header Style 2</a></li>
										<li><a href="header-3.html">Header Style 3</a></li>
										<li><a href="header-4.html">Header Style 4</a></li>
										<li><a href="header-5.html">Header Style 5</a></li>
										<li><a href="404.html">404 Page</a></li>
										<li><a href="sign-in-modal.html">Sign In Modal</a></li>
										<li><a href="contacts.html">Contact Us</a></li>
										<li><a href="about.html">About 1</a></li>
										<li><a href="about-2.html">About 2</a></li>
										<li><a href="modal-advertise.html">Modal Advertise</a></li>
										<li><a href="modal-newsletter.html">Modal Newsletter</a></li>
									</ul>
								</li>
								<li>
									<a href="#"><MenuTabComponent tabName="Fashion"/></a>
								</li>
								<li>
									<a href="#0"><MenuTabComponent tabName="Electronics"/></a>
								</li>
                                <li>
									<a href="#0"><MenuTabComponent tabName="Beauty"/></a>
								</li>
                                <li>
									<a href="#0"><MenuTabComponent tabName="Home Improvement"/></a>
								</li>
                                <li>
									<a href="#0"><MenuTabComponent tabName="Sports, Toys &amp; Luggage"/></a>
								</li>
							</ul>
						</div>
						{/* <!--/main-menu --> */}
					</nav>
					
				</div>
				{/* <!-- /row --> */}
			</div>
		</div>
		{/* <!-- /main_header --> */}

		
		{/* <!-- /main_nav --> */}
	</header>
	{/* <!-- /header --> */}
			</div>
				
    // <div className="group-21">
    //       <div className="frame-10">
    //         <div className="group-22">
    //           <div className="frame-2">
    //             <div className="text-wrapper-50">Groceries</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-4.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-11">
    //         <div className="group-23">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Premium Fruits</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-5.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-12">
    //         <div className="group-24">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Home &amp; Kitchen</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-6.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-13">
    //         <div className="group-26">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Fashion</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-10.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-14">
    //         <div className="group-27">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Electronics</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-8.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-15">
    //         <div className="group-28">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Beauty</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-9.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-16">
    //         <div className="group-29">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Home Improvement</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-10.svg" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="frame-17">
    //         <div className="group-30">
    //           <div className="frame-2">
    //             <div className="text-wrapper-51">Sports, Toys &amp; Luggage</div>
    //             <img className="img-3" alt="Arrow down" src="/img/arrow-down-2-11.svg" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>);
 );
}

