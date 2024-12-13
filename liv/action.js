"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
function isInvalid(value) {
  return  !value||  value.trim() === ""     
}
const handleShareMeal = async (prevState,formData) => {
  // 'use server';
  // console.log(formData.get(title));

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };
  console.log(meal)
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    meal.image.size === 0 ||!meal.image||
    !meal.creator_email.includes("@")
  ) {
    return { message: "Invalid Input" };
  }
  await saveMeal(meal);
  redirect("/meals");
  // console.log(meal)
  // console.log(meal.image.name)
};
export default handleShareMeal;
