import { IgrCombo, IgrDatePicker, IgrSelect, IgrSelectItem } from 'igniteui-react';
import { useState } from 'react';
import { useGetCustomerDtoList } from '../hooks/northwind-apiig-hooks';
import { useGetEmployees } from '../hooks/northwind-hooks';
import styles from './pickers-combo.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function PickersCombo() {
  const classes = createClassTransformer(styles);
  const [value, setValue] = useState<string>('2');
  const [value1, setValue1] = useState<string>('3');
  const { northwindEmployees } = useGetEmployees();
  const { northwindAPIIGCustomerDto } = useGetCustomerDtoList();

  return (
    <>
      <div className={classes("row-layout pickers-combo-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrSelect outlined={true} label="Large" placeholder="Select a value" value={value} onChange={(e) => setValue(e.detail.value)} className={classes("select")}>
              <span slot="prefix">
                <span className={classes("material-icons icon")}>
                  <span>person</span>
                </span>
              </span>
              {northwindEmployees?.map((item) => (
                <IgrSelectItem value={item.employeeID.toString()} key={item.employeeID.toString()}>
                  <span>{item.lastName}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined={false} label="Select (Large)" className={classes("select")}>
              <IgrSelectItem value="Option" key="e1baea46-59f2-440c-b5bc-7ba375520837">
                <span>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined={true} label="Label/Placeholder" placeholder="Select (Medium)" value={value1} onChange={(e) => setValue1(e.detail.value)} className={classes("user-input")}>
              <IgrSelectItem value="1" key="79a3374c-d735-4022-a2c0-798cd1f61305">
                <span>Android</span>
              </IgrSelectItem>
              <IgrSelectItem value="2" key="9e9783e6-9eba-4f2a-92f0-08733d1fe802">
                <span>iOS</span>
              </IgrSelectItem>
              <IgrSelectItem value="3" key="1d7cd7af-a144-4edd-a037-811b0e8e7204">
                <span>Web</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined={true} label="Options" placeholder="Select a value" className={classes("user-input")}>
              <span slot="suffix">
                <span className={classes("material-icons icon_1")}>
                  <span>date_range</span>
                </span>
              </span>
              <IgrSelectItem value="Option" key="01aeb661-4a42-41be-b289-34c2fbe9ffe2">
                <span>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="7ab5191c-5e92-4c52-8680-9db861ec6bb4">
                <span>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="0ff6dd11-3995-4aca-a3a8-219a535d9fc0">
                <span>Option</span>
              </IgrSelectItem>
              <span slot="helper-text">Show help text here</span>
            </IgrSelect>
            <IgrSelect outlined={false} label="I have a label" disabled={true} className={classes("user-input")}>
              <span slot="helper-text">disabled</span>
            </IgrSelect>
          </div>
          <div className={classes("column-layout group_1")}>
            <IgrCombo outlined={true} data={northwindAPIIGCustomerDto} label="Small" placeholder="no label + placeholder + multi_select" displayKey="customerId" className={classes("combo")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>person</span>
                </span>
              </span>
              <span slot="helper-text">sample hint text</span>
            </IgrCombo>
            <IgrCombo outlined={true} data={northwindAPIIGCustomerDto} label="Small" placeholder="disabled combo" disabled={true} displayKey="customerId" className={classes("combo")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>person</span>
                </span>
              </span>
              <span slot="suffix">
                <span className={classes("material-icons icon_2")}>
                  <span>warning</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={northwindEmployees} label="Names" placeholder="Box-style combo" valueKey="employeeID" displayKey="firstName" required={true} outlined={false} singleSelect={true} className={classes("user-input")}>
              <span slot="prefix">
                <span className={classes("material-icons icon_1")}>
                  <span>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={northwindEmployees} placeholder="Box-style combo + disabled" disabled={true} valueKey="employeeID" displayKey="firstName" required={true} outlined={false} className={classes("user-input")}></IgrCombo>
            <div className={classes("group_2")}>
              <IgrDatePicker label="Date (dialog)" required={true} outlined={false}></IgrDatePicker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
