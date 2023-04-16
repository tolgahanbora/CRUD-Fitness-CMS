/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-restricted-globals */
/**
 * Sample for Doughnut chart
 */

import { Box, Stack } from '@pankod/refine-mui';
import { EmitType } from '@syncfusion/ej2-base';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, IAccLoadedEventArgs,
    AccumulationDataLabel, Inject, AccumulationTheme, IPointRenderEventArgs
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';
    if (selectedTheme === 'fluent' || selectedTheme === 'bootstrap5') {
        args.fill = seriesColor[args.point.index % 10];
    } 
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) { 
            args.border.color = '#303030';
        }

        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
        }

        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
        }

        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
        }

        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
        }

        else {
            args.border.color = '#222222';
        }

    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
    }

    else {
        args.border.color = '#FFFFFF';
    }
};
let seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
export let data1: any[] = 
[{ x: 'Carb', y: 61.3, text: 'Carb: 300 GR' }, 
{ x: 'Protein', y: 24.6, text:  Browser.isDevice ? 'Protein: <br> 100 GR': 'Protein: 100 GR' },
{ x: 'Fat', y: 2.7, text: Browser.isDevice ? 'Fat <br>  35 GR' : 'Fat 35 GR' },
{ x: 'Water', y: 2.6, text: Browser.isDevice ? 'Water: <br> 3 LIT' : 'Water: 3 LIT' },
]
function AccumulationDoughnut(this: any) {
  
        return (
            <Box
        
            
            >
                <Stack direction="column">
            <div className='control-pane'>
                <div className='control-section'>
                    <AccumulationChartComponent className="pie-chart" 
                        centerLabel={{
                            text: 'Daily<br>Nutrition<br>Macros',
                            hoverTextFormat: '${point.x}<br>${point.y}%',
                            textStyle: {
                                fontWeight: '600',
                                size: Browser.isDevice ? '7px' : '15px'
                            },
                        }} enableSmartLabels={true} load={load.bind(this)} loaded={onChartLoad.bind(this)}  pointRender={pointRender} enableBorderOnMouseMove={false} legendSettings={{ visible: false }}>
                        <Inject services={[PieSeries, AccumulationDataLabel]} />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='65%' border={{width:1}} startAngle= {Browser.isDevice ? 30 : 62 } 
                            dataLabel={{
                                visible: true,
                                position: 'Outside', name: 'text',
                                font: {
                                    fontWeight: '600',
                                },
                                connectorStyle:{length : '20px', type: 'Curve'}
                                
                            }} radius= {Browser.isDevice ? '40%' : '70%'}>
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>
            </div>
            </Stack>
            </Box>
        )
    function onChartLoad(args: IAccLoadedEventArgs): void {
       const element = document.getElementsByClassName('.pie-chart')
       for (let i = 0; i< element.length ; i++){
        element[i].setAttribute('title', '');
       }
    };
    function load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark")
            .replace(/light/i, "Light").replace(/contrast/i, 'Contrast') as AccumulationTheme;
    };
}
export default AccumulationDoughnut;