import React from 'react'
import { Button } from '@material-ui/core'
import { logout, isAuthenticated } from '../services/auth'
import logger from '../services/logger'

const HomePage = () => {
  logger.debug(`HomePage > isAuthenticated? ${isAuthenticated() ? 'yes' : 'no'}`)
  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={async () => {
          logger.debug('HomePage.onClick!')
          await logout()
          window.location.replace('/')
        }}
      >
        Sign Out
      </Button>
    </div>
  )
}

export default HomePage
