import { IgrAvatar, IgrBadge, IgrButton, IgrButtonGroup, IgrCheckbox, IgrChip, IgrDatePicker, IgrDateTimeInput, IgrIconButton, IgrInput, IgrRadio, IgrRadioGroup, IgrRangeSlider, IgrRating, IgrSlider, IgrSwitch, IgrTextarea, IgrToggleButton } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './inputs.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Inputs() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const date = new Date('2021-03-01T00:00');
  const date1 = new Date('2021-03-27T00:00');
  const [radioGroupVar, setRadioGroupVar] = useState<number>(1);
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const [value3, setValue3] = useState<string | undefined>();
  const [value4, setValue4] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value5, setValue5] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value6, setValue6] = useState<number>(50);
  const [value7, setValue7] = useState<number>(25);
  const [value8, setValue8] = useState<number>(50);
  const [value9, setValue9] = useState<string | undefined>();
  const [value10, setValue10] = useState<string>('some content');
  const [value11, setValue11] = useState<string | undefined>();
  const [value12, setValue12] = useState<string | undefined>();
  const [value13, setValue13] = useState<string | undefined>();
  const [value14, setValue14] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [value15, setValue15] = useState<Date | undefined>(new Date('2021-03-16T00:00'));
  const [checked, setChecked] = useState<boolean>(true);
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(true);
  const [checked3, setChecked3] = useState<boolean>(true);
  const [checked4, setChecked4] = useState<boolean>(true);
  const [value16, setValue16] = useState<string>('some content');

  return (
    <>
      <div className={classes("row-layout inputs-container")}>
        <div className={classes("column-layout column-layout_1")}>
          <div className={classes("column-layout group")}>
            <IgrInput type="email" value={value ?? ""} label="Email address" outlined={false} onChange={(e) => setValue(e.detail)} className={classes("input")}>
              <span slot="prefix">
                <span className={classes("material-icons icon")}>
                  <span>mail</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon")}>
                  <span>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput value={value1 ?? ""} label="I'm disabled" disabled={true} outlined={false} onChange={(e) => setValue1(e.detail)} className={classes("input")}></IgrInput>
            <IgrInput value={value2 ?? ""} label="Label +prefix+box+help" outlined={false} onChange={(e) => setValue2(e.detail)} className={classes("input")}>
              <span slot="prefix">
                <span className={classes("material-icons icon")}>
                  <span>person</span>
                </span>
              </span>
              <span slot="helper-text">sample hint text</span>
            </IgrInput>
            <IgrInput value={value3 ?? ""} label="Label" placeholder="Label/Placeholder" outlined={false} onChange={(e) => setValue3(e.detail)} className={classes("input")}></IgrInput>
          </div>
          <IgrDateTimeInput value={value4} label="Date-box-large" outlined={false} inputFormat="MM/dd/yyyy" displayFormat="longDate" spinLoop={true} min={date} max={date1} onChange={(e) => setValue4(e.detail ?? undefined)} className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput value={value5} label="Date-box style - input format 2+large" outlined={false} inputFormat="dd/MM/yyyy" displayFormat="longDate" spinLoop={true} min={date} max={date1} onChange={(e) => setValue5(e.detail ?? undefined)} className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" required={true} outlined={false} className={classes("textarea")}></IgrTextarea>
          <div className={classes("group_1")}>
            <IgrDatePicker label="Date" outlined={false}></IgrDatePicker>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrChip className={classes("chip")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>place</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>remove_circle</span>
                </span>
              </span>
              <span>Large</span>
            </IgrChip>
            <IgrChip className={classes("chip_1")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>place</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>remove_circle</span>
                </span>
              </span>
              <span>Medium</span>
            </IgrChip>
            <IgrChip className={classes("chip_2")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>place</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>remove_circle</span>
                </span>
              </span>
              <span>Small</span>
            </IgrChip>
            <IgrChip className={classes("chip_3")}>
              <span slot="prefix">
                <IgrAvatar shape="circle" className={classes("avatar")}>
                  <span className={classes("material-icons icon_2")}>
                    <span>people</span>
                  </span>
                </IgrAvatar>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>cancel</span>
                </span>
              </span>
              <span>With avatar</span>
            </IgrChip>
            <IgrChip disabled={true} className={classes("chip_3")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>account_balance</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>clear</span>
                </span>
              </span>
              <span>Disabled</span>
            </IgrChip>
          </div>
          <div className={classes("row-layout group_3")}>
            <IgrChip className={classes("chip")}>
              <span slot="prefix">
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar_3")}></IgrAvatar>
              </span>
              <span>Country</span>
            </IgrChip>
          </div>
          <IgrSlider value={value6} disabled={true} min={0} max={100} step={10} primaryTicks={3} secondaryTicks={2} hideSecondaryLabels={false} discreteTrack={true} onChange={(e) => setValue6(e.detail)} className={classes("slider")}></IgrSlider>
          <div className={classes("column-layout group_4")}>
            <IgrSlider value={value7} min={0} max={100} primaryTicks={3} secondaryTicks={2} hideSecondaryLabels={false} onChange={(e) => setValue7(e.detail)} className={classes("slider")}></IgrSlider>
            <IgrRangeSlider lower={20} upper={80} min={0} max={100} step={10} primaryTicks={3} secondaryTicks={2} discreteTrack={true} className={classes("range-slider")}></IgrRangeSlider>
            <IgrRangeSlider lower={20} upper={80} min={0} max={100} step={10} primaryTicks={6} discreteTrack={true} className={classes("range-slider")}></IgrRangeSlider>
            <IgrSlider value={value8} min={0} max={100} step={10} primaryTicks={3} secondaryTicks={2} tickOrientation="mirror" discreteTrack={true} onChange={(e) => setValue8(e.detail)} className={classes("slider_1")}></IgrSlider>
          </div>
          <div className={classes("row-layout group_5")}>
            <IgrAvatar initials="GM" shape="circle" className={classes("avatar_1 avatar_1_1")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1 avatar_1_2")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar5.png" className={classes("avatar_2 avatar_2_1")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar3.png" shape="rounded" className={classes("avatar_4")}></IgrAvatar>
            <IgrAvatar shape="circle">
              <span className={classes("material-icons")}>
                <span>people</span>
              </span>
            </IgrAvatar>
          </div>
          <div className={classes("row-layout group_6")}>
            <span className={classes("material-icons icon_1")}>
              <span>person</span>
            </span>
            <span className={classes("material-icons icon_3")}>
              <span>person</span>
            </span>
            <span className={classes("material-icons icon_4")}>
              <span>person</span>
            </span>
            <span className={classes("material-icons icon_5")}>
              <span>person</span>
            </span>
            <IgrRating className={classes("rating")}></IgrRating>
          </div>
        </div>
        <div className={classes("column-layout group_7")}>
          <IgrInput value={value9 ?? ""} label="Label + prefix + suffix + border+small" outlined={true} onChange={(e) => setValue9(e.detail)} className={classes("input_1")}>
            <span slot="prefix">
              <p className={classes("typography__body-2 text")}>
                <span>https://</span>
              </p>
            </span>
            <span slot="suffix">
              <p className={classes("typography__body-2 text")}>
                <span>.com</span>
              </p>
            </span>
          </IgrInput>
          <IgrInput value={value10} label="Label + required +small" required={true} outlined={true} onChange={(e) => setValue10(e.detail)} className={classes("input_1")}>
            <p slot="value-missing">This field is required</p>
          </IgrInput>
          <IgrInput value={value11 ?? ""} label="I'm disabled + small" disabled={true} outlined={true} onChange={(e) => setValue11(e.detail)} className={classes("input_1")}></IgrInput>
          <IgrInput value={value12 ?? ""} label="Label" required={true} outlined={true} onChange={(e) => setValue12(e.detail)} className={classes("input")}>
            <p slot="value-missing">This field is required</p>
          </IgrInput>
          <IgrInput value={value13 ?? ""} label="Prefix, helptext and border" outlined={true} onChange={(e) => setValue13(e.detail)} className={classes("input")}>
            <span slot="prefix">
              <span className={classes("material-icons icon")}>
                <span>person</span>
              </span>
            </span>
            <span slot="helper-text">sample hint text</span>
          </IgrInput>
          <div className={classes("group_1")}>
            <IgrDatePicker label="Date (dropdown)" outlined={true}></IgrDatePicker>
          </div>
          <IgrDateTimeInput value={value14} label="Date" outlined={true} inputFormat="MM/dd/yyyy" displayFormat="mediumDate" spinLoop={true} min={date} max={date1} onChange={(e) => setValue14(e.detail ?? undefined)} className={classes("date-time-input_1")}></IgrDateTimeInput>
          <IgrDateTimeInput value={value15} label="Date" outlined={true} inputFormat="dd/MM/yyyy" displayFormat="shortTime" spinLoop={true} min={date} max={date1} onChange={(e) => setValue15(e.detail ?? undefined)} className={classes("date-time-input_1")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" required={true} outlined={true} className={classes("textarea")}></IgrTextarea>
          <div className={classes("row-layout group_8")}>
            <IgrButton type="button" onClick={() => navigate(`/lists-data`)} className={classes("button")}>
              <span className={classes("material-icons")}>
                <span>star</span>
              </span>
              <span>Lists</span>
            </IgrButton>
            <IgrButton type="button" onClick={() => navigate(`/lists-data`)} className={classes("button_1")}>
              <span className={classes("material-icons")}>
                <span>star</span>
              </span>
              <span>Lists</span>
            </IgrButton>
            <IgrButton variant="outlined" type="button" className={classes("button_2")}>
              <span className={classes("material-icons")}>
                <span>add</span>
              </span>
              <span>Button</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button_2")}>
              <span>Button</span>
              <span className={classes("material-icons")}>
                <span>add</span>
              </span>
            </IgrButton>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>email</span>
              </span>
            </IgrIconButton>
            <IgrIconButton variant="outlined" className={classes("icon-button")}>
              <span className={classes("material-icons")}>
                <span>email</span>
              </span>
            </IgrIconButton>
            <IgrIconButton>
              <span className={classes("material-icons")}>
                <span>send</span>
              </span>
            </IgrIconButton>
            <IgrButton variant="outlined" disabled={true} type="button" className={classes("button_2")}>
              <span className={classes("material-icons")}>
                <span>add</span>
              </span>
              <span>Button</span>
            </IgrButton>
            <IgrButton variant="fab" className={classes("user-input")}>
              <span className={classes("material-icons")}>
                <span>add</span>
              </span>
              <span>Fab</span>
            </IgrButton>
            <IgrButton variant="fab" className={classes("user-input")}>
              <span className={classes("material-icons")}>
                <span>add</span>
              </span>
              <span>Fab</span>
            </IgrButton>
            <a href="https://www.youtube.com/playlist?list=PLZ4rRHIJepBuKeP2WqXZUtG8LAYmyHHsa" target="_blank" className={classes("typography__body-1 hyperlink")}>
              <span>YouTube playlist</span>
            </a>
            <div className={classes("row-layout group_9")}>
              <div className={classes("row-layout group_10")}>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")}>
                    <span>email</span>
                  </span>
                </IgrIconButton>
                <IgrBadge variant="info" className={classes("badge")}>
                  <span className={classes("material-icons")}>
                    <span>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <span className={classes("material-icons icon_3")}>
                  <span>notifications</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge_1")}>
                  <span className={classes("material-icons")}>
                    <span>emergency</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <span className={classes("material-icons icon_3")}>
                  <span>mail</span>
                </span>
                <IgrBadge variant="warning" className={classes("badge_1")}>
                  <span className={classes("material-icons")}>
                    <span>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_10")}>
                <span className={classes("material-icons icon_3")}>
                  <span>mail</span>
                </span>
                <IgrBadge variant="success" className={classes("badge_1")}>
                  <span>99</span>
                </IgrBadge>
              </div>
              <IgrBadge variant="success" className={classes("badge_2")}>
                <span>Accepted</span>
              </IgrBadge>
              <IgrBadge variant="danger" className={classes("badge_2")}>
                <span>Denied</span>
              </IgrBadge>
            </div>
          </div>
          <div className={classes("column-layout group_11")}>
            <div className={classes("row-layout group_12")}>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton>
                  <span className={classes("material-icons")}>
                    <span>format_align_left</span>
                  </span>
                </IgrToggleButton>
                <IgrToggleButton>
                  <span className={classes("material-icons")}>
                    <span>format_align_center</span>
                  </span>
                </IgrToggleButton>
                <IgrToggleButton>
                  <span className={classes("material-icons")}>
                    <span>format_align_right</span>
                  </span>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrSwitch checked={checked} onChange={(e) => setChecked(e.detail.checked)} className={classes("user-input_1")}>
                <span>Notify me</span>
              </IgrSwitch>
              <IgrSwitch checked={checked1} onChange={(e) => setChecked1(e.detail.checked)} className={classes("user-input_1")}></IgrSwitch>
            </div>
            <div className={classes("row-layout group_13")}>
              <IgrCheckbox checked={checked2} onChange={(e) => setChecked2(e.detail.checked)} className={classes("checkbox")}></IgrCheckbox>
              <IgrCheckbox labelPosition="after" checked={checked3} onChange={(e) => setChecked3(e.detail.checked)} className={classes("checkbox")}>
                <span>Does it work?</span>
              </IgrCheckbox>
              <IgrCheckbox labelPosition="before" checked={checked4} onChange={(e) => setChecked4(e.detail.checked)} className={classes("user-input")}>
                <span>How about now?</span>
              </IgrCheckbox>
            </div>
          </div>
          <div className={classes("column-layout group_14")}>
            <div className={classes("row-layout group_15")}>
              <div className={classes("row-layout group_15")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>Initial value:</span>
                </p>
                <p className={classes("typography__body-1 text")}>
                  <span>1</span>
                </p>
              </div>
              <div className={classes("row-layout group_15")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>Current value</span>
                </p>
                <p className={classes("typography__body-1 text")}>
                  <span>{radioGroupVar}</span>
                </p>
              </div>
            </div>
            <div className={classes("row-layout group_10")}>
              <IgrRadioGroup value={radioGroupVar.toString()} onChange={(e) => setRadioGroupVar(parseFloat(e.detail.value ?? ''))} className={classes("radio-group")}>
                <IgrRadio value="1" key="4abd3a0f-1cda-45ab-84a7-fb6941d31698">
                  <span>Label</span>
                </IgrRadio>
                <IgrRadio value="2" key="9c89de88-362b-4648-928c-620cef4f4ee7">
                  <span>Label</span>
                </IgrRadio>
                <IgrRadio value="3" key="881ef14f-202d-4b7f-892d-19cf424dcb37">
                  <span>Label</span>
                </IgrRadio>
              </IgrRadioGroup>
              <IgrRadioGroup value={radioGroupVar.toString()} alignment="horizontal" onChange={(e) => setRadioGroupVar(parseFloat(e.detail.value ?? ''))} className={classes("user-input_1")}>
                <IgrRadio value="1" key="38f9d54f-83f6-44d1-9840-8e5973cbfe57">
                  <span>Label</span>
                </IgrRadio>
                <IgrRadio value="2" key="179bc7c6-fc59-4d79-9162-e16839152352">
                  <span>Label</span>
                </IgrRadio>
                <IgrRadio value="3" key="e361f395-6638-4f78-ab91-aacd50e87034">
                  <span>Label</span>
                </IgrRadio>
              </IgrRadioGroup>
            </div>
          </div>
          <div className={classes("row-layout group_16")}>
            <IgrInput value={value16} label="Group name" required={true} outlined={true} onChange={(e) => setValue16(e.detail)} className={classes("input_2")}>
              <p slot="value-missing">This field is required</p>
            </IgrInput>
            <IgrButton variant="outlined" type="button" className={classes("button_3")}>
              <span className={classes("material-icons")}>
                <span>check</span>
              </span>
              <span>Submit</span>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
