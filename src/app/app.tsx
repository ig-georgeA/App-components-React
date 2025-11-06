import { IgrAvatar, IgrIconButton, IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout main-navigation-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{ display: 'contents' }} slot="start" onClick={() => navDrawer?.current?.toggle()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>menu</span>
              </span>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")}>
            <h6 className={classes("h6")}>
              <span>App builder demos</span>
            </h6>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")}>
                <span>search</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>favorite</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>more_vert</span>
              </span>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open={true} position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div className={classes("row-layout group_2")}>
              <IgrAvatar src="/src/assets/Avatar2.png" shape="rounded" className={classes("avatar")}></IgrAvatar>
              <div className={classes("column-layout group_3")}>
                <p className={classes("typography__subtitle-1 text")}>
                  <span>Welcome, Guest</span>
                </p>
                <a target="_blank" className={classes("typography__body-1 hyperlink")}>
                  <span>Edit profile</span>
                </a>
              </div>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Grids</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/grid/abc`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>table_chart</span>
                  </span>
                </span>
                <div slot="content">Grid w/ remote paging</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/grid-with-templates`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>account_circle</span>
                  </span>
                </span>
                <div slot="content">Grid with templates</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/tree-grid`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>park</span>
                  </span>
                </span>
                <div slot="content">Tree grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/hierarchical-grid`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>account_tree</span>
                  </span>
                </span>
                <div slot="content">Hierarchical grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/master-detail-grid`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>unfold_more</span>
                  </span>
                </span>
                <div slot="content">Master-detail grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/pivot-grid`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>pivot_table_chart</span>
                  </span>
                </span>
                <div slot="content">Pivot grid</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Inputs</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/inputs`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>keyboard</span>
                  </span>
                </span>
                <div slot="content">Inputs + buttons</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/pickers-combo`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>arrow_drop_down_circle</span>
                  </span>
                </span>
                <div slot="content">Pickers</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Content</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/card-calendar`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>calendar_today</span>
                  </span>
                </span>
                <div slot="content">Card-Calendar</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/lists-data`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>list</span>
                  </span>
                </span>
                <div slot="content">List + data</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/reveal`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>dashboard</span>
                  </span>
                </span>
                <div slot="content">Reveal</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/category-charts`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>insert_chart_outlined</span>
                  </span>
                </span>
                <div slot="content">Category charts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/financial-chart`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>waterfall_chart</span>
                  </span>
                </span>
                <div slot="content">Financial chart</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/apex-charts`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>bubble_chart</span>
                  </span>
                </span>
                <div slot="content">Apex charts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/type-scale`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>text_fields</span>
                  </span>
                </span>
                <div slot="content">Type scale + text</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Layouts</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/expansion-panels-tree`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>open_in_full</span>
                  </span>
                </span>
                <div slot="content">Expansion panels</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/stepper`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>arrow_forward</span>
                  </span>
                </span>
                <div slot="content">Stepper</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/carousel`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>collections</span>
                  </span>
                </span>
                <div slot="content">Carousel</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/tab-layout`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>tab</span>
                  </span>
                </span>
                <div slot="content">Tab layout</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Notifications</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/dialogs-and-dropdowns`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>open_in_new</span>
                  </span>
                </span>
                <div slot="content">Dialogs and overlays</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Misc</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/image`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>account_circle</span>
                  </span>
                </span>
                <div slot="content">Images</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/position`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>my_location</span>
                  </span>
                </span>
                <div slot="content">Position</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/layouts`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>view_quilt</span>
                  </span>
                </span>
                <div slot="content">Flex layouts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/css-grid-layout`)}>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>grid_view</span>
                  </span>
                </span>
                <div slot="content">CSS grid</div>
              </IgrNavDrawerItem>
            </div>
            <div className={classes("column-layout group_4")}>
              <p className={classes("typography__body-2 text_1")}>
                <span>Last updated Sep 04, 2025</span>
              </p>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
