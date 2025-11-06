import { IgrColumn, IgrGridCreatedEventArgs, IgrHierarchicalGrid, IgrRowIsland } from '@infragistics/igniteui-react-grids';
import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { getOrderDetailDtoList, getOrderDtoList } from '../services/northwind-apiig';
import { OrderDtoNorthwindAPIIG } from '../models/NorthwindAPIIG/order-dto-northwind-apiig';
import { useGetCustomerDtoList } from '../hooks/northwind-apiig-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './hierarchical-grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function HierarchicalGrid() {
  const classes = createClassTransformer(styles);
  const { northwindAPIIGCustomerDto } = useGetCustomerDtoList();

  async function gridCreatedOrderDto(e: IgrGridCreatedEventArgs) {
    e.detail.grid.isLoading = true;
    const data = await getOrderDtoList((e.detail.parentRowData as CustomerDto)?.customerId);
    if (data != null) {
      e.detail.grid.data = data;
      e.detail.grid.isLoading = false;
    }
  }
  async function gridCreatedOrderDetailDto(e: IgrGridCreatedEventArgs) {
    e.detail.grid.isLoading = true;
    const data = await getOrderDetailDtoList((e.detail.parentRowData as OrderDtoNorthwindAPIIG)?.orderId ?? 0);
    if (data != null) {
      e.detail.grid.data = data;
      e.detail.grid.isLoading = false;
    }
  }

  return (
    <>
      <div className={classes("row-layout hierarchical-grid-container")}>
        <IgrHierarchicalGrid data={northwindAPIIGCustomerDto} primaryKey="customerId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar hierarchical-grid")}>
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
          <IgrRowIsland childDataKey="b88d73ad-7346-420c-b345-23a571f6b8df" primaryKey="orderId" allowFiltering={true} filterMode="excelStyleFilter" key="272b6842-eee5-450f-9dc2-2370d3ff77f2" onGridCreated={gridCreatedOrderDto} className={classes("ig-scrollbar")}>
            <IgrColumn field="orderId" dataType="number" header="orderId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipperId" dataType="number" header="shipperId" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipVia" dataType="string" header="shipVia" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="freight" dataType="number" header="freight" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipName" dataType="string" header="shipName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="completed" dataType="boolean" header="completed" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" sortable={true} selectable={false}></IgrColumn>
            <IgrRowIsland childDataKey="1e0b0a6b-7758-4c35-b2cf-bc576b99230c" primaryKey="orderId" moving={true} allowFiltering={true} filterMode="excelStyleFilter" key="602e2ef4-f7b8-4a95-99fe-c8e136adafb3" onGridCreated={gridCreatedOrderDetailDto} className={classes("ig-scrollbar")}>
              <IgrColumn field="orderId" dataType="number" header="orderId" sortable={true} resizable={true} selectable={false}></IgrColumn>
              <IgrColumn field="productId" dataType="number" header="productId" sortable={true} resizable={true} selectable={false}></IgrColumn>
              <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable={true} resizable={true} selectable={false}></IgrColumn>
              <IgrColumn field="quantity" dataType="number" header="quantity" sortable={true} resizable={true} selectable={false}></IgrColumn>
              <IgrColumn field="discount" dataType="number" header="discount" sortable={true} resizable={true} selectable={false}></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>
      </div>
    </>
  );
}
