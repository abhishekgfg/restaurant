import React from "react";
import "../styles/TestimonialPage.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Nine to Nine is my go-to restaurant! The food is always fresh and delicious.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    text: "Great taste and fast delivery. Love the tandoori chai!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Verma",
    text: "Amazing ambiance and friendly staff. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Pooja Singh",
    text: "Loved their special paneer dishes. Definitely ordering again!",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Ravi Jain",
    text: "Affordable and flavorful meals. The best local restaurant experience.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <p className="testimonial-text">“{t.text}”</p>
            <h4 className="testimonial-name">— {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
