import { AccountCircleOutlined, BookOnlineTwoTone, ContactSupportRounded, DirectionsBusFilledSharp } from '@mui/icons-material'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const Sidemenu = () => {
  return (
    <Drawer 
    anchor = 'right'
    open = {false}
    sx = {{backdropFilter: "blur{4px}", transition: "all 0.5s ease-out"}}>
      <Box>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlined/>
            </ListItemIcon>
            <ListItemText primary = {'Perfil'}/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DirectionsBusFilledSharp/>
            </ListItemIcon>
            <ListItemText primary = {'Rutas'}/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BookOnlineTwoTone/>
            </ListItemIcon>
            <ListItemText primary = {'Boletos'}/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ContactSupportRounded/>
            </ListItemIcon>
            <ListItemText primary = {'Ayuda'}/>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  )
}
