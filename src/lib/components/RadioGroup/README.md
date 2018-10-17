# Checklist Menu

## Usage

```js
import 'RadioGroup';
```

## Properties

| PropName      | propType      | defaultValue  | isRequired |
| ------------- | ------------- | ------------- | ---------- |
| label         | string        | null          | true       |
| name         | string        | null          | true       |
| onChange         | function        | null          | false       |
| radios        | array of objects         | null          | true      |
| radios.value  | string        | null          | true       |
| radios.label  | string        | null          | true       |
| radios.disabled  | boolean        | false          | true       |
| defaultOption | string        | null          | false       |
| helperText    | string        | null          | false       |
| menuSelect    | function      | null          | true        |

`label` is the the aria-label for the Radio group and `name` is the name. When a `defaultOption` is specified, that is the value of the preselected radio, otherwise none are preselected. 

The `onChange` function prop takes the selected value as an argument. 

