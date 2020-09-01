import React from "react";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Position,
  Form
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import { employees, country } from "./data.js";

class App extends React.Component {
  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid dataSource={employees} keyExpr="ID" showBorders={true}>
        <Paging defaultPageSize={10} />
        
          <Editing mode="popup" allowDeleting={true} allowAdding={true} useIcons={true}>
            <Popup
              title="Employee Info"
              showTitle={true}
              width={700}
              height={525}
            >
              <Position my="top" at="top" of={window} />
            </Popup>
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="Name" />
                <Item dataField="Age" />
              </Item>
              <Item
                itemType="group"
                caption="Home Address"
                colCount={2}
                colSpan={2}
              >
                <Item dataField="Address" />
				<Item dataField="PinCode" />
				<Item dataField="CountryID" />
              </Item>
            </Form>
          </Editing>
          <Column dataField="Name" width={125}/>
          <Column dataField="Age" width={125}/>
          <Column dataField="Address"width={250}/>
          <Column dataField="PinCode" width={125}/>
          <Column dataField="CountryID" caption="Country" width={125}>
            <Lookup dataSource={country} valueExpr="ID" displayExpr="Name" />
          </Column>
        </DataGrid>
      </div>
    );
  }
}

export default App;
