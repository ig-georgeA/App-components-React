import { IgrBanner, IgrButton, IgrDialog, IgrDropdown, IgrDropdownHeader, IgrDropdownItem, IgrIconButton, IgrInput, IgrSnackbar } from '@infragistics/igniteui-react';
import { useRef, useState } from 'react';
import styles from './dialogs-and-dropdowns.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function DialogsAndDropdowns() {
  const classes = createClassTransformer(styles);
  const alert = useRef<IgrDialog>(null);
  const confirm = useRef<IgrDialog>(null);
  const customContentDialog = useRef<IgrDialog>(null);
  const snackbar = useRef<IgrSnackbar>(null);
  const bannerInside = useRef<IgrBanner>(null);
  const bannerOutside = useRef<IgrBanner>(null);
  const dropdown = useRef<IgrDropdown>(null);
  const bannerInline = useRef<IgrBanner>(null);
  const dropdown1 = useRef<IgrDropdown>(null);
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();

  return (
    <>
      <div className={classes("column-layout dialogs-and-dropdowns-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrButton type="button" onClick={() => alert?.current?.toggle()} className={classes("button")}>
              <span className={classes("material-icons")}>
                <span>open_in_new</span>
              </span>
              <span>Open alert dialog</span>
            </IgrButton>
            <IgrButton type="button" onClick={() => confirm?.current?.toggle()} className={classes("button")}>
              <span className={classes("material-icons")}>
                <span>open_in_new</span>
              </span>
              <span>Open confirmation dialog</span>
            </IgrButton>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrButton type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button_1")}>
              <span className={classes("material-icons")}>
                <span>open_in_new</span>
              </span>
              <span>Open custom dialog</span>
            </IgrButton>
          </div>
          <div className={classes("column-layout group_3")}>
            <h3 className={classes("h3")}>
              <span>Demo zone</span>
            </h3>
          </div>
        </div>
        <div className={classes("row-layout group")}>
          <div className={classes("row-layout group_4")}>
            <IgrButton type="button" onClick={() => snackbar?.current?.toggle()} className={classes("button_1")}>
              <span className={classes("material-icons")}>
                <span>open_in_new</span>
              </span>
              <span>Open snackbar</span>
            </IgrButton>
          </div>
          <div className={classes("column-layout group_5")}>
            <IgrBanner ref={bannerInside} className={classes("banner-inside")}>
              <p>
                <span>This is important! Can you make some room?</span>
              </p>
              <div slot="footer">
                <IgrButton variant="flat" type="button" onClick={() => bannerInside?.current?.toggle()} className={classes("button")}>
                  <span>Dismiss</span>
                </IgrButton>
              </div>
              <span className={classes("material-icons icon")}>
                <span>waving_hand</span>
              </span>
            </IgrBanner>
            <div className={classes("column-layout group_6")}>
              <IgrButton type="button" onClick={() => bannerInside?.current?.toggle()} className={classes("button")}>
                <span className={classes("material-icons")}>
                  <span>open_in_new</span>
                </span>
                <span>Open banner (inside)</span>
              </IgrButton>
              <IgrButton type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")}>
                <span className={classes("material-icons")}>
                  <span>open_in_new</span>
                </span>
                <span>Open banner (outside)</span>
              </IgrButton>
            </div>
          </div>
          <div className={classes("column-layout group_7")}>
            <IgrButton type="button" onClick={(e) => dropdown?.current?.toggle(e.currentTarget)} className={classes("button")}>
              <span>More options</span>
              <span className={classes("material-icons")}>
                <span>expand_more</span>
              </span>
            </IgrButton>
            <IgrButton type="button" onClick={(e) => dropdown?.current?.toggle(e.currentTarget)} className={classes("button")}>
              <span>More options</span>
              <span className={classes("material-icons")}>
                <span>expand_more</span>
              </span>
            </IgrButton>
            <IgrDropdown ref={dropdown} className={classes("dropdown dropdown_2")}>
              <IgrDropdownHeader>
                <span>Header 1</span>
              </IgrDropdownHeader>
              <IgrDropdownItem>
                <span slot="prefix">
                  <span className={classes("material-icons icon_1")}>
                    <span>content_cut</span>
                  </span>
                </span>
                <span slot="suffix">
                  <p className={classes("typography__caption text")}>
                    <span>Cmd + X</span>
                  </p>
                </span>
                <span>Cut</span>
              </IgrDropdownItem>
              <IgrDropdownItem>
                <span slot="prefix">
                  <span className={classes("material-icons icon_1")}>
                    <span>content_copy</span>
                  </span>
                </span>
                <span slot="suffix">
                  <p className={classes("typography__caption text")}>
                    <span>Cmd + C</span>
                  </p>
                </span>
                <span>Copy </span>
              </IgrDropdownItem>
              <IgrDropdownItem>
                <span slot="prefix">
                  <span className={classes("material-icons icon_1")}>
                    <span>content_paste</span>
                  </span>
                </span>
                <span slot="suffix">
                  <p className={classes("typography__caption text")}>
                    <span>Cmd + V</span>
                  </p>
                </span>
                <span>Paste</span>
              </IgrDropdownItem>
              <IgrDropdownHeader>
                <span>Header 2</span>
              </IgrDropdownHeader>
              <IgrDropdownItem>
                <span slot="prefix">
                  <span className={classes("material-icons icon_1")}>
                    <span>account_circle</span>
                  </span>
                </span>
                <span>Option 2.1</span>
              </IgrDropdownItem>
            </IgrDropdown>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick={true} ref={alert}>
          <p>In this accelerator, we'll show you how to use various controls for alerts, pop-up messages, data entry screens, and more in App Builder.</p>
          <div slot="footer">
            <IgrButton variant="flat" onClick={() => alert?.current?.toggle()}>
              <span>Cancel</span>
            </IgrButton>
            <IgrButton variant="flat" onClick={() => alert?.current?.toggle()}>
              <span>OK</span>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrDialog closeOnOutsideClick={true} ref={confirm}>
          <h5 slot="title">
            <span>Show custom dialog?</span>
          </h5>
          <p>In this accelerator, we'll show you how to use various controls for alerts, pop-up messages, data entry screens, and more in App Builder.</p>
          <div slot="footer">
            <IgrButton variant="flat" onClick={() => confirm?.current?.toggle()}>
              <span>Cancel</span>
            </IgrButton>
            <IgrButton variant="flat" onClick={() => customContentDialog?.current?.toggle()}>
              <span>Show me</span>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrDialog closeOnOutsideClick={true} hideDefaultAction={true} ref={customContentDialog}>
          <div className={classes("row-layout custom-header")}>
            <h6 className={classes("content")}>
              <span>My custom title</span>
            </h6>
            <div style={{ display: 'contents' }} onClick={() => customContentDialog?.current?.toggle()}>
              <IgrIconButton variant="flat" className={classes("icon-button")}>
                <span className={classes("material-icons")}>
                  <span>close</span>
                </span>
              </IgrIconButton>
            </div>
          </div>
          <div className={classes("column-layout custom-content")}>
            <IgrBanner ref={bannerInline} className={classes("banner-inline")}>
              <p>
                <span>Email is required!</span>
              </p>
              <div slot="footer">
                <IgrButton variant="flat" type="button" onClick={() => bannerInline?.current?.toggle()} className={classes("button")}>
                  <span>Dismiss</span>
                </IgrButton>
              </div>
              <span className={classes("material-icons icon_2")}>
                <span>report</span>
              </span>
            </IgrBanner>
            <img src="/src/assets/SketchParser.png" alt="" className={classes("image")} />
            <p className={classes("typography__body-1 content")}>
              <span>Use the Ignite UI Dialog Window component to display messages or present forms for users to fill out. The component opens a dialog window centered on top of app content. You can also provide a standard alert message that users can cancel.</span>
            </p>
            <div className={classes("column-layout form-fields")}>
              <IgrInput value={value ?? ""} label="Email" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("input")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput value={value1 ?? ""} label="Name" outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("input")}></IgrInput>
              <div className={classes("row-layout custom-actions")}>
                <IgrButton variant="flat" type="button" onClick={(e) => dropdown1?.current?.toggle(e.currentTarget)} className={classes("button_2")}>
                  <span>More options</span>
                  <span className={classes("material-icons")}>
                    <span>keyboard_arrow_down</span>
                  </span>
                </IgrButton>
                <div className={classes("row-layout form-fields")}>
                  <IgrButton variant="outlined" type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button_2")}>
                    <span>Cancel</span>
                  </IgrButton>
                  <IgrButton type="button" onClick={() => customContentDialog?.current?.toggle()} className={classes("button_2")}>
                    <span>Custom save</span>
                  </IgrButton>
                </div>
                <IgrDropdown ref={dropdown1} className={classes("dropdown_1 dropdown_1_1")}>
                  <IgrDropdownItem>
                    <span>Option</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem>
                    <span>Option</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem>
                    <span>Option</span>
                  </IgrDropdownItem>
                  <IgrDropdownItem>
                    <span>Option</span>
                  </IgrDropdownItem>
                </IgrDropdown>
              </div>
            </div>
          </div>
        </IgrDialog>
        <IgrSnackbar actionText="OK. Got it!" keepOpen={true} onAction={() => snackbar?.current?.toggle()} ref={snackbar} className={classes("snackbar")}>
          <span>No rush. I'll stay open till you close.</span>
        </IgrSnackbar>
        <IgrBanner ref={bannerOutside} className={classes("banner-inline")}>
          <p>
            <span>This is important! Can you make some room?</span>
          </p>
          <div slot="footer">
            <IgrButton variant="flat" type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")}>
              <span>More details</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" onClick={() => bannerOutside?.current?.toggle()} className={classes("button")}>
              <span>Dismiss</span>
            </IgrButton>
          </div>
          <span className={classes("material-icons icon_2")}>
            <span>error</span>
          </span>
        </IgrBanner>
        <IgrSnackbar className={classes("snackbar")}>
          <span>Webinar demo</span>
        </IgrSnackbar>
      </div>
    </>
  );
}
