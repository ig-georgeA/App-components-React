import { IgrActionStrip, IgrColumn, IgrColumnGroup, IgrGrid, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator, IgrRowDataEventArgs } from '@infragistics/igniteui-react-grids';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { deleteCustomerDto, postCustomerDto } from '../services/northwind-apiig';
import { useGetCustomerDtoPagedResultDto } from '../hooks/northwind-apiig-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Grid() {
  const classes = createClassTransformer(styles);
  const routeParams = useParams();
  const _test = routeParams.test ?? 'abc';
  const [basic_grid_1_Page_Size, setBasic_grid_1_Page_Size] = useState<number>(15);
  const [basic_grid_1_Page_Index, setBasic_grid_1_Page_Index] = useState<number>(0);
  const { northwindAPIIGCustomerDtoPagedResultDto: basicGrid1_Data_Request } = useGetCustomerDtoPagedResultDto(basic_grid_1_Page_Index ?? 0, basic_grid_1_Page_Size ?? 0);

  async function rowEditDoneBasicGrid1(e: IgrGridEditDoneEventArgs) {
    if (!e.detail.isAddRow) {
      await postCustomerDto(e.detail.rowData as CustomerDto);
    }
  }
  async function rowAddedBasicGrid1(e: IgrRowDataEventArgs) {
    await postCustomerDto(e.detail.rowData as CustomerDto);
  }
  async function rowDeletedBasicGrid1(e: IgrRowDataEventArgs) {
    await deleteCustomerDto((e.detail.rowData as CustomerDto)?.customerId ?? '');
  }

  return (
    <>
      <div className={classes("column-layout grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrGrid data={basicGrid1_Data_Request?.items} primaryKey="customerId" rowSelection="multiple" rowEditable={true} pagingMode="remote" moving={true} allowFiltering={true} filterMode="excelStyleFilter" onRowEditDone={rowEditDoneBasicGrid1} onRowAdded={rowAddedBasicGrid1} onRowDeleted={rowDeletedBasicGrid1} className={classes("ig-typography ig-scrollbar basic-grid-1")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span>Excel style filtering</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrPaginator perPage={basic_grid_1_Page_Size} totalRecords={basicGrid1_Data_Request?.totalRecordsCount ?? 0} page={basic_grid_1_Page_Index} onPageChange={(e) => setBasic_grid_1_Page_Index(e.detail)} onPerPageChange={(e) => setBasic_grid_1_Page_Size(e.detail)}></IgrPaginator>
            <IgrColumn field="customerId" dataType="string" header="customerId" editable={false} groupable={true} sortable={true} resizable={true}></IgrColumn>
            <IgrColumnGroup header="Contact info">
              <IgrColumn field="companyName" dataType="string" header="Company name" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="contactName" dataType="string" header="Contact" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="contactTitle" dataType="string" header="Contact title" filterable={false} selectable={false}></IgrColumn>
            </IgrColumnGroup>
            <IgrColumnGroup header="Address info">
              <IgrColumn field="address.street" dataType="string" header="Street" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="address.city" dataType="string" header="City" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="address.postalCode" dataType="string" header="Postal code" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="address.country" dataType="string" header="Country" filterable={false} selectable={false}></IgrColumn>
              <IgrColumn field="address.phone" dataType="string" header="Phone" filterable={false} selectable={false}></IgrColumn>
            </IgrColumnGroup>
            <IgrActionStrip>
              <IgrGridPinningActions></IgrGridPinningActions>
              <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
            </IgrActionStrip>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
