import { IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrIconButton } from '@infragistics/igniteui-react';
import styles from './image.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Image() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout image-container")}>
        <div className={classes("row-layout group")}>
          <h1 className={classes("h1")}>
            <span>Building faster paths to amazing experiences</span>
          </h1>
          <img src="https://static.infragistics.com/marketing/IDS/infragistics/hero.png?v=20191212192700" alt="" className={classes("image")} />
        </div>
        <div className={classes("column-layout group_1")}>
          <img src="https://static.infragistics.com/marketing/IDS/infragistics/hero.png?v=20191212192700" alt="" className={classes("image_1")} />
          <img src="/src/assets/Avatar1.png" alt="" className={classes("image_2")} />
          <IgrCard className={classes("card")}>
            <IgrCardHeader>
              <h3 slot="title">
                <span>Title goes here...</span>
              </h3>
              <h5 slot="subtitle">
                <span>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")}>
              <img src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" alt="" className={classes("image_3")} />
            </IgrCardContent>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrButton variant="flat" type="button" className={classes("button")}>
                  <span>Button</span>
                </IgrButton>
              </div>
              <div slot="end">
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <img alt="" className={classes("image_4")} />
        </div>
      </div>
    </>
  );
}
