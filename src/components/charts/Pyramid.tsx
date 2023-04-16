/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-self-assign */
/**
 * Sample for Pyramid Chart
 */

import { Browser } from '@syncfusion/ej2-base';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend
} from '@syncfusion/ej2-react-charts';
export let data1: any[] = [
    { x: 'Milk, Youghnut, Cheese', y: 435, text: Browser.isDevice ? 'Milk, Youghnut,<br> Cheese:  435 cal' : 'Milk, Youghnut, Cheese: 435 cal' },
    { x: 'Vegetables', y: 470, text: 'Vegetables: 470 cal' },
    { x: 'Meat, Poultry, Fish', y: 475, text:  Browser.isDevice ? 'Meat, Poultry,<br> Fish: 475 cal' : 'Meat, Poultry, Fish: 475 cal' },
    { x: 'Rice, Pasta', y: 930, text: Browser.isDevice ? 'Rice, Pasta:<br> 930 cal' : ' Rice, Pasta: 930 cal' },
    { x: 'Fruits', y: 520, text: Browser.isDevice ? 'Fruits: <br> 520 cal' : 'Fruits: 520 cal' }];
   
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
         .pyramid-chart {
             align :center
         }`;
function Pyramid() {
  
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <AccumulationChartComponent legendSettings={{ visible: false }} id='pyramid-chart' ref={pyramid => pyramid = pyramid}
                        title='Food Comparison Chart'
                       
                        tooltip={{ enable: true, format: '${point.x} : <b>${point.y} cal</b>' }}
                       
                    >
                        <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend]} />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' type='Pyramid' width={'45%'}
                                height='80%'  neckWidth='15%'  gapRatio={0.03} explode={true} emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                                dataLabel={{
                                    visible: true,
                                    name: 'text',
                                    position: 'Outside',
                                    connectorStyle: {length: '20px'},
                                    font: {
                                        fontWeight: '600',
                                    }
                                }}
                            >
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>
        )
 
}
export default Pyramid;