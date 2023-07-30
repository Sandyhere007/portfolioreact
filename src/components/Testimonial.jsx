
import React from "react";
import data from "../assets/data.json";
import {AiFillHtml5} from 'react-icons/ai'
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Skills</h2>

      <section>
        {data.skills.map((item)=>(
           <SkillsCard
           name={item.name}
           image = {item.img}
         />
        ))}
      </section>
    </div>
  );
};

const SkillsCard = ({ name, image }) => (
  <article>
    <img
      src={image}
    />
    <h4>{name}</h4>
  </article>
);

export default Testimonial;