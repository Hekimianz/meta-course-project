import { Link } from "react-router-dom";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon.jpg";
import "./WeekSpecials.css";
import pages from "../../../utils/pages";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `Our Greek salad is a refreshing mix of crisp greens, juicy tomatoes, crunchy cucumbers, and tangy Kalamata olives topped with creamy feta cheese and a simple vinaigrette dressing.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Our bruschetta is a delicious appetizer that features grilled bread topped with juicy, ripe tomatoes, fresh basil, and a drizzle of extra virgin olive oil. This simple yet flavorful dish is the perfect way to start any meal.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `Our lemon dessert is a light and refreshing treat that's perfect for satisfying your sweet tooth. Made with fresh lemon juice and zest, our dessert has a tangy, citrusy flavor that's balanced perfectly with a sweet, buttery crust. It's the perfect way to end your meal on a high note.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get("orderOnline").path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
