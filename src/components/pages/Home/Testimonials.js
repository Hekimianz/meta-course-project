import customer1Image from "./assets/person1.jpg";
import customer2Image from "./assets/person2.jpg";
import customer3Image from "./assets/person3.jpg";
import customer4Image from "./assets/person4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Carmen Rodriguez",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `"Fresh, flavorful, and beautiful!"`,
  },
  {
    fullName: "Aisha Patel",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `"Small but mighty with great service!"`,
  },
  {
    fullName: "Malik Johnson",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `"A must-try hidden gem!"`,
  },
  {
    fullName: "Lucas Silva",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `"Healthy and delicious menu!"`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
