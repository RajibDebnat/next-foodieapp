'use client';
import classes from "./page.module.css";
import ImagePicker from "@/components/ImagePicker";
import MealsFormButton from "@/components/meals/meals-form-btn";
import handleShareMeal from "@/liv/action";
import { useFormState } from "react-dom";
// import { formatDate } from "tough-cookie";
export default function ShareMealPage() {
  const [state,formAction]= useFormState(handleShareMeal,{message:null})
  // console.log(state )
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={"A Food Image"} name={"image"} />
          {state.message&&<p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormButton />
          </p>
        </form>
      </main>
    </>
  );
}
