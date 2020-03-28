import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0),
  },
}))
const PageTitle = ({ children }) => {
  const classes = useStyle()
  return (
    <Typography
      component="h1"
      variant="h3"
      align="center"
      className={classes.title}>
      {children}
    </Typography>
  )
}

export default PageTitle
