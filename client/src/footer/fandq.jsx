import React from "react";
const FAQ = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <h2 className="text-xl font-semibold mt-4">How can I track my order?</h2>
      <p>Log in to your account and go to the "My Orders" section to view tracking details.</p>

      <h2 className="text-xl font-semibold mt-4">What is your return policy?</h2>
      <p>Returns are accepted within 3 days. Please visit our <a href="/return" className="text-blue-500 hover:underline">Return Policy</a> page for details.</p>

      <h2 className="text-xl font-semibold mt-4">Which payment methods do we accept?</h2>
      <p>Unfortunately only cash on delivery is available. Online payment will added soon on this website for urgent online payment you can contact or meesage on this number 7986438681.</p>
    </div>
  );
};

export default FAQ;
