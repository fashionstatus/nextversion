"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { items } from "../../../../public/Items.json";
import "./TrendingSlider.css";

const TrendingSlider = () => {  
    const { elastic } = items;
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
      };
     
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
      };
      return (
        <>
          <div className="trending">
            <div className="container">
              <div className="title-btns">
                <h3></h3>
                <div className="btns">
                  <button title="scroll left" onClick={slideLeft}>
                    <AiOutlineArrowLeft />
                  </button>
                  <button title="scroll right" onClick={slideRight}>
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
              <div className="row-container" id="slider">
                {elastic.map((item) => (
                  <div key={item.id} className="row-item">
                    <Link href={`/`} className="link">
                      <div className="item-header">
                        <img src={item.img} alt="product" />
                      </div>
                      <div className="item-description">
                        <p>{item.description}</p>
                        <p className="item-price">{item.price}$</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    };
    export default TrendingSlider;