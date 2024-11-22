import React from "react";
import "./FAQ.css"; // Import external CSS for styling

const FAQ = () => {
  const faqs = [
    {
      question: "How do I properly wash my cap?",
      answer:
        "To maintain the quality and longevity of your cap, hand wash it using mild detergent and cold water. Gently scrub the dirty areas with a soft brush or cloth, and avoid using bleach or strong chemicals. After washing, reshape the cap and allow it to air dry away from direct sunlight. Avoid using a washing machine or dryer, as this can deform the cap.",
    },
    {
      question: "How do I adjust the size of my cap?",
      answer:
        "Most caps available on Head Gear feature an adjustable strap at the back, which allows for easy resizing. For snapback caps, adjust the plastic strap by snapping it into different holes to find your perfect fit. For buckle or Velcro strap caps, adjust the strap until it fits comfortably around your head. Always ensure the cap is snug but not too tight to avoid discomfort.",
    },
    {
      question: "What materials are used in Head Gear caps?",
      answer:
        "Head Gear caps are crafted from a variety of high-quality materials, including cotton, polyester, and suede. Each material is selected to provide comfort, durability, and style. Some caps may also feature unique materials like mesh or faux leather for added breathability or a premium look.",
    },
    // Add the remaining questions here in the same format...
    {
      question: "How can I contact Head Gear for further inquiries?",
      answer:
        "For any additional questions or support, you can reach out to Head Gear via email at support@headgearbd.com or by phone at 09613-825800. The customer service team is available to assist with any inquiries regarding products, orders, or services.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
