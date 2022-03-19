import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatBubbleIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C5603AQFuSe8YPkrBzA/profile-displayphoto-shrink_100_100/0/1516968842021?e=2147483647&v=beta&t=YjrO9qPGb2klF60mEyKWiImbmMDvWD-SLrf54r_7a2E' title='me'/>
        </div>
    </div>
  )
}

export default Header