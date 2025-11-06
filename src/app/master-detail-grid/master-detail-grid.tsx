import { IgrAvatar, IgrChip } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridMasterDetailContext } from 'igniteui-react-grids';
import { OrderDto } from '../models/NorthwindSwagger/order-dto';
import { useGetEmployeeDtoList } from '../hooks/northwind-apiig-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './master-detail-grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterDetailGrid() {
  const classes = createClassTransformer(styles);
  let _selectedOrder: OrderDto | undefined;
  const { northwindAPIIGEmployeeDto } = useGetEmployeeDtoList();

  const gridDetailTemplate = (ctx: IgrGridMasterDetailContext) => {
    return (
      <>
        <div className={classes("row-layout group")}>
          <IgrAvatar src={ctx.implicit.avatarUrl} shape="rounded" className={classes("avatar")}></IgrAvatar>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <h6 className={classes("content")}>
                  <span>{ctx.implicit.firstName}</span>
                </h6>
                <h6 className={classes("content")}>
                  <span>{ctx.implicit.lastName}</span>
                </h6>
              </div>
              <IgrChip className={classes("chip")}>
                <span slot="prefix">
                  <span className={classes("material-icons icon")}>
                    <span>phone</span>
                  </span>
                </span>
                <span>{ctx.implicit.address.phone}</span>
              </IgrChip>
            </div>
            <p className={classes("typography__body-1 content")}>
              <span>{ctx.implicit.title}</span>
            </p>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__caption text")}>
                <span>{ctx.implicit.address.street}</span>
              </p>
              <p className={classes("typography__caption text")}>
                <span>{ctx.implicit.address.city}</span>
              </p>
              <p className={classes("typography__caption text")}>
                <span>{ctx.implicit.address.country}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout master-detail-grid-container")}>
        <IgrGrid data={northwindAPIIGEmployeeDto} primaryKey="employeeId" rowSelection="single" hideRowSelectors={true} detailTemplate={gridDetailTemplate} allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
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
    </>
  );
}
