import React from 'react';
import './OrderDeliveryPolicy.css'; // External CSS file for styling

const OrderDeliveryPolicy = () => {
  return (
    <div className="OrderDeliveryPolicy-container">
      <h1 className="OrderDeliveryPolicy-title">Order and Delivery Policy</h1>

      <section className="OrderDeliveryPolicy-section">
        <h2 className="OrderDeliveryPolicy-subtitle">Before Delivery</h2>
        <ul className="OrderDeliveryPolicy-list">
          <li>If your order has been placed cash on delivery, you will receive a call or message for confirmation.</li>
          <li>The order will be delivered within <b>1-2 working days</b> inside Dhaka and <b>3-5 working days</b> outside Dhaka through Pathao courier.</li>
          <li>No partial delivery is available. Ordering two or more caps means you cannot keep just one cap; you would need to keep all caps ordered.</li>
          <li>Make sure to check the product in front of the delivery person before accepting your cap.</li>
          <li>Customers with low ratings may be subject to pre-delivery charges.</li>
        </ul>
      </section>

      <section className="OrderDeliveryPolicy-section">
        <h2 className="OrderDeliveryPolicy-subtitle">After Delivery</h2>
        <ul className="OrderDeliveryPolicy-list">
          <li>
            For any product issues or exchange/return requests, please inform us within <b>3 days</b> of receiving the delivery via our Facebook page or by calling <b>+8809613825800</b>.
          </li>
          <li>Pre-delivery charge and delivery charge are nonrefundable.</li>
          <li>Refunds of any order will be processed within <b>7-15 working days</b> after the refund request is issued.</li>
        </ul>
      </section>

      <section className="OrderDeliveryPolicy-section">
        <h2 className="OrderDeliveryPolicy-subtitle">Box Policy</h2>
        <ul className="OrderDeliveryPolicy-list">
          <li>For every 3 caps ordered, you will receive 1 box. Example: 3 caps = 1 box.</li>
          <li>For orders of 1 or 2 caps, you will receive 1 box. Example: 1 or 2 caps = 1 box.</li>
          <li>For 4 caps, you will receive 2 boxes. Example: 4 caps = 2 boxes.</li>
          <li>
            If you require additional boxes for special packaging or gifts, an extra charge will apply. 
            Example: 4 caps = 3 boxes (extra box will incur additional charges).
          </li>
          <li>
            To request additional boxes, contact us via our Facebook page or call <b>+8809613825800</b>. Provide details about your order and specify the number of additional boxes required.
          </li>
        </ul>
      </section>

      <section className="OrderDeliveryPolicy-section">
        <h2 className="OrderDeliveryPolicy-subtitle">ডেলিভারির পূর্বে</h2>
        <ul className="OrderDeliveryPolicy-list">
          <li>অর্ডার ক্যাশ অন ডেলিভারীতে প্লেস করা হলে, খুব শীঘ্রই কল বা মেসেজের মাধ্যমে জানানো হবে।</li>
          <li>ঢাকার ভিতরে ১-২ কর্মদিবস এবং ঢাকার বাহিরে ৩-৫ কর্মদিবস মধ্যে হোম ডেলিভারী করা হবে।</li>
          <li>Partial Delivery না থাকায় ২ বা এর বেশি ক্যাপ অর্ডার করলে একটি ক্যাপ রাখা যাবে না।</li>
          <li>ডেলিভারী ম্যানের সামনে প্রোডাক্ট চেক করে বুঝে নিবেন।</li>
        </ul>
      </section>
    </div>
  );
};

export default OrderDeliveryPolicy;
