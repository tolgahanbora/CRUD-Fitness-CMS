
import { ListViewComponent } from '@syncfusion/ej2-react-lists';



//import { flatList, groupData } from './listData';


function DietList() {

    let fields: Object = { groupBy: 'category' };
    // ListViewComponent içine datasource eklemeyi unutma.
  return (
    <div className='control-pane'>
    <div className='control-section'>

        <div id="group-list">
            <h4>Monday Diet</h4>

            {/* Group ListView element */}
            <ListViewComponent id="sample-list-group"  fields={fields}></ListViewComponent>
        </div>
    </div>


  </div>
  )
}

export default DietList