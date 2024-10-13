//import Carousel from "react-elastic-carousel";
'use client';  
// use Client needed for the below error 
// <button title=... onClick={function} children=...>  
// If you need interactivity, consider converting part of this to a Client Component.
import Link from "next/link";
import { items } from "../../../../public/Items.json";
import styles from "../../../styles/Elastic.module.css";
import "./TrendingSlider.css";


    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 3 }
    ];
    export default function ElasticCarousel() {
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
        <div className={styles.container}>
          <div className={styles.contWrapper}> 
            <h1 class="text-[clamp(28px,20px_+_2vw,40px)] pt-[24px]"> Best Fashion Studio collections</h1>
          </div>
          <hr    class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"  /> {/* className={styles.seperator}*/}
          <div className={styles.contWrapper}>

          <div className="trending">
            <div className="container">
             {/*  <div className="title-btns">
                <h3></h3>
                <div className="btns">
                  <button title="scroll left" onClick={() => slideLeft()}>
                    <AiOutlineArrowLeft />
                  </button>
                  <button title="scroll right" onClick={slideRight}>
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>*/} 
              <div className="row-container" id="slider">
                {elastic.map((item) => (
                  <div key={item.id} className="row-item">
                    <Link href={`/`} className="link">
                      <div className="item-header">
                        <img src={item.imageUrl} alt="product" />
                      </div>
                      {/* <div className="item-description">
                        <p>{item.description}</p>
                        <p className="item-price">{item.price}$</p>
                      </div> */}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>




         { /*   <Carousel breakPoints={breakPoints}>
              {elastic.map((item) => (
                <div
                  key={item.id}
                  className={styles.cardBody}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className={styles.title}>
                    <h3>{item.title} </h3>
                  </div>
                </div>
              ))}
            </Carousel> */} 
          </div>
        </div>
      );
    }