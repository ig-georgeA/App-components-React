import { IgrColumn, IgrGrid } from '@infragistics/igniteui-react-grids';
import { IgrFinancialChart, IgrFinancialChartModule } from '@infragistics/igniteui-react-charts';
import { useGetEmployees } from '../hooks/northwind-hooks';
import { useGetStocks } from '../hooks/financial-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './child-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrFinancialChartModule.register();

export default function ChildView() {
  const classes = createClassTransformer(styles);
  const { northwindEmployees } = useGetEmployees();
  const { financialStocks } = useGetStocks();

  return (
    <>
      <div className={classes("row-layout child-view-container")}>
        <div className={classes("group")}>
          <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
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
          <div className={classes("group_1")}>
            <IgrFinancialChart dataSource={financialStocks}></IgrFinancialChart>
          </div>
          <div className={classes("group_1")}>
            <IgrFinancialChart dataSource={financialStocks}></IgrFinancialChart>
          </div>
        </div>
      </div>
    </>
  );
}
