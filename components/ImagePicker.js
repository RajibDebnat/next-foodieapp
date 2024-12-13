'use client'
import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";
export default function ImagePicker({ label ,name}) {
    const [pickedFile,setPickedFile] = useState()
    const ref = useRef();
    const handleInputPicker= ()=>{
ref.current.click();
    }
    const handleInputChange=(event)=>{
        const file = event.target.files[0]
        if(!file){
            return
        }
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            setPickedFile(fileReader.result)
        }
         fileReader.readAsDataURL(file)
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedFile && "No File Yet Selected"}
            {pickedFile && <Image onClick={handleInputPicker} alt="image" fill src={pickedFile}/>}
        </div>
        <input
        ref={ref}
        className={classes.input}
          type="file"
          id="image"
          accept="image/png,image/jpg,image/jpeg"
          name={name}
          required
          onChange={handleInputChange}
        />
        <button onClick={handleInputPicker} className={classes.button} type="button">Pick an Image</button>
      </div>
    </div>
  );
}
