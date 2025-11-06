import { useCallback, useEffect, useState } from 'react';
import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { CustomerDtoPagedResultDto } from '../models/NorthwindAPIIG/customer-dto-paged-result-dto';
import { deleteCustomerDto, getCustomerDtoList, getCustomerDtoPagedResultDto, getEmployeeDtoList, getOrderDetailDtoList, getOrderDtoList, postCustomerDto, putEmployeeDto } from '../services/northwind-apiig';
import { EmployeeDto } from '../models/NorthwindAPIIG/employee-dto';
import { OrderDetailDto } from '../models/NorthwindAPIIG/order-detail-dto';
import { OrderDtoNorthwindAPIIG } from '../models/NorthwindAPIIG/order-dto-northwind-apiig';

export const useGetCustomerDtoPagedResultDto = (pageIndex?: number, size?: number, orderBy?: string) => {
  const [customerDtoPagedResultDto, setCustomerDtoPagedResultDto] = useState<CustomerDtoPagedResultDto | undefined>();

  const requestCustomerDtoPagedResultDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoPagedResultDto(pageIndex, size, orderBy)
      .then((data) => {
        if (!ignore) {
          setCustomerDtoPagedResultDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [pageIndex, size, orderBy]);

  useEffect(() => {
    requestCustomerDtoPagedResultDto();
  }, [pageIndex, size, orderBy, requestCustomerDtoPagedResultDto]);

  return { requestNorthwindAPIIGCustomerDtoPagedResultDto: requestCustomerDtoPagedResultDto, northwindAPIIGCustomerDtoPagedResultDto: customerDtoPagedResultDto, setNorthwindAPIIGCustomerDtoPagedResultDto: setCustomerDtoPagedResultDto };
}

export const usePostCustomerDto = (data?: CustomerDto) => {
  const [customerDto, setCustomerDto] = useState<CustomerDto | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    postCustomerDto(data)
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [data]);

  useEffect(() => {
    requestCustomerDto();
  }, [data, requestCustomerDto]);

  return { requestNorthwindAPIIGCustomerDto: requestCustomerDto, northwindAPIIGCustomerDto: customerDto, setNorthwindAPIIGCustomerDto: setCustomerDto };
}

export const useDeleteCustomerDto = (id: string) => {
  const [customerDto, setCustomerDto] = useState<CustomerDto | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    deleteCustomerDto(id)
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestCustomerDto();
  }, [id, requestCustomerDto]);

  return { requestNorthwindAPIIGCustomerDto: requestCustomerDto, northwindAPIIGCustomerDto: customerDto, setNorthwindAPIIGCustomerDto: setCustomerDto };
}

export const useGetEmployeeDtoList = () => {
  const [employeeDto, setEmployeeDto] = useState<EmployeeDto[]>([]);

  const requestEmployeeDto = useCallback(() => {
    let ignore = false;
    getEmployeeDtoList()
      .then((data) => {
        if (!ignore) {
          setEmployeeDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployeeDto();
  }, [requestEmployeeDto]);

  return { requestNorthwindAPIIGEmployeeDto: requestEmployeeDto, northwindAPIIGEmployeeDto: employeeDto, setNorthwindAPIIGEmployeeDto: setEmployeeDto };
}

export const usePutEmployeeDto = (id: number, data?: EmployeeDto) => {
  const [employeeDto, setEmployeeDto] = useState<EmployeeDto | undefined>();

  const requestEmployeeDto = useCallback(() => {
    let ignore = false;
    putEmployeeDto(id, data)
      .then((data) => {
        if (!ignore) {
          setEmployeeDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id, data]);

  useEffect(() => {
    requestEmployeeDto();
  }, [id, data, requestEmployeeDto]);

  return { requestNorthwindAPIIGEmployeeDto: requestEmployeeDto, northwindAPIIGEmployeeDto: employeeDto, setNorthwindAPIIGEmployeeDto: setEmployeeDto };
}

export const useGetCustomerDtoList = () => {
  const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoList()
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomerDto();
  }, [requestCustomerDto]);

  return { requestNorthwindAPIIGCustomerDto: requestCustomerDto, northwindAPIIGCustomerDto: customerDto, setNorthwindAPIIGCustomerDto: setCustomerDto };
}

export const useGetOrderDtoList = (id: string = 'BLONP') => {
  const [orderDto, setOrderDto] = useState<OrderDtoNorthwindAPIIG[]>([]);

  const requestOrderDto = useCallback(() => {
    let ignore = false;
    getOrderDtoList(id)
      .then((data) => {
        if (!ignore) {
          setOrderDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestOrderDto();
  }, [id, requestOrderDto]);

  return { requestNorthwindAPIIGOrderDto: requestOrderDto, northwindAPIIGOrderDto: orderDto, setNorthwindAPIIGOrderDto: setOrderDto };
}

export const useGetOrderDetailDtoList = (id: number) => {
  const [orderDetailDto, setOrderDetailDto] = useState<OrderDetailDto[]>([]);

  const requestOrderDetailDto = useCallback(() => {
    let ignore = false;
    getOrderDetailDtoList(id)
      .then((data) => {
        if (!ignore) {
          setOrderDetailDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestOrderDetailDto();
  }, [id, requestOrderDetailDto]);

  return { requestNorthwindAPIIGOrderDetailDto: requestOrderDetailDto, northwindAPIIGOrderDetailDto: orderDetailDto, setNorthwindAPIIGOrderDetailDto: setOrderDetailDto };
}
