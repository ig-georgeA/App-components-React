import { IgrFinancialChart, IgrFinancialChartModule } from '@infragistics/igniteui-react-charts';
import { useGetStocks } from '../hooks/financial-hooks';
import styles from './financial-chart.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrFinancialChartModule.register();

export default function FinancialChart() {
  const classes = createClassTransformer(styles);
  const { financialStocks } = useGetStocks();

  return (
    <>
      <div className={classes("row-layout financial-chart-container")}>
        <div className={classes("group")}>
          <IgrFinancialChart dataSource={financialStocks} chartType="Line"></IgrFinancialChart>
        </div>
      </div>
    </>
  );
}
