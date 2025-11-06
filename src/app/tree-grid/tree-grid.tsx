import { IgrActionStrip, IgrColumn, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarTitle, IgrTreeGrid } from 'igniteui-react-grids';
import { EmployeeDto } from '../models/NorthwindAPIIG/employee-dto';
import { putEmployeeDto } from '../services/northwind-apiig';
import { useGetEmployeeDtoList } from '../hooks/northwind-apiig-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './tree-grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function TreeGrid() {
  const classes = createClassTransformer(styles);
  const { northwindAPIIGEmployeeDto } = useGetEmployeeDtoList();

  async function rowEditDoneTreeGrid(e: IgrGridEditDoneEventArgs) {
    if (!e.detail.isAddRow) {
      await putEmployeeDto((e.detail.rowData as EmployeeDto)?.employeeId ?? 0, e.detail.rowData as EmployeeDto);
    }
  }

  const columnBodyTemplate = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout tree-grid-container")}>
        <IgrTreeGrid data={northwindAPIIGEmployeeDto} primaryKey="employeeId" foreignKey="reportsTo" rowEditable={true} rowSelection="single" hideRowSelectors={true} allowFiltering={true} onRowEditDone={rowEditDoneTreeGrid} className={classes("ig-typography ig-scrollbar tree-grid")}>
          <IgrGridToolbar>
            <IgrGridToolbarTitle>
              <span>Tree grid</span>
            </IgrGridToolbarTitle>
          </IgrGridToolbar>
          <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
          </IgrActionStrip>
          <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} bodyTemplate={columnBodyTemplate} selectable={false}></IgrColumn>
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
        </IgrTreeGrid>
      </div>
    </>
  );
}
