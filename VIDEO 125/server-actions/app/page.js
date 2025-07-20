"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
   <div>
    <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
      <div className="w-2/3 mx-auto my-5">
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" className="text-black mx-4 bg-amber-50" />
      <div>
        <label htmlFor="address">Address </label>
        <input type="text" name="add" id="add" className="text-black mx-4 bg-amber-50" />
      </div>
      <button className="border border-white px-5 bg-red-500">Submit</button>
      </div>
    </form>
   </div>
  );
}
