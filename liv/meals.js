import error from "@/app/error";
import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
import { arrayBuffer, buffer } from "node:stream/consumers";
import { start } from "node:repl";
const db = sql("meals.db");
export async function mealsData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw error ('something going wrong');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}
export function slugMeal(meal) {}
export async function saveMeal(meal) {
  console.log(meal.image);
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("failed to save image");
    }
  });
  meal.image = "/images/" + fileName;
  db.prepare(`
    INSERT INTO meals (title,summary,instructions, creator ,creator_email,image,slug) VALUES(@title,@summary,@instructions, @creator ,@creator_email,@image,@slug) `).run(meal)}
