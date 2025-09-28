import React from "react";
import styles from "../styles/pages.module.css";
import { Element } from "react-scroll";

const reviews = [
  {
    name: "Riya Sharma",
    text: "This institute helped me score 8.5 overall! The mock tests and speaking sessions were amazing.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "John Doe",
    text: "Highly recommended! Personalized feedback made all the difference.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    text: "I improved my writing score from 6.5 to 7.5 in just 2 months.",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4,
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="stars flex items-center gap-0.5 transform transition-transform duration-200">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < value ? "currentColor" : "none"}
          stroke="currentColor"
          className={`w-4 h-4 ${
            i < value ? "text-yellow-400" : "text-gray-300"
          }`}
          aria-hidden
        >
          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 3.98.99 5.78L10 15.77 4.82 17.35l.99-5.78L1.62 7.59l5.79-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center text-gray-900"
          style={{ fontFamily: "Alan Sans, sans-serif", fontSize: "2.5rem" }}
        >
          What Our Students Say
        </h2>

        <div className="flex flex-col justify-evenly md:flex-row gap-6 items-stretch">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="group flex-1 rounded-lg p-5 md:p-6 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg"
              style={{
                minHeight: 200,
                backgroundColor: "#ECFDF5",
                padding: 40,
                margin: 10,
                borderRadius: 12,
              }}
              aria-label={`Testimonial from ${r.name}`}
            >
              <div
                className="h-full flex flex-col justify-between rounded-lg cursor-pointer
             shadow-md hover:shadow-lg hover:-translate-y-1
             transition duration-200 ease-in-out"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      className="rounded-full object-cover ring-1 ring-gray-100 shadow-sm flex-shrink-0
                                 w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20
                                 transform transition duration-200 ease-in-out
                                 group-hover:scale-105 group-hover:ring-4 group-hover:ring-blue-100"
                      style={{ width: "5rem", height: "5rem" }}
                    />

                    <div className="min-w-0" style={{ marginLeft: 10 }}>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-600 truncate">
                          {r.name}
                        </h4>
                      </div>

                      <div className="mt-1 transform transition-transform duration-200 group-hover:-translate-y-1">
                        <Stars value={r.rating} />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mt-4 flex-grow leading-relaxed">
                    “{r.text}”
                  </p>
                </div>

                <div className="mt-4 text-xs text-gray-400 text-right">
                  {["2 days ago", "1 week ago", "3 weeks ago"][idx] || "recent"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>
        {`
         
          .group:hover img {
            box-shadow: 0 6px 18px rgba(20,20,40,0.08);
          }
        `}
      </style>
    </section>
  );
}
