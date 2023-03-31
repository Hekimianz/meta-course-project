import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>About us</h1>

        <p>
          Little Lemon is a Mediterranean restaurant created by Mario and
          Adrian, two friends with a passion for cooking and a love for fresh,
          vibrant flavors. Inspired by the bright, sunny flavors of the
          Mediterranean, they set out to create a menu that celebrates the rich
          culinary traditions of the region. From fresh salads and savory dips
          to hearty main courses and delicious desserts, every dish at Little
          Lemon is made with care using only the freshest ingredients. With a
          cozy atmosphere and friendly service, Little Lemon is the perfect
          place to enjoy a meal with friends and family. Come join us and
          experience the taste of the Mediterranean!
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
