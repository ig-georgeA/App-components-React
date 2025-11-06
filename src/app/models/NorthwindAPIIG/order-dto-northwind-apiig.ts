import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface OrderDtoNorthwindAPIIG {
  orderId: number;
  customerId: string;
  employeeId: number;
  shipperId?: number;
  orderDate?: Date;
  requiredDate?: Date;
  shipVia?: string;
  freight: number;
  shipName?: string;
  completed: boolean;
  shipAddress?: AddressDtoNorthwindAPIIG;
}
