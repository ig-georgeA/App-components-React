import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface CustomerDto {
  customerId?: string;
  companyName: string;
  contactName?: string;
  contactTitle?: string;
  address?: AddressDtoNorthwindAPIIG;
}
