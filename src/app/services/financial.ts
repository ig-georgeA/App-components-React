import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { GlobalElectricityDemandType } from '../models/Financial/global-electricity-demand-type';
import { StocksType } from '../models/Financial/stocks-type';
import { TradingType } from '../models/Financial/trading-type';

export async function getStocks(): Promise<StocksType[]> {
  const response = await fetch('../../static-data/financial-stocks-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getBoxOfficeRevenue(): Promise<BoxOfficeRevenueType[]> {
  const response = await fetch('../../static-data/financial-box-office-revenue-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getGlobalElectricityDemand(): Promise<GlobalElectricityDemandType[]> {
  const response = await fetch('../../static-data/financial-global-electricity-demand-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getTrading(): Promise<TradingType[]> {
  const response = await fetch('../../static-data/financial-trading-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
