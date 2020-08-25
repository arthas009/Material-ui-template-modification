import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Popover } from '@material-ui/core';
import { Grid, Avatar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'left',
    overflowX: 'auto',
    height:   50,
    borderBottom: `1px solid gray`,
  },
  toolbarTitle: {
    marginLeft:theme.spacing(1),

  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    overflowX: 'auto',
    color: 'black',
    borderBottom: `1px solid gray`,

  },
  menuButton:
  {

  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
  logo: {
    maxWidth: 150,
    maxHeight: 90,
  },
  popover: {
    pointerEvents: 'none',
  },
  phoneIcon: {

  },
  emailIcon: {
    marginLeft:theme.spacing(3),

  },
}));



export default function Header(props) {
  const classes = useStyles();
  const { sections, title, handleClick } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
      <PhoneIcon fontSize="small" />  
        <Typography
          component="h8"
          variant="body2"
          color="inherit"
          className={classes.toolbarTitle}
        >
        +90 546 457 72 59
        </Typography>
      <EmailIcon className={classes.emailIcon} fontSize="small" />  
        <Typography
          component="h8"
          variant="body2"
          color="inherit"
          className={classes.toolbarTitle}
        >
        yusufalti1997@gmail.com
        </Typography>

        </Toolbar>

      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <div>
            <Button
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              className={classes.menuButton}
              onClick={() => handleClick(section.title)}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              onMouseClick={handlePopoverClose}
            >
              {section.title}
            </Button>
          
          </div>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};