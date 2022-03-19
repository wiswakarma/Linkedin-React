import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'

const HeaderOption = ({avatar, Icon, title}) => {
  return (
    <div className='headerOption'>
        {Icon && 
            <Icon className='headerOption__icon'></Icon>
        }
        {avatar && 
            <Avatar className='headerOption__icon' src={avatar} />
        }
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption