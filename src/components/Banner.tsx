import "../styles/banner.css";
import { Typewriter } from "react-simple-typewriter";
import Js from "./tech-stack/js";
import Html from "./tech-stack/html";
import Css from "./tech-stack/css";
import Bootstrap from "./tech-stack/bootstrap";
import Vue from "./tech-stack/vue";
import Nuxt from "./tech-stack/nuxt";
import React from "./tech-stack/react";
import Node from "./tech-stack/node";
import Python from "./tech-stack/python";
import Mysql from "./tech-stack/mysql";
import Git from "./tech-stack/git";
import FastApi from "./tech-stack/fast-api";

const Banner = () => {
  return (
    <div className="bg-grey pt-5">
      <div className="d-flex justify-content-center">
        <div className="custom-container">
          <div className="about-me ">
            <h1 className="text-start">Hello, This is A. H. M. Zobyer</h1>
            <p className="text-start fg-black">
              I am a passionate Full Stack Developer, specialised in front-end
              development using Javascript, Vue & React. Loves to learn new
              technologies, take challenges & solve real life problems using my
              knowledgebase, I create amazing web applications to make the
              internet a better place. You can talk to me about{" "}
              <span style={{ fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Javascript",
                    "Vue",
                    "Nuxt",
                    "Node",
                    "Python",
                    "sleep😁",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>

          <div className="my-stack">
            <h2>Some of my favourite tools</h2>
            <div className="d-flex justify-content-center flex-wrap mt-5">
              <div className="mx-3 mt-4">
                <Js resolution={{ width: 90, height: 90 }} />

                <p className="mt-3">JavaScript</p>
              </div>
              <div className="mx-3 mt-4">
                <Html resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">HTML</p>
              </div>

              <div className="mx-3 mt-4">
                <Css resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">CSS</p>
              </div>

              <div className="mx-3 mt-4">
                <Bootstrap resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Bootstrap</p>
              </div>

              <div className="mx-3 mt-4">
                <Vue resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Vue</p>
              </div>

              <div className="mx-3 mt-4">
                <Nuxt resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Nuxt</p>
              </div>

              <div className="mx-3 mt-4">
                <React resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">React</p>
              </div>

              <div className="mx-3 mt-4">
                <Node resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Node js</p>
              </div>

              <div className="mx-3 mt-4">
                <Python resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Python</p>
              </div>

              <div className="mx-3 mt-4">
                <FastApi resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">FastAPI</p>
              </div>

              <div className="mx-3 mt-4">
                <Mysql resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">MySql</p>
              </div>

              <div className="mx-3 mt-4">
                <Git resolution={{ width: 90, height: 90 }} />
                <p className="mt-3">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
