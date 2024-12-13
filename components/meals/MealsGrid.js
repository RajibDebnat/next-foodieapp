import classes from "./meals.module.css";
import MealItem from "./meal-item";
function MealsGrid({ meals }) {
console.log('mealsgrid'+ meals[0])
meals.forEach(element => {
  console.log(element)
});
  return (
    <ul className={classes.meals}>
      { meals.map((meal) => (
        <li key={meal.id}>
            <MealItem {...meal}/>
        </li>
      ))}
      {/* {meals && meals.map((meal) => (
        <li key={meal.id}>
            <Meals {...meal}/>
        </li>
      ))} */}
    </ul>
  );
}

export default MealsGrid;
