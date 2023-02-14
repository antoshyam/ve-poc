Accordion Example:

```js
import React, { useState } from "react";
import {
  ActionBar,
  Button,
  Form,
  InputText,
  InputDate,
  InputCheckbox,
  ButtonBar,
  Export,
  Icon,
  Footer,
  Row
} from "../../index.js";

let [showContent, setShowContent] = useState(false);

<Row>
  <Accordion header="Collapsible Accordion" collapsible showContent={showContent}>
    <ActionBar>
      <Button text="Action" onClick={event => alert("Some action")} />
      <Export.Excel data={{ test: "test" }} fileName={"test.xlsx"}>
        <Icon className="w3-button w3-border w3-border-blue w3-round-xxlarge w3-blue w3-hover-white w3-margin-left">
          {" "}
          Export
        </Icon>
      </Export.Excel>
    </ActionBar>
    <Form
      columns={3}
      labelAlignment="left"
      fieldGridCount={{ l: 8 }}
      onSubmit={() => {
        alert("submitted..");
      }}
    >
      <InputText label="Demo Input Text" />
      <InputDate label="Demo Input Date" />
      <InputCheckbox label="Demo Input no Checkbox" text="Demo checkbox text" />
      <Footer>
        <ButtonBar>
          <Button text="Submit" />
        </ButtonBar>
      </Footer>
    </Form>
    <Accordion header="Collapsible Accordion Secondary" qcStyle='secondary'
    collapsible showContent={showContent}>
    <ActionBar>
      <Button text="Action" onClick={event => alert("Some action")} />
      <Export.Excel data={{ test: "test" }} fileName={"test.xlsx"}>
        <Icon className="w3-button w3-border w3-border-blue w3-round-xxlarge w3-blue w3-hover-white w3-margin-left">
          {" "}
          Export
        </Icon>
      </Export.Excel>
    </ActionBar>
    <Form
      columns={3}
      labelAlignment="left"
      fieldGridCount={{ l: 8 }}
      onSubmit={() => {
        alert("submitted..");
      }}
    >
      <InputText label="Demo Input Text" />
      <InputDate label="Demo Input Date" />
      <InputCheckbox label="Demo Input no Checkbox" text="Demo checkbox text" />
      <Footer>
        <ButtonBar>
          <Button text="Submit" />
        </ButtonBar>
      </Footer>
    </Form>
  </Accordion>

  </Accordion>
  <Accordion header="Non-Collapsible Accordion">
    <Form
      columns={3}
      labelAlignment="left"
      fieldGridCount={{ l: 8 }}
      onSubmit={() => {
        alert("submitted..");
      }}
    >
      <InputText label="Demo Input Text" />
      <InputDate label="Demo Input Date" />
      <InputCheckbox label="Demo Input no Checkbox" text="Demo checkbox text" />
      <Footer>
        <ButtonBar>
          <Button text="Submit" />
        </ButtonBar>
      </Footer>
    </Form>
  </Accordion>
</Row>;
```
Accordion with custom Header:

```js
import {
  ActionBar,
  Button,
  Form,
  OutputText,
  InputText,
  InputDate,
  InputCheckbox,
  ButtonBar,
  Export,
  Icon,
  Header,
  Footer,
  Row
} from "../../index.js";
<Row>
  <Accordion collapsible>
    <Header>
      <OutputText value='Collapsible Accordion'/>
    </Header>
    <ActionBar>
      <Button text="Action" onClick={event => alert("Some action")} />
      <Export.Excel data={{ test: "test" }} fileName={"test.xlsx"}>
        <Icon className="w3-button w3-border w3-border-blue w3-round-xxlarge w3-blue w3-hover-white w3-margin-left">
          {" "}
          Export
        </Icon>
      </Export.Excel>
    </ActionBar>
    <Form
      columns={3}
      labelAlignment="left"
      fieldGridCount={{ l: 8 }}
      onSubmit={() => {
        alert("submitted..");
      }}
    >
      <InputText label="Demo Input Text" />
      <InputDate label="Demo Input Date" />
      <InputCheckbox label="Demo Input no Checkbox" text="Demo checkbox text" />
      <Footer>
        <ButtonBar>
          <Button text="Submit" />
        </ButtonBar>
      </Footer>
    </Form>
  </Accordion>
  <Accordion>
    <Header>
      <OutputText value='Non-Collapsible Accordion'/>
    </Header>
    <Form
      columns={3}
      labelAlignment="left"
      fieldGridCount={{ l: 8 }}
      onSubmit={() => {
        alert("submitted..");
      }}
    >
      <InputText label="Demo Input Text" />
      <InputDate label="Demo Input Date" />
      <InputCheckbox label="Demo Input no Checkbox" text="Demo checkbox text" />
      <Footer>
        <ButtonBar>
          <Button text="Submit" />
        </ButtonBar>
      </Footer>
    </Form>
  </Accordion>
</Row>;
```