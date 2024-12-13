import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';
import { images } from '@/next.config';


export default function MealItem({ title, slug, image, summary, creator }) {
  // const fileteredImages = image.includes(".jfif");
  const hasSlash = image.startsWith('/');
  console.log(hasSlash)

  return (
    // <h1>hello</h1>
    <article className={classes.meal}>
      <header>
      <div className={classes.image}>
          <Image src={`${ image }`} alt={title} fill />
        </div> 
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}