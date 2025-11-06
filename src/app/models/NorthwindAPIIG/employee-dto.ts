import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface EmployeeDto {
  employeeId: number;
  lastName: string;
  firstName?: string;
  title?: string;
  titleOfCourtesy?: string;
  birthDate?: Date;
  hireDate?: Date;
  addressId?: string;
  address?: AddressDtoNorthwindAPIIG;
  notes?: string;
  avatarUrl?: string;
  reportsTo: number;
}
