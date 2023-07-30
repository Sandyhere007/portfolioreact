import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.png";

const Home = ({ ratio }) => {
  const questionCount = useRef(null);
  const projectCount = useRef(null);

  const animationQuestionsCount = () => {
    animate(0, 400, {
      duration: 1,
      onUpdate: (v) => (questionCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sandeep patidar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A FUll-Stack Developer", "A Designer", "A Coder"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:sandeeppatidar082@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2.5 && (
                <motion.span
                  whileInView={animationQuestionsCount}
                  ref={questionCount}
                ></motion.span>
                )}
            </p>
            <span>DSA Questions Solved</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2.5 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
               )}
              </p>
              <span>Projects worked on</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>sandeeppatidar082@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="My image" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
