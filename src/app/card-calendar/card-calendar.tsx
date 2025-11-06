import { IgrAvatar, IgrButton, IgrCalendar, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrIconButton } from '@infragistics/igniteui-react';
import styles from './card-calendar.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function CardCalendar() {
  const classes = createClassTransformer(styles);
  const date = new Date('2022-01-13T00:00');

  return (
    <>
      <div className={classes("column-layout card-calendar-container")}>
        <div className={classes("row-layout group")}>
          <IgrCard elevated={true} className={classes("card-4")}>
            <IgrCardMedia className={classes("media-content")}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" alt="" className={classes("image")} />
            </IgrCardMedia>
            <IgrCardHeader>
              <h3 slot="title">
                <span>Rozes</span>
              </h3>
              <h5 slot="subtitle">
                <span>Default style card</span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")}>
              <div className={classes("column-layout group_1")}>
                <p className={classes("typography__body-1 text-3")}>
                  <span>Custom content inside a column layout with W 100%. Text component added has size unset.</span>
                </p>
              </div>
            </IgrCardContent>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Button</span>
                </IgrButton>
              </div>
              <div slot="end">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card")}>
            <IgrCardHeader>
              <h3 slot="title">
                <span>Rozes</span>
              </h3>
              <h5 slot="subtitle">
                <span>Social style card; Img H unset</span>
              </h5>
            </IgrCardHeader>
            <IgrCardMedia className={classes("media-content_1")}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" alt="" className={classes("image")} />
            </IgrCardMedia>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
              </div>
              <div style={{ display: 'contents' }} slot="start">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
              </div>
              <div style={{ display: 'contents' }} slot="start">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
              <div slot="end">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Play</span>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-1")}>
            <IgrCardMedia className={classes("media-content")}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" alt="" className={classes("image")} />
            </IgrCardMedia>
            <IgrCardHeader>
              <h3 slot="title">
                <span>Rozes</span>
              </h3>
              <h5 slot="subtitle">
                <span>Default card + H unset</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Button</span>
                </IgrButton>
              </div>
              <div slot="end">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-2")}>
            <div className={classes("group_2")}>
              <IgrCardHeader>
                <h3 slot="title">
                  <span>Rozes</span>
                </h3>
                <h5 slot="subtitle">
                  <span>Media style card + img W set</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <p className={classes("typography__body-2 text-3")}>
                  <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
                </p>
              </IgrCardContent>
            </div>
            <IgrCardMedia className={classes("media-content_2")}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" alt="" className={classes("image")} />
            </IgrCardMedia>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-11")}>
            <IgrCardHeader>
              <div slot="thumbnail">
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar avatar_2")}></IgrAvatar>
              </div>
              <h3 slot="title">
                <span>Rozes</span>
              </h3>
              <h5 slot="subtitle">
                <span>Large avatar</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
              </div>
              <div style={{ display: 'contents' }} slot="start">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
              </div>
              <div slot="end">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Play</span>
                </IgrButton>
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Button</span>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-3")}>
            <div className={classes("group_3")}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail"></div>
                  <h3 slot="title">
                    <span>Rozes</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>Medium avatar+ actions col</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout group_4")}>
                  <p className={classes("typography__body-2 text-3")}>
                    <span>Custom content inside a column layout (W: unset) and text component added size: unset.</span>
                  </p>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")}>Divider not yet available in React</span>
            <IgrCardActions className={classes("actions-content")}>
              <div slot="end" className={classes("igx-card-actions--justify content")}>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>favorite</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card")}>
            <IgrCardHeader>
              <div slot="thumbnail">
                <IgrAvatar shape="circle" className={classes("avatar_1")}>
                  <span className={classes("material-icons")}>
                    <span>people</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title">
                <span>Sm avatar + md card</span>
              </h3>
              <h5 slot="subtitle">
                <span></span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")}>
              <p className={classes("typography__body-2 text-3")}>
                <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
              </p>
            </IgrCardContent>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Button</span>
                </IgrButton>
              </div>
              <div slot="end">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>adb</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated={true} className={classes("card-5")}>
            <IgrCardHeader>
              <div slot="thumbnail">
                <IgrAvatar shape="circle">
                  <span className={classes("material-icons")}>
                    <span>people</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title">
                <span>Large card</span>
              </h3>
              <h5 slot="subtitle">
                <span></span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")}>
              <p className={classes("typography__body-2 text-3")}>
                <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
              </p>
            </IgrCardContent>
            <IgrCardActions className={classes("actions-content")}>
              <div style={{ display: 'contents' }} slot="start">
                <IgrButton variant="flat" type="button" className={classes("button-4")}>
                  <span>Button</span>
                </IgrButton>
              </div>
              <div slot="end">
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>adb</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>bookmark</span>
                  </span>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button-12")}>
                  <span className={classes("material-icons")}>
                    <span>share</span>
                  </span>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
        </div>
        <div className={classes("row-layout group_5")}>
          <IgrCalendar weekStart="tuesday" hideHeader={true} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          <IgrCalendar hideHeader={false} headerOrientation="horizontal" value={date} className={classes("calendar")}></IgrCalendar>
          <IgrCalendar showWeekNumbers={true} visibleMonths={2} hideHeader={false} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
        </div>
      </div>
    </>
  );
}
