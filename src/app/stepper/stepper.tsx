import { IgrButton, IgrInput, IgrStep, IgrStepper } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid } from '@infragistics/igniteui-react-grids';
import { useRef, useState } from 'react';
import { useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './stepper.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Stepper() {
  const classes = createClassTransformer(styles);
  const stepperHoriz = useRef<IgrStepper>(null);
  const stepperVert = useRef<IgrStepper>(null);
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const [value3, setValue3] = useState<string | undefined>();
  const [value4, setValue4] = useState<string | undefined>();
  const [value5, setValue5] = useState<string | undefined>();
  const { northwindEmployees } = useGetEmployees();

  return (
    <>
      <div className={classes("row-layout stepper-container")}>
        <div className={classes("column-layout group")}>
          <IgrStepper titlePosition="top" ref={stepperHoriz} className={classes("stepper-horiz")}>
            <IgrStep invalid={true}>
              <div className={classes("column-layout step-content")}>
                <div className={classes("column-layout group_1")}>
                  <div className={classes("row-layout group_1")}>
                    <IgrInput value={value ?? ""} label="Label" outlined={true} onChange={(e) => setValue(e.detail)} className={classes("input")}>
                      <span slot="prefix">
                        <span className={classes("material-icons icon")}>
                          <span>person</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="password" value={value1 ?? ""} label="Password" outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("input")}>
                      <span slot="prefix">
                        <span className={classes("material-icons icon")}>
                          <span>lock</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput value={value2 ?? ""} label="Label" outlined={true} onChange={(e) => setValue2(e.detail)} className={classes("input")}></IgrInput>
                  </div>
                  <IgrButton type="button" className={classes("button button_3")}>
                    <span>Some action</span>
                  </IgrButton>
                </div>
                <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
              <p slot="title">Address</p>
              <p slot="subtitle">(Required)</p>
            </IgrStep>
            <IgrStep optional={true}>
              <div className={classes("row-layout step-content_1")}>
                <p className={classes("typography__body-1 text")}>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                </p>
              </div>
              <p slot="title">Item</p>
              <p slot="subtitle">(optional)</p>
            </IgrStep>
            <IgrStep optional={true}>
              <div className={classes("row-layout step-content_1")}>
                <p className={classes("typography__body-1 text")}>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                </p>
              </div>
              <p slot="title">Wrap</p>
              <p slot="subtitle">(Optional)</p>
            </IgrStep>
          </IgrStepper>
          <div className={classes("row-layout group_2")}>
            <IgrButton variant="outlined" type="button" onClick={() => stepperHoriz?.current?.prev()} className={classes("button_1")}>
              <span className={classes("material-icons")}>
                <span>arrow_back</span>
              </span>
              <span>Prev</span>
            </IgrButton>
            <IgrButton variant="outlined" type="button" onClick={() => stepperHoriz?.current?.next()} className={classes("button_1")}>
              <span>Next</span>
              <span className={classes("material-icons")}>
                <span>arrow_forward</span>
              </span>
            </IgrButton>
          </div>
        </div>
        <IgrStepper orientation="vertical" titlePosition="end" ref={stepperVert} className={classes("stepper-vert")}>
          <IgrStep invalid={true}>
            <span slot="indicator" className={classes("material-icons")}>
              <span>location_on</span>
            </span>
            <div className={classes("column-layout step-content")}>
              <div className={classes("column-layout group_1")}>
                <div className={classes("row-layout group_1")}>
                  <IgrInput value={value3 ?? ""} label="Label" outlined={true} onChange={(e) => setValue3(e.detail)} className={classes("input")}>
                    <span slot="prefix">
                      <span className={classes("material-icons icon")}>
                        <span>person</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput type="password" value={value4 ?? ""} label="Password" outlined={true} onChange={(e) => setValue4(e.detail)} className={classes("input")}>
                    <span slot="prefix">
                      <span className={classes("material-icons icon")}>
                        <span>lock</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput value={value5 ?? ""} label="Label" outlined={true} onChange={(e) => setValue5(e.detail)} className={classes("input")}></IgrInput>
                </div>
              </div>
              <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid_1")}>
                <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
                <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
              </IgrGrid>
              <div className={classes("row-layout group_3")}>
                <IgrButton variant="outlined" type="button" onClick={() => stepperVert?.current?.next()} className={classes("button_2")}>
                  <span>NEXT</span>
                </IgrButton>
              </div>
            </div>
            <p slot="title">Address</p>
            <p slot="subtitle">complete in order</p>
          </IgrStep>
          <IgrStep invalid={true}>
            <span slot="indicator" className={classes("material-icons")}>
              <span>payment</span>
            </span>
            <div className={classes("column-layout step-content_2")}>
              <p className={classes("typography__body-1 text")}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <IgrButton variant="outlined" type="button" onClick={() => stepperVert?.current?.prev()} className={classes("button_2")}>
                  <span>PREV</span>
                </IgrButton>
                <IgrButton variant="outlined" type="button" onClick={() => stepperVert?.current?.next()} className={classes("button_2")}>
                  <span>NEXT</span>
                </IgrButton>
              </div>
            </div>
            <p slot="title">Payment</p>
          </IgrStep>
          <IgrStep optional={true}>
            <span slot="indicator" className={classes("material-icons")}>
              <span>checklist</span>
            </span>
            <div className={classes("column-layout step-content_2")}>
              <p className={classes("typography__body-1 text")}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group_3")}>
                <IgrButton variant="outlined" type="button" onClick={() => stepperVert?.current?.prev()} className={classes("button_2")}>
                  <span>PREV</span>
                </IgrButton>
              </div>
            </div>
            <p slot="title">Review order</p>
            <p slot="subtitle">(Optional)</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
