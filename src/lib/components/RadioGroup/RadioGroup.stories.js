import React from "react";
import { storiesOf } from "@storybook/react";
import RadioGroup from "./RadioGroup";
import { checkA11y } from "@storybook/addon-a11y";
import { withReadme, withDocs } from "storybook-readme";
import { withKnobs, object, text, array, boolean, number } from "@storybook/addon-knobs/react";
import readme from "./README.md"


// const menuSelect = (selection) => {
//   console.log(`${selection} selected`);
// }

const radios = [
  {value: 'Option1', label: 'Option 1' },
  { value: 'Option2', label: 'Option 2' }
]

const radiosWithDisabled = [...radios, { value: "disabled", label: "Option 3", disabled: true }];


storiesOf("Radio Group", module)
  .addDecorator(withReadme(readme))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add("No Preselect", () => (
    <RadioGroup
      name="options"
      label="Options"
      radios={object("radios", radios)}
    />
  ))
  .add("With Preselect", () => (
    <RadioGroup
      name="options"
      label="Options"
       defaultValue="Option1"
      radios={object("radios", radios)}
    />
  ))
  .add("Disabled option", () => (
    <RadioGroup
      name="options" groupLabel="Options"
      label="Option1"
      radios={object("radios", radiosWithDisabled)}
    />
  ));
  
