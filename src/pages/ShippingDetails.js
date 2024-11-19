import React from 'react';
import Footer from '../components/Footer'
import './Page.css'

const ShippingDetails = () => {
  return (
    <>
   <div className='everstyle-main' style={{ padding: '70px' }}>

    <div className="shipping-details">
      <center><h1>SHIPPING DETAIILS</h1>

      <p>We strive to provide reliable and timely delivery for all orders. Here’s everything you need to know about our shipping policies:</p>
      </center>
      <br/><br/>

      <h2>Shipping Options and Fees</h2>
      <ul>
        <li className='li-text'><strong>Standard Shipping:</strong> Delivery within <strong>5-7 business days</strong>. Free for orders over 150Rs; otherwise, a <strong>40Rs flat rate</strong>.</li>
        <li className='li-text'><strong>Express Shipping:</strong> Delivery within <strong>2-3 business days</strong>. 49Rs flat rate for all orders.</li>
      </ul>
      <br/>
      <h2>Processing Time</h2>
      <p>All orders are processed within <strong>1-2 business days</strong> (Monday-Friday, excluding holidays). Orders placed after 3 PM will begin processing on the next business day.</p>
      <br/>
      <h2>International Shipping</h2>
      <p>We offer international shipping to select countries. Shipping times may vary based on the destination and local customs processing. International customers are responsible for any customs fees, duties, or taxes that may apply.</p>
      <br/>
      <h2>Order Tracking</h2>
      <p>Once your order is shipped, a <strong>tracking number</strong> will be sent to your email so you can monitor your shipment’s progress. You can track your order through the link provided in the email or on our website’s <strong>Order Tracking</strong> page.</p>
      <br/>
      <h2>Estimated Delivery Times</h2>
      <ul>
        <li className='li-text'><strong>Domestic:</strong></li>
        <ul>
          <li className='li-text'>Standard Shipping: 5-7 business days</li>
          <li className='li-text'>Express Shipping: 2-3 business days</li>
        </ul>
        <li className='li-text'><strong>International:</strong> Varies by location; typically 10-15 business days</li>
      </ul>
      <p><em>Note:</em> Delivery times are estimates and may vary due to weather conditions, carrier delays, or holidays.</p>
      <br/>
      <h2>Shipping Restrictions</h2>
      <p>We do not ship to <strong>PO Boxes</strong> or <strong>APO/FPO addresses</strong>.</p>
      <p> Certain items may be restricted for international shipping due to regulatory constraints.</p>
      <br/>
      <h2>Missed or Delayed Deliveries</h2>
      <p>If your package is delayed, please wait an additional 2-3 business days as deliveries can be impacted by external factors. For packages marked as “Delivered” but not received, contact our Customer Support at <a href="mailto:support@everstyle.com">support@everstyle.com</a> within <strong>7 days</strong>.</p>
      <br/>
      <h2>Damaged or Lost Packages</h2>
      <p>If your package arrives damaged or does not arrive at all, please reach out to our team immediately at <a href="mailto:support@everstyle.com">support@everstyle.com</a>. We’ll work with you to file a claim and arrange for a replacement or refund.</p>
      <br/>
      <h2>Contact Us</h2>
      <p>If you have questions or need help with your order, our support team is here for you. Contact us at <a href="mailto:support@everstyle.com">support@everstyle.com</a> or call us at <strong>+1-800-123-4567</strong>.</p>
      
    </div>
    </div>
    <Footer /> 
    </>
  );
};

export default ShippingDetails;
