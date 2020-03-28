import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import FlareIcon from '@material-ui/icons/Flare'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))
const NavigationBar = () => {
  const classes = useStyles()
  return (
    <AppBar position="relative">
      <Toolbar>
        <FlareIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Next Changarro
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar
