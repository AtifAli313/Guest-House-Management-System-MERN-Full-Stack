import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How far is the airport?',
      answer: 'Skardu Airport is approximately 5 minutes drive from Gangs Sengy Guest House. We can arrange airport transfers upon request.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we provide free parking for all our guests. The parking area is secure and monitored 24/7.'
    },
    {
      question: 'What time is check-in and check-out?',
      answer: 'Check-in is from 2:00 PM and check-out is until 11:00 AM. Early check-in or late check-out can be arranged subject to availability.'
    },
    {
      question: 'Do you accept credit cards?',
      answer: 'Yes, we accept all major credit cards as well as cash payments. Online payments are also available through our secure booking system.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#dad4f6] text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-[#EAB308] mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <summary className="cursor-pointer p-6 text-xl font-semibold hover:text-[#EAB308] transition-colors duration-300">
                {faq.question}
              </summary>
              <div className="black
              ">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;