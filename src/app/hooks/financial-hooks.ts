import { useCallback, useEffect, useState } from 'react';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { getBoxOfficeRevenue, getGlobalElectricityDemand, getStocks, getTrading } from '../services/financial';
import { GlobalElectricityDemandType } from '../models/Financial/global-electricity-demand-type';
import { StocksType } from '../models/Financial/stocks-type';
import { TradingType } from '../models/Financial/trading-type';

export const useGetStocks = () => {
  const [stocks, setStocks] = useState<StocksType[]>([]);

  const requestStocks = useCallback(() => {
    let ignore = false;
    getStocks()
      .then((data) => {
        if (!ignore) {
          setStocks(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestStocks();
  }, [requestStocks]);

  return { requestFinancialStocks: requestStocks, financialStocks: stocks, setFinancialStocks: setStocks };
}

export const useGetBoxOfficeRevenue = () => {
  const [boxOfficeRevenue, setBoxOfficeRevenue] = useState<BoxOfficeRevenueType[]>([]);

  const requestBoxOfficeRevenue = useCallback(() => {
    let ignore = false;
    getBoxOfficeRevenue()
      .then((data) => {
        if (!ignore) {
          setBoxOfficeRevenue(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestBoxOfficeRevenue();
  }, [requestBoxOfficeRevenue]);

  return { requestFinancialBoxOfficeRevenue: requestBoxOfficeRevenue, financialBoxOfficeRevenue: boxOfficeRevenue, setFinancialBoxOfficeRevenue: setBoxOfficeRevenue };
}

export const useGetGlobalElectricityDemand = () => {
  const [globalElectricityDemand, setGlobalElectricityDemand] = useState<GlobalElectricityDemandType[]>([]);

  const requestGlobalElectricityDemand = useCallback(() => {
    let ignore = false;
    getGlobalElectricityDemand()
      .then((data) => {
        if (!ignore) {
          setGlobalElectricityDemand(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestGlobalElectricityDemand();
  }, [requestGlobalElectricityDemand]);

  return { requestFinancialGlobalElectricityDemand: requestGlobalElectricityDemand, financialGlobalElectricityDemand: globalElectricityDemand, setFinancialGlobalElectricityDemand: setGlobalElectricityDemand };
}

export const useGetTrading = () => {
  const [trading, setTrading] = useState<TradingType[]>([]);

  const requestTrading = useCallback(() => {
    let ignore = false;
    getTrading()
      .then((data) => {
        if (!ignore) {
          setTrading(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTrading();
  }, [requestTrading]);

  return { requestFinancialTrading: requestTrading, financialTrading: trading, setFinancialTrading: setTrading };
}
