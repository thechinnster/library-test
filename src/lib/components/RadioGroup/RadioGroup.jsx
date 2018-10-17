import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  radio: {
    '&$checked': {
      color: 'black'
    },
  },
  checked: {},
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: this.props.defaultValue || null
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  };

  componentDidMount(){
    this.props.onChange(this.state.value);
  } 

  render() {
    const { classes, radios, helperText, defaultValue } = this.props;
    return <div>
        <RadioGroup aria-label="Gender" name="gender1" className={classes.group} value={this.state.value} onChange={this.handleChange}>
          {radios.map((radio, index) => (
            <FormControlLabel
              key={radio.value}
              value={radio.value}
              label={radio.label}
              disabled={radio.disabled}
              control={
                <Radio
                  classes={{
                    root: classes.radio,
                    checked: classes.checked
                  }}
                />
              }
              
            />
          ))}
        </RadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </div>;
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  )
};

export default withStyles(styles)(RadioButtonsGroup);
