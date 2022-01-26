import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  let a = 123123.123;
  console.log(parseFloat(a.toFixed(2)));
  const formatedPrice = `€ ${parseFloat(props.price.toFixed(2))}`;
  console.log(formatedPrice);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
};

export default MealItem;