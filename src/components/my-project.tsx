import "../styles/my-projects.css";
import Bootstrap from "./tech-stack/bootstrap";
import Css from "./tech-stack/css";
import Django from "./tech-stack/django";
import FastApi from "./tech-stack/fast-api";
import Html from "./tech-stack/html";
import Java from "./tech-stack/java";
import Js from "./tech-stack/js";
import Nuxt from "./tech-stack/nuxt";
import PostgreSql from "./tech-stack/postgreqsql";
import Pusher from "./tech-stack/pusher";
import Python from "./tech-stack/python";
import React from "./tech-stack/react";
import Sqlite from "./tech-stack/sqlite";
import Vue from "./tech-stack/vue";

const MyProject = () => {
  return (
    <div className="bg-grey d-flex justify-content-center my-project-container">
      <div className="custom-container">
        <div className="pb-2">
          <h2 className="header">My Project</h2>
        </div>

        <div className="project1 mt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <h4 className="text-start project-name mb-0 me-3">Majhi</h4>
                  </div>
                  <div className="text-start d-flex">
                    <p className="fw-bolder fg-grey1">Made With:</p>
                    <div className="d-flex ms-3">
                      <div>
                        <Html resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Css resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-4">
                        <Bootstrap resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Js resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Vue resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Nuxt resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      Majhi is an online selling platform where any user(seller)
                      can register and generate a online shop for his/her
                      business.
                    </li>
                    <li>
                      Developed the frontend by maintaining pixel perfection.
                    </li>
                    <li>
                      Generated dynamic shop page based on the requested
                      url(shop name).
                    </li>
                    <li>
                      Built log in & registration functionality for customers
                      using OTP verification.
                    </li>
                    <li>
                      Customers can log in & place orders to a specific shop by
                      following a few steps.
                    </li>
                    <li>
                      Order page is generated dynamically for each shop which
                      facilitates its customers to cancel & track orders.
                    </li>
                    <li>
                      Multilingual(Bengali & English) features are added on all
                      the static content of the web app.
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <a
                      href="https://www.majhi.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1 mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <h4 className="text-start project-name mb-0 me-3">
                      Majhi ‑ Admin Panel
                    </h4>
                  </div>
                  <div className="text-start d-flex ">
                    <p className="fw-bolder fg-grey1">Made With:</p>
                    <div className="d-flex ms-3">
                      <div>
                        <Html resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Css resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-4">
                        <Bootstrap resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Js resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Vue resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Pusher resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      By following a few steps anyone can open a digital shop.
                    </li>
                    <li>
                      Seller can manage and build his own shop from this admin
                      panel.
                    </li>
                    <li>
                      Developed the frontend by maintaining pixel perfection.
                    </li>
                    <li>
                      Built log in & registration functionality for customers
                      using OTP verification.
                    </li>
                    <li>
                      Sellers can track, accept & deliver any product from the
                      admin panel.
                    </li>
                    <li>
                      Pusher is integrated to display live push notification
                    </li>
                    <li>
                      Multilingual(Bengali & English) features are added on all
                      the static content of the web app. .
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <a
                      href="https://www.majhi.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1 mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <h4 className="text-start project-name">
                    Manage Your E‑commerce
                  </h4>
                  <div className="text-start d-flex">
                    <p className="fw-bolder fg-grey1">Made With:</p>{" "}
                    <div className="d-flex ms-3">
                      <div>
                        <Python resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <FastApi resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <PostgreSql resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      Three independent platforms are developed using
                      microservice architecture..{" "}
                    </li>
                    <li>
                      User can integrate & manage their amazon, ebay,
                      woocommerce seller account using these services .
                    </li>
                    <li>
                      Amazon , ebay, woocommerce developer api’s are used to
                      communicate with respective seller accounts.
                    </li>
                    <li>
                      Message broker(rabbitmq) is used to maintain steady
                      communication between these services.
                    </li>
                    <li>
                      Celery is used to carry out I/O based heavy background
                      task using multithreading.
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <a
                      href="https://www.manageyourecommerce.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1 mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <h4 className="text-start project-name">SCHEDULED TWEET</h4>
                  <div className="text-start d-flex">
                    <p className="fw-bolder fg-grey1">Made With:</p>
                    <div className="d-flex ms-3">
                      <div>
                        <Html resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Css resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Bootstrap resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Js resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Python resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Django resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Sqlite resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      Twitter developer api integrated to post tweet on
                      auhtenticated user account.
                    </li>
                    <li>
                      User can schedule a tweet which will be posted
                      automatically.
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <a
                      href="https://automated-tweet.herokuapp.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1 mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <h4 className="text-start project-name">Blog Manager</h4>
                  <div className="text-start d-flex">
                    <p className="fw-bolder fg-grey1">Made With:</p>
                    <div className="d-flex ms-3">
                      <div>
                        <Html resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Css resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Bootstrap resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Js resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <React resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Python resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Django resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <PostgreSql resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      Developed api’s for blog manager to manage all blogs of
                      evident bd.
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <a
                      href="https://blog.evidentbd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project1 mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <div className="h-100 d-flex align-items-center">
                <div>
                  <h4 className="text-start project-name">
                    Osmany Hall Mess Management System
                  </h4>
                  <div className="text-start d-flex">
                    <p className="fw-bolder fg-grey1">Made With:</p>
                    <div className="d-flex ms-3">
                      <div>
                        <Html resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Css resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Java resolution={{ width: 30, height: 30 }} />
                      </div>
                      <div className="ms-3">
                        <Sqlite resolution={{ width: 30, height: 30 }} />
                      </div>
                    </div>
                  </div>
                  <ul className="text-start px-3">
                    <li>
                      Developed desktop app to manage & calcualte the monthly
                      bills of the residents of MIST student dorm.
                    </li>
                    <li>Gmail api is integrate to send mail automatically.</li>
                    <li>
                      This system is developed during my academic period. MIST
                      is currently using this system.
                    </li>
                  </ul>

                  <div className="d-flex flex-start">
                    <button
                      type="button"
                      className="btn btn-outline-primary px-4"
                    >
                      Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
