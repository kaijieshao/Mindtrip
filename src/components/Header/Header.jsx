import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

// import logo from './public/mindtrip.png'

import useStyles from './styles'

const Header = ({ setCoordinates }) => {
  const classes = useStyles()

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({ lat, lng })
  }

  return (
    <AppBar
      position='static'
      style={{
        background: 'linear-gradient(to right, #000046, #1CB5E0)',
      }}
    >
      <Toolbar className={classes.toolbar}>
        <img
          src='/mindtrip.png'
          alt='mindtrip logo'
          className={classes.logo}
          style={{ height: '70px' }}
        />

        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            EXPLORE - DISCOVER - ENJOY
          </Typography>

          {/* Add onLoad, onPlaceChanged handlers */}
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
