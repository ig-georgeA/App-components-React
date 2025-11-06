import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { CustomerDtoPagedResultDto } from '../models/NorthwindAPIIG/customer-dto-paged-result-dto';
import { EmployeeDto } from '../models/NorthwindAPIIG/employee-dto';
import { FetchApi } from './fetch-api';
import { OrderDetailDto } from '../models/NorthwindAPIIG/order-detail-dto';
import { OrderDtoNorthwindAPIIG } from '../models/NorthwindAPIIG/order-dto-northwind-apiig';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoPagedResultDto(pageIndex?: number, size?: number, orderBy?: string): Promise<CustomerDtoPagedResultDto | undefined> {
  const query = new URLSearchParams();
  if (pageIndex !== undefined) query.append('pageIndex', pageIndex.toString());
  if (size !== undefined) query.append('size', size.toString());
  if (orderBy !== undefined) query.append('orderBy', orderBy);
  return await FetchApi.fetchApiResponse<CustomerDtoPagedResultDto | undefined>(`${API_ENDPOINT}/Customers/GetCustomersWithPage?${query}`, undefined);
}

export async function postCustomerDto(data?: CustomerDto): Promise<CustomerDto | undefined> {
  const body = JSON.stringify(data ?? {
    customerId: 'string',
    companyName: 'string',
    contactName: 'string',
    contactTitle: 'string',
    address: {
      street: 'string',
      city: 'string',
      region: 'string',
      postalCode: 'string',
      country: 'string',
      phone: 'string'
    }
  });
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>',
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'POST', body, headers);
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'DELETE', undefined, headers);
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, [], 'GET', undefined, headers);
}

export async function putEmployeeDto(id: number, data?: EmployeeDto): Promise<EmployeeDto | undefined> {
  const body = JSON.stringify(data ?? {
    employeeId: 123,
    lastName: 'string',
    firstName: 'string',
    title: 'string',
    titleOfCourtesy: 'string',
    birthDate: 'string',
    hireDate: 'string',
    addressId: 'string',
    address: {
      street: 'string',
      city: 'string',
      region: 'string',
      postalCode: 'string',
      country: 'string',
      phone: 'string'
    },
    notes: 'string',
    avatarUrl: 'string',
    reportsTo: 123
  });
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>',
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<EmployeeDto | undefined>(`${API_ENDPOINT}/Employees/${id}`, undefined, 'PUT', body, headers);
}

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto[]>(`${API_ENDPOINT}/Customers`, [], 'GET', undefined, headers);
}

export async function getOrderDtoList(id: string = 'BLONP'): Promise<OrderDtoNorthwindAPIIG[]> {
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDtoNorthwindAPIIG[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, [], 'GET', undefined, headers);
}

export async function getOrderDetailDtoList(id: number): Promise<OrderDetailDto[]> {
  const headers: Record<string, string> = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, [], 'GET', undefined, headers);
}
