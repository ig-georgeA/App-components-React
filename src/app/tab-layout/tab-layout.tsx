import { IgrButton, IgrCalendar, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrIconButton, IgrInput, IgrTab, IgrTabs } from '@infragistics/igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarTitle } from '@infragistics/igniteui-react-grids';
import { useState } from 'react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/northwind-apiig-hooks';
import { useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './tab-layout.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrCategoryChartModule.register();

export default function TabLayout() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const { northwindAPIIGCustomerDto } = useGetCustomerDtoList();
  const { northwindAPIIGEmployeeDto } = useGetEmployeeDtoList();
  const { northwindEmployees } = useGetEmployees();
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout tab-layout-container")}>
        <div className={classes("column-layout group")}>
          <IgrTabs className={classes("tabs")}>
            <IgrTab selected={true} className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>backup</span>
                </span>
              </span>
              <span slot="label">Label</span>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
          </IgrTabs>
          <IgrTabs alignment="center" className={classes("tabs")}>
            <IgrTab selected={true} className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
              <span slot="label">Label</span>
            </IgrTab>
          </IgrTabs>
          <IgrTabs alignment="end" className={classes("tabs")}>
            <IgrTab selected={true} className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>assignment</span>
                </span>
              </span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>account_balance_wallet</span>
                </span>
              </span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>account_circle</span>
                </span>
              </span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>info</span>
                </span>
              </span>
            </IgrTab>
          </IgrTabs>
          <IgrTabs className={classes("tabs")}>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
            <IgrTab selected={true} className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}></div>
            </IgrTab>
          </IgrTabs>
          <div className={classes("row-layout group_1")}>
            <IgrTabs alignment="justify" className={classes("tabs")}>
              <IgrTab selected={true} className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content_1")}></div>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content_2")}>
                  <IgrCard className={classes("card")}>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Title goes here...</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Subtitle goes here...</span>
                      </h5>
                    </IgrCardHeader>
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
                </div>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}>
                  <IgrCalendar hideHeader={false} headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
                </div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">Label</span>
              </IgrTab>
              <IgrTab className={classes("tab-item")}>
                <div className={classes("row-layout tab-item-content")}></div>
                <span slot="label">
                  <span className={classes("material-icons")}>
                    <span>info</span>
                  </span>
                </span>
                <span slot="label">TabEnd</span>
              </IgrTab>
            </IgrTabs>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <IgrTabs alignment="justify" className={classes("tabs")}>
            <IgrTab selected={true} className={classes("tab-item")}>
              <div className={classes("column-layout tab-item-content_3")}>
                <div className={classes("column-layout group_2")}>
                  <div className={classes("row-layout group_2")}>
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
                  <IgrButton type="button" className={classes("button_1 button_1_1")}>
                    <span>Some action</span>
                  </IgrButton>
                </div>
                <IgrGrid data={northwindAPIIGCustomerDto} primaryKey="customerId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="companyName" dataType="string" header="companyName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="contactName" dataType="string" header="contactName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>grid_on</span>
                </span>
              </span>
              <span slot="label">input + grid</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content")}>
                <IgrGrid data={northwindAPIIGCustomerDto} primaryKey="customerId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrGridToolbar>
                    <IgrGridToolbarActions>
                      <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                    </IgrGridToolbarActions>
                    <IgrGridToolbarTitle>
                      <span>Grid Toolbar</span>
                    </IgrGridToolbarTitle>
                  </IgrGridToolbar>
                  <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="companyName" dataType="string" header="companyName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="contactName" dataType="string" header="contactName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>arrow_forward</span>
                </span>
              </span>
              <span slot="label">Row layout + grid</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("column-layout tab-item-content")}>
                <IgrGrid data={northwindAPIIGEmployeeDto} primaryKey="employeeId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="addressId" dataType="string" header="addressId" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="reportsTo" dataType="number" header="reportsTo" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>arrow_downward</span>
                </span>
              </span>
              <span slot="label">Column layout + grid</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <div className={classes("row-layout tab-item-content_4")}>
                {northwindEmployees?.map((item) => (
                  <IgrCard className={classes("card_1")} key={uuid()}>
                    <div className={classes("group_3")}>
                      <IgrCardHeader>
                        <h3 slot="title">
                          <span>{item.lastName}</span>
                        </h3>
                        <h5 slot="subtitle">
                          <span>{item.title}</span>
                        </h5>
                      </IgrCardHeader>
                    </div>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src={item.avatarUrl} alt="" className={classes("image")} />
                    </IgrCardMedia>
                  </IgrCard>
                ))}
              </div>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>wrap_text</span>
                </span>
              </span>
              <span slot="label">Wrapping content</span>
            </IgrTab>
            <IgrTab className={classes("tab-item")}>
              <span slot="label">
                <span className={classes("material-icons")}>
                  <span>bar_chart</span>
                </span>
              </span>
              <span slot="label">Chart</span>
              <div className={classes("row-layout tab-item-content_5")}>
                <div className={classes("group_4")}>
                  <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Column" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                </div>
              </div>
            </IgrTab>
          </IgrTabs>
        </div>
      </div>
    </>
  );
}
