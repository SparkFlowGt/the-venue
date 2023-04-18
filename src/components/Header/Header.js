import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import SideDrawer from '../../utils/sideDrawer';

import { useEffect,useState } from 'react';





const Header = ()=> {
    const [drawerOpen,setDrawerOpen] = useState(false)
    const toggleDrawer =(value) =>{
        setDrawerOpen(value)
    }
    
    return(
        
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#2f2f2f',
                boxShadow:'none',
                padding:'10px 0px'
            }}
        >
            <Toolbar>

            <div className="header_logo">
                <div className="font_righteous header_logo_venue">The venue</div>
                <div className="header_logo_title">Musical Events</div>
            </div>

            <IconButton 
                aria-label="Menu"
                color="inherit"
                onClick={()=>toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>

            <SideDrawer
            open = {drawerOpen}
            onClose={(value)=>toggleDrawer(value)}
            />

            </Toolbar>
        </AppBar>
    )

}

 export default Header;