import React from "react";
import "./PrivacyPolicy.css"; // External CSS for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacyPolicy-container">
      <h1 className="privacyPolicy-title">Privacy Policy</h1>
      <p className="privacyPolicy-text">
        This Privacy Policy describes how headgearbd.com (the “Site” or “we”)
        collects, uses, and discloses your Personal Information when you visit
        or make a purchase from the Site.
      </p>
      
      <h2 className="privacyPolicy-subtitle">Contact</h2>
      <p className="privacyPolicy-text">
        After reviewing this policy, if you have additional questions, want
        more information about our privacy practices, or would like to make a
        complaint, please contact us:
        <br />
        Email: <a href="mailto:support@headgearbd.com">support@headgearbd.com</a>
        <br />
        Phone: 09613-825800
        <br />
        Address: Ground Floor, Momtaz Plaza, Opposite of District Jail
        Narayanganj 1421, Bangladesh
      </p>

      <h2 className="privacyPolicy-subtitle">How We Collect Information</h2>
      <h3 className="privacyPolicy-section">Information Provided By Your Web Browser</h3>
      <p className="privacyPolicy-text">
        We may record information that your web browser routinely shares, such
        as browser type, language, software and hardware attributes, date and
        time of visit, etc. This is usually anonymous data collected on an
        aggregate basis.
      </p>

      <h3 className="privacyPolicy-section">Personal Information That You Provide</h3>
      <p className="privacyPolicy-text">
        To use our services or contact a Headgearbd member, you must create an
        account. Information such as your name, phone number, and email address
        will be required.
      </p>

      <h3 className="privacyPolicy-section">Payment Information</h3>
      <p className="privacyPolicy-text">
        Our only payment channel is cash on delivery. We will have your address
        and contact number to identify the customer.
      </p>

      <h2 className="privacyPolicy-subtitle">Use Of Cookies And Similar Technology</h2>
      <h3 className="privacyPolicy-section">Session And Persistent Cookies</h3>
      <p className="privacyPolicy-text">
        We use cookies to track user preferences and enable features. These
        cookies may be session-based (deleted after leaving the site) or
        persistent (stored on your device for future use).
      </p>

      <h3 className="privacyPolicy-section">Advertising Cookies</h3>
      <p className="privacyPolicy-text">
        Third-party services like Google may use cookies for personalized ads.
        You can opt-out of these at <a href="http://www.google.com/privacy_ads.html">Google Ads Settings</a>.
      </p>

      <h3 className="privacyPolicy-section">Web Beacons</h3>
      <p className="privacyPolicy-text">
        We use web beacons to track the effectiveness of communications, such
        as email open rates.
      </p>

      <h2 className="privacyPolicy-subtitle">Information About Others</h2>
      <p className="privacyPolicy-text">
        If you plan to ship using our service, you’ll need to provide sender and
        recipient contact information.
      </p>

      <p className="privacyPolicy-contact">
        For further assistance, please contact us at:
        <br />
        Email: <a href="mailto:support@headgearbd.com">support@headgearbd.com</a>
        <br />
        Phone: 09613-825800
      </p>
    </div>
  );
};

export default PrivacyPolicy;
