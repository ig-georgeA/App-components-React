import { redirect } from 'react-router-dom';
import Grid from './grid/grid';
import GridWithTemplates from './grid-with-templates/grid-with-templates';
import TreeGrid from './tree-grid/tree-grid';
import HierarchicalGrid from './hierarchical-grid/hierarchical-grid';
import MasterDetailGrid from './master-detail-grid/master-detail-grid';
import PivotGrid from './pivot-grid/pivot-grid';
import Inputs from './inputs/inputs';
import PickersCombo from './pickers-combo/pickers-combo';
import CardCalendar from './card-calendar/card-calendar';
import ListsData from './lists-data/lists-data';
import Reveal from './reveal/reveal';
import CategoryCharts from './category-charts/category-charts';
import FinancialChart from './financial-chart/financial-chart';
import ApexCharts from './apex-charts/apex-charts';
import TypeScale from './type-scale/type-scale';
import ExpansionPanelsTree from './expansion-panels-tree/expansion-panels-tree';
import Stepper from './stepper/stepper';
import TabLayout from './tab-layout/tab-layout';
import Carousel from './carousel/carousel';
import DialogsAndDropdowns from './dialogs-and-dropdowns/dialogs-and-dropdowns';
import Image from './image/image';
import Position from './position/position';
import Layouts from './layouts/layouts';
import CSSGridLayout from './css-grid-layout/css-grid-layout';
import ChildView from './child-view/child-view';

export const routes = [
  { index: true, loader: () => redirect('grid') },
  { path: 'grid', element: <Grid />, text: 'Grid' },
  { path: 'grid/:test', element: <Grid />, text: 'Grid' },
  { path: 'grid-with-templates', element: <GridWithTemplates />, text: 'Grid with templates' },
  { path: 'tree-grid', element: <TreeGrid />, text: 'Tree grid' },
  { path: 'hierarchical-grid', element: <HierarchicalGrid />, text: 'Hierarchical grid' },
  { path: 'master-detail-grid', element: <MasterDetailGrid />, text: 'Master-detail grid' },
  { path: 'pivot-grid', element: <PivotGrid />, text: 'Pivot grid' },
  { path: 'inputs', element: <Inputs />, text: 'Inputs' },
  { path: 'pickers-combo', element: <PickersCombo />, text: 'Pickers Combo' },
  { path: 'card-calendar', element: <CardCalendar />, text: 'Card Calendar' },
  { path: 'lists-data', element: <ListsData />, text: 'Lists data' },
  { path: 'reveal', element: <Reveal />, text: 'Reveal' },
  { path: 'category-charts', element: <CategoryCharts />, text: 'Category charts' },
  { path: 'financial-chart', element: <FinancialChart />, text: 'Financial chart' },
  { path: 'apex-charts', element: <ApexCharts />, text: 'Apex charts' },
  { path: 'type-scale', element: <TypeScale />, text: 'Type scale' },
  { path: 'expansion-panels-tree', element: <ExpansionPanelsTree />, text: 'Expansion panels-tree' },
  { path: 'stepper', element: <Stepper />, text: 'Stepper' },
  { path: 'tab-layout', element: <TabLayout />, text: 'Tab layout' },
  { path: 'carousel', element: <Carousel />, text: 'Carousel' },
  { path: 'dialogs-and-dropdowns', element: <DialogsAndDropdowns />, text: 'Dialogs and dropdowns' },
  { path: 'image', element: <Image />, text: 'Image' },
  { path: 'position', element: <Position />, text: 'Position' },
  { path: 'layouts', element: <Layouts />, text: 'Layouts' },
  { path: 'css-grid-layout', element: <CSSGridLayout />, text: 'CSS grid layout' },
  { path: 'child-view', element: <ChildView />, text: 'Child View' }
];
