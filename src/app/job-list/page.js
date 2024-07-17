"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import Navbar from "@/components/Navbar";
import Lottie from "react-lottie";
import animationData from "@/animation/loading.json";

const page = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Please log in");
        return;
      }

      try {
        const response = await axios.get(
          "https://diyainteractive.pythonanywhere.com/api/v1/jobs",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setJobs(response.data.data.Jobs);
        console.log(response.data.data.Jobs);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Navbar />
      <div className=" container">
        <div className=" py-4">
          <h2 className=" fs-4">Available Jobs</h2>
        </div>
        {loading ? (
          <div
            style={{ height: "55vh", width: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>
        ) : (
          <div>
            {jobs.map((job) => (
              <div
                style={{ padding: "", borderRadius: "50px" }}
                key={job.id}
                className="job-row d-flex p-md-4 p-2 flex-lg-row mb-3"
              >
                <span
                  style={{
                    background: getRandomColor(),
                    height: "45px",
                    width: "45px",
                    padding: "12px",
                    color: "white",
                    marginRight: "24px",
                    borderRadius: "50px",
                  }}
                  className=" primary-font job-character fs-4 d-flex justify-content-center align-items-center"
                >
                  {job.job_title.charAt(0)}
                </span>

                <div className="row flex-fill">
                  <div className="col-sm-5 col-10">
                    <h4 className=" primary-font job-title fs-5">
                      {job.job_title} |{" "}
                      <span className=" fw-semibold"> {job.location}</span>
                    </h4>
                    <div style={{lineHeight: "14px"}} className=" extra-info">
                      <span
                        style={{ color: "#7A7A7A" }}
                        className="primary-font posted-date fs-6"
                      >
                        Posted{" "}
                        <span style={{ color: "#4c4c4c", fontWeight: "600" }}>
                          {formatDistanceToNow(new Date(job.created_on))} ago
                        </span>
                      </span>{" "}
                      <span className="primary-font experience-required">
                        Experience:{" "}
                        <span style={{ color: "#4c4c4c", fontWeight: "600" }}>
                          {job.years_of_experience} years
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4 d-none d-sm-block py-2"></div>
                  <div className="col-sm-3 col-2 text-lg-end d-flex justify-content-center align-items-center">
                    <div className=" mx-md-3 mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <div className="mx-md-3 mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
