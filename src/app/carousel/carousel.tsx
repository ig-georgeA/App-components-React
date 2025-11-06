import { IgrButton, IgrCarousel, IgrCarouselSlide } from '@infragistics/igniteui-react';
import { useRef } from 'react';
import styles from './carousel.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Carousel() {
  const classes = createClassTransformer(styles);
  const imageCarousel = useRef<IgrCarousel>(null);
  const contentCarousel = useRef<IgrCarousel>(null);

  return (
    <>
      <div className={classes("row-layout carousel-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <img src="/src/assets/Avatar2.png" alt="" onClick={() => imageCarousel?.current?.next()} className={classes("image")} />
            <img src="/src/assets/Avatar3.png" alt="" className={classes("image")} />
            <img src="/src/assets/Avatar9.png" alt="" className={classes("image")} />
            <img src="/src/assets/Avatar7.png" alt="" className={classes("image")} />
          </div>
          <IgrCarousel vertical={false} animationType="fade" interval={3000} indicatorsOrientation="end" disablePauseOnInteraction={true} ref={imageCarousel} className={classes("image-carousel")}>
            <IgrCarouselSlide className={classes("row-layout carousel-slide")}>
              <img src="/src/assets/Avatar2.png" alt="" className={classes("image_1")} />
            </IgrCarouselSlide>
            <IgrCarouselSlide className={classes("row-layout carousel-slide")}>
              <img src="/src/assets/Avatar3.png" alt="" className={classes("image_1")} />
            </IgrCarouselSlide>
            <IgrCarouselSlide className={classes("row-layout carousel-slide")}>
              <img src="/src/assets/Avatar9.png" alt="" className={classes("image_1")} />
            </IgrCarouselSlide>
            <IgrCarouselSlide className={classes("row-layout carousel-slide")}>
              <img src="/src/assets/Avatar7.png" alt="" className={classes("image_1")} />
            </IgrCarouselSlide>
          </IgrCarousel>
        </div>
        <IgrCarousel vertical={false} hideNavigation={true} animationType="slide" hideIndicators={true} ref={contentCarousel} className={classes("content-carousel")}>
          <IgrCarouselSlide className={classes("column-layout step1")}>
            <img src="/src/assets/appt-upcoming.svg" alt="" className={classes("image_2")} />
            <h3 className={classes("content")}>
              <span>Super charged events</span>
            </h3>
            <h5 className={classes("content")}>
              <span>Use the automated scheduling feature to make calendars a blast to use</span>
            </h5>
            <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.next()} className={classes("button")}>
              <span>Next</span>
            </IgrButton>
          </IgrCarouselSlide>
          <IgrCarouselSlide className={classes("column-layout step1")}>
            <img src="/src/assets/logo2.svg" alt="" className={classes("image_2")} />
            <h3 className={classes("content")}>
              <span>Health at fingertips</span>
            </h3>
            <h5 className={classes("h5")}>
              <span>Use the automated scheduling feature to make calendars a blast to use</span>
            </h5>
            <div className={classes("row-layout group_2")}>
              <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.prev()} className={classes("button_1")}>
                <span>Back</span>
              </IgrButton>
              <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.next()} className={classes("button_1")}>
                <span>Next</span>
              </IgrButton>
            </div>
          </IgrCarouselSlide>
          <IgrCarouselSlide className={classes("column-layout step1")}>
            <img src="/src/assets/Scale_Color.svg" alt="" className={classes("image_2")} />
            <h3 className={classes("content")}>
              <span>Track resource allocation</span>
            </h3>
            <h5 className={classes("h5")}>
              <span>Use the automated scheduling feature to make calendars a blast to use</span>
            </h5>
            <div className={classes("row-layout group_3")}>
              <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.prev()} className={classes("button_1")}>
                <span>Back</span>
              </IgrButton>
              <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.next()} className={classes("button_1")}>
                <span>Next</span>
              </IgrButton>
            </div>
          </IgrCarouselSlide>
          <IgrCarouselSlide className={classes("column-layout step1")}>
            <img src="/src/assets/meds-expired.svg" alt="" className={classes("image_2")} />
            <h3 className={classes("content")}>
              <span>Medication reminders</span>
            </h3>
            <h5 className={classes("h5")}>
              <span>Use the automated scheduling feature to make calendars a blast to use</span>
            </h5>
            <div onClick={() => contentCarousel?.current?.prev()} className={classes("row-layout group_3")}>
              <IgrButton variant="outlined" type="button" onClick={() => contentCarousel?.current?.prev()} className={classes("button_1")}>
                <span>Back</span>
              </IgrButton>
            </div>
          </IgrCarouselSlide>
        </IgrCarousel>
      </div>
    </>
  );
}
