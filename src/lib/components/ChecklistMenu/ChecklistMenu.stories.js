import React from "react";
import { storiesOf } from "@storybook/react";
import ChecklistMenu from "./ChecklistMenu";
import { checkA11y } from "@storybook/addon-a11y";
import { withReadme, withDocs } from "storybook-readme";
import { withKnobs, text, array, boolean, number } from "@storybook/addon-knobs/react";
import readme from "./README.md"

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
];

const menuSelect = (selection) => {
  console.log(`${selection} selected`);
}

storiesOf("Checklist Menu", module)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add("default", () => (
    <ChecklistMenu
      menuSelect={menuSelect}
      label={text("label", "filter")}
      options={array("options", ["Option 1", "Option 2", "Option 3"])}
      defaultOption={text("defaultOption", "All Items")}
    />
  ));
  
