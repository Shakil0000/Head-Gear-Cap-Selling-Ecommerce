import React from "react";
import "./LoyaltyProgram.css"; // External CSS for styling

const LoyaltyProgram = () => {
  return (
    <div className="loyaltyProgram-container">
      <h1 className="loyaltyProgram-title">Loyalty Program Terms and Conditions</h1>
      
      <section className="loyaltyProgram-section">
        <h2>Eligibility</h2>
        <p>
          1. The Head Gear Loyalty Program is available to all customers who
          purchase caps through our online store.
        </p>
      </section>

      <section className="loyaltyProgram-section">
        <h2>Loyalty Card Issuance</h2>
        <p>
          2. Customers will receive one loyalty card for each cap purchased at
          full price.
        </p>
        <p>3. Caps purchased during sales or with any offers are not eligible for loyalty cards.</p>
        <p>4. A total of 9 loyalty cards must be collected to qualify for the 10th cap free.</p>
      </section>

      <section className="loyaltyProgram-section">
        <h2>Redeeming the Free Cap</h2>
        <p>5. To redeem the free cap, customers must verify the purchase history of 9 caps online.</p>
        <p>6. The free cap must be selected from caps priced at or below 800 BDT.</p>
        <p>
          7. If a cap priced over 800 BDT is selected, the customer cannot
          adjust the price or use the loyalty cards to cover the difference.
        </p>
      </section>

      <section className="loyaltyProgram-section">
        <h2>Loyalty Card Reset</h2>
        <p>
          8. Once a loyalty card is used to redeem a free cap, the collection of
          loyalty cards will reset. The customer must start collecting loyalty
          cards anew from the first card.
        </p>
      </section>

      <section className="loyaltyProgram-section">
        <h2>Additional Terms</h2>
        <p>9. Loyalty cards are non-transferable and cannot be exchanged for cash.</p>
        <p>
          10. Head Gear reserves the right to modify or discontinue the loyalty
          program at any time without prior notice.
        </p>
        <p>
          11. Any fraudulent activity related to the loyalty program may result
          in disqualification from the program and forfeiture of loyalty cards.
        </p>
      </section>

      <section className="loyaltyProgram-section">
        <h2>Customer Support</h2>
        <p>For any inquiries or assistance related to the loyalty program, please contact us at:</p>
        <ul>
          <li>Phone: 09613-825800</li>
          <li>Email: support@headgearbd.com</li>
        </ul>
      </section>

      <footer className="loyaltyProgram-footer">
        <p>
          By participating in the Head Gear Loyalty Program, customers agree to these terms and conditions.
        </p>
      </footer>
    </div>
  );
};

export default LoyaltyProgram;
