/* eslint-disable no-template-curly-in-string */
import React from 'react'

import {  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
  Legend, Category, Tooltip, ColumnSeries,  DataLabel, Highlight,}  from '@syncfusion/ej2-react-charts';
 
  import { Browser } from '@syncfusion/ej2-base'
  import {Box} from '@pankod/refine-mui'
function YearlyChart() {

   let data1 = [{ x: 'Jan', y: 57, toolTipMappingName: 'January ' }, { x: 'Feb', y: 66, toolTipMappingName: 'February ' }, { x: 'Mar', y: 75, toolTipMappingName: 'March ' }, { x: 'Apr', y: 80, toolTipMappingName: 'April ' }, { x: 'May', y: 84, toolTipMappingName: 'May ' }, { x: 'Jun', y: 88, toolTipMappingName: 'June ' }, { x: 'Jul', y: 88, toolTipMappingName: 'July ' }, { x: 'Aug', y: 90, toolTipMappingName: 'August' }, { x: 'Sep', y: 91, toolTipMappingName: 'September' }, { x: 'Oct', y: 94, toolTipMappingName: 'October ' },{ x: 'Nov', y: 95.5, toolTipMappingName: 'November' },{ x: 'Dec', y: 96, toolTipMappingName: 'December ' }];

   let data2 =  [{ x: 'Jan', y: 60, toolTipMappingName: 'January ' }, { x: 'Feb', y: 75, toolTipMappingName: 'February ' }, { x: 'Mar', y: 80, toolTipMappingName: 'March ' }, { x: 'Apr', y: 88, toolTipMappingName: 'April ' }, { x: 'May', y: 95, toolTipMappingName: 'May ' }, { x: 'Jun', y: 100, toolTipMappingName: 'June ' }, { x: 'Jul', y: 107, toolTipMappingName: 'July ' }, { x: 'Aug', y: 114, toolTipMappingName: 'August' }, { x: 'Sep', y: 120, toolTipMappingName: 'September' }, { x: 'Oct', y: 120, toolTipMappingName: 'October ' },{ x: 'Nov', y: 125, toolTipMappingName: 'November' },{ x: 'Dec', y: 127.5, toolTipMappingName: 'December ' }];

   let data3 =  [{ x: 'Jan', y: 40, toolTipMappingName: 'January ' }, { x: 'Feb', y: 45, toolTipMappingName: 'February ' }, { x: 'Mar', y: 50, toolTipMappingName: 'March ' }, { x: 'Apr', y: 55, toolTipMappingName: 'April ' }, { x: 'May', y: 60, toolTipMappingName: 'May ' }, { x: 'Jun', y: 65, toolTipMappingName: 'June ' }, { x: 'Jul', y: 67, toolTipMappingName: 'July ' }, { x: 'Aug', y: 70, toolTipMappingName: 'August' }, { x: 'Sep', y: 72.5, toolTipMappingName: 'September' }, { x: 'Oct', y: 75, toolTipMappingName: 'October ' },{ x: 'Nov', y: 75, toolTipMappingName: 'November' },{ x: 'Dec', y: 77.5, toolTipMappingName: 'December ' }];

   let data4 =  [{ x: 'Jan', y: 100, toolTipMappingName: 'January ' }, { x: 'Feb', y: 96.6, toolTipMappingName: 'February ' }, { x: 'Mar', y: 93.2, toolTipMappingName: 'March ' }, { x: 'Apr', y: 90.1, toolTipMappingName: 'April ' }, { x: 'May', y: 88.9, toolTipMappingName: 'May ' }, { x: 'Jun', y: 86, toolTipMappingName: 'June ' }, { x: 'Jul', y:89.4, toolTipMappingName: 'July ' }, { x: 'Aug', y: 92.3, toolTipMappingName: 'August' }, { x: 'Sep', y: 90.1, toolTipMappingName: 'September' }, { x: 'Oct', y: 88.1, toolTipMappingName: 'October ' },{ x: 'Nov', y: 88, toolTipMappingName: 'November' },{ x: 'Dec', y: 86.3, toolTipMappingName: 'December ' }];
  return (
    <Box>
      
           <ChartComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ enableHighlight: true }} primaryXAxis={{ labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0 , valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, edgeLabelPlacement: 'Shift' }} primaryYAxis={{
                        title: 'Kilograms',
                        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 200, interval: 15,
                    }} chartArea={{ border: { width: 0 } }}  tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }} width={Browser.isDevice ? '100%' : '75%'} title='Monthly Growth Chart'   >
                        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
                        <SeriesCollectionDirective >
                            <SeriesDirective dataSource={data1} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Squat' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Deadlift' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data3} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Bench Press' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data4} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Body Weight' type='Column'>
                            </SeriesDirective>

                        </SeriesCollectionDirective>
                    </ChartComponent>
    </Box>
    
  )



  
}


export default YearlyChart