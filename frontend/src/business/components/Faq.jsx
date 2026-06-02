import { useState } from "react";
import { Link } from "react-router-dom";


function Faq() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How does RankReview improve SEO?",
      answer:
        "RankReview generates SEO optimized reviews using AI and helps businesses increase visibility on Google search and maps."
    },
    {
      question: "Can I manage multiple business locations?",
      answer:
        "Yes, businesses can manage multiple locations, reviews, and analytics from one centralized dashboard."
    },
    {
      question: "Is the platform scalable?",
      answer:
        "Yes, the platform uses Dockerized microservices architecture capable of handling large traffic and concurrent users."
    },
    {
      question: "Does RankReview support AI generated replies?",
      answer:
        "Yes, businesses can generate AI powered professional responses for customer reviews instantly."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-24">

      {/* soft background accents */}
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 left-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto px-6">

        {/* HEADING (centered) */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-sm font-semibold text-indigo-600">FAQ</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Everything you need to know about RankReview.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-4">

          {faqData.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300
                  ${isOpen ? "border-indigo-200 shadow-lg shadow-indigo-100/50" : "border-gray-100 shadow-sm hover:border-gray-200"}`}
              >

                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >

                  <h3 className={`text-base md:text-lg font-semibold transition-colors
                    ${isOpen ? "text-indigo-600" : "text-gray-800"}`}>
                    {faq.question}
                  </h3>

                  {/* +/- icon */}
                  <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300
                    ${isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      )}
                    </svg>
                  </span>

                </button>

                {/* ANSWER (smooth slide) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>

            );
          })}

        </div>

        {/* HELP CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-100 bg-white px-8 py-5 shadow-sm">
            <p className="text-sm text-gray-600">
              Still have questions?{" "}
              <span className="font-semibold text-gray-900">We're here to help.</span>
            </p>
            <Link
  to="/contact"
  className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
>
  Contact Us

  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
</Link>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Faq;