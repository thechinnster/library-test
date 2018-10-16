import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from '@material-ui/core';

const styles = theme => ({
  label: {
    textTransform: 'capitalize'
  },
    root: {
      '&$checked': {
      color: 'black'
    },
  },
  checked: {  }
});



class ChecklistMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: 0,
      checked: [this.props.options[0]]
    };
  }
  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    this.props.menuSelect(this.props.options[index]);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleToggle = option => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(option);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(option);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes, options, label, defaultOption } = this.props;
    const { anchorEl, checked } = this.state;
    const menuId = `${label}`;
    return (
      <div>
        <Typography className={classes.label}>
          {label}: &nbsp;
          <Button
            variant="outlined"
            size="small"
            aria-haspopup="true"
            onClick={this.handleClickListItem}
          >
            {checked.length > 0 ? checked.join(", ") : defaultOption}
          </Button>
        </Typography>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          role="menu"
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem key={option} onClick={this.handleToggle(option)}>
              <Checkbox
                classes={{ root: classes.root, checked: classes.checked }}
                checked={this.state.checked.indexOf(option) !== -1}
                tabIndex={-1}
                disableRipple
              />
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

ChecklistMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  menuSelect: PropTypes.func.isRequired, 
};

export default withStyles(styles)(ChecklistMenu);
