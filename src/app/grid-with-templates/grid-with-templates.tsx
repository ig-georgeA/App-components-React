import { IgrAvatar, IgrButton, IgrChip } from '@infragistics/igniteui-react';
import { IgrCellTemplateContext, IgrColumn, IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarPinning, IgrGridToolbarTitle } from '@infragistics/igniteui-react-grids';
import { useGetEmployeeDtoList } from '../hooks/northwind-apiig-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './grid-with-templates.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function GridWithTemplates() {
  const classes = createClassTransformer(styles);
  const { northwindAPIIGEmployeeDto } = useGetEmployeeDtoList();

  const columnBodyTemplate = (ctx: IgrCellTemplateContext) => {
    return (
      <>
        <div className={classes("row-layout group_1")}>
          <IgrAvatar src={ctx.cell.row.data.avatarUrl} shape="rounded" className={classes("avatar")}></IgrAvatar>
          <div className={classes("row-layout group_2")}>
            <p className={classes("typography__body-2 text")}>
              <span>{ctx.cell.row.data.firstName}</span>
            </p>
            <p className={classes("typography__body-2 text")}>
              <span>{ctx.cell.value}</span>
            </p>
          </div>
        </div>
      </>
    )
  }

  const columnBodyTemplate1 = (ctx: IgrCellTemplateContext) => {
    return (
      <>
        <IgrChip className={classes("chip")}>
          <span slot="prefix">
            <span className={classes("material-icons icon")}>
              <span>phone</span>
            </span>
          </span>
          <span>{ctx.cell.value}</span>
        </IgrChip>
      </>
    )
  }

  const columnBodyTemplate2 = () => {
    return (
      <>
        <IgrButton variant="flat" type="button" className={classes("button")}>
          <span>View details</span>
          <span className={classes("material-icons")}>
            <span>arrow_forward</span>
          </span>
        </IgrButton>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout grid-with-templates-container")}>
        <div className={classes("column-layout group")}>
          <IgrGrid data={northwindAPIIGEmployeeDto} primaryKey="employeeId" rowSelection="multiple" rowEditable={true} allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span>Grid Toolbar</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrColumn field="lastName" dataType="string" header="Employee name" width="212px" groupable={true} sortable={true} resizable={true} bodyTemplate={columnBodyTemplate} selectable={false}></IgrColumn>
            <IgrColumn field="title" dataType="string" header="Job title" groupable={true} sortable={true} resizable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="State" width="179px" groupable={true} sortable={true} resizable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.city" header="City" width="209px" groupable={true} sortable={true} resizable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="Phone" groupable={true} sortable={true} resizable={true} bodyTemplate={columnBodyTemplate1} selectable={false}></IgrColumn>
            <IgrColumn field="hireDate" header="Hire date" width="189px" groupable={true} sortable={true} resizable={true} selectable={false}></IgrColumn>
            <IgrColumn header="Actions" width="203px" editable={false} disablePinning={true} bodyTemplate={columnBodyTemplate2} filterable={false} selectable={false}></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
