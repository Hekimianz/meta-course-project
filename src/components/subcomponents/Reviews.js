import React from "react";
import pic1 from "../../assets/person1.jpg";
import pic2 from "../../assets/person2.jpg";
import pic3 from "../../assets/person3.jpg";
import pic4 from "../../assets/person4.jpg";
import Review from "./Review";
export default function Reviews() {
  const people = [
    {
      name: "Carmen Rodriguez",
      picture: pic1,
      review: '"Fresh, flavorful, and beautiful!"',
    },
    {
      name: "Aisha Patel",
      picture: pic2,
      review: '"Small but mighty with great service!"',
    },
    {
      name: "Malik Johnson",
      picture: pic3,
      review: '"A must-try hidden gem!"',
    },
    {
      name: "Lucas Silva",
      picture: pic4,
      review: '"Healthy and delicious menu!"',
    },
  ];
  return (
    <section id="rev--cont">
      <Review
        name={people[0].name}
        picture={people[0].picture}
        review={people[0].review}
      />
      <Review
        name={people[1].name}
        picture={people[1].picture}
        review={people[1].review}
      />
      <Review
        name={people[2].name}
        picture={people[2].picture}
        review={people[2].review}
      />
      <Review
        name={people[3].name}
        picture={people[3].picture}
        review={people[3].review}
      />
    </section>
  );
}
