import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious pizaa prepared in classic italian style</h2>
      <p>
        Choose your favorite pizza from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs and italian pizza masters!
      </p>
    </section>
  );
};

export default MealsSummary;
