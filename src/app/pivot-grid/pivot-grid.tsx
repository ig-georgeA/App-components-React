import { IgrPivotDataSelector, IgrPivotGrid } from 'igniteui-react-grids';
import { useRef } from 'react';
import { useGetStocks } from '../hooks/financial-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './pivot-grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function PivotGrid() {
  const classes = createClassTransformer(styles);
  const pivotGrid = useRef<IgrPivotGrid>(null);
  const { financialStocks } = useGetStocks();

  return (
    <>
      <div className={classes("row-layout pivot-grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrPivotGrid data={financialStocks} superCompactMode={true} defaultExpandState={true} autoGenerateConfig={true} ref={pivotGrid} className={classes("ig-typography ig-scrollbar pivot-grid")}></IgrPivotGrid>
          <IgrPivotDataSelector grid={pivotGrid.current!}></IgrPivotDataSelector>
        </div>
      </div>
    </>
  );
}
