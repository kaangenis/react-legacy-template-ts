import { AppBar, Button, Container, Drawer, IconButton, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const menuObject = [
        {
            name: 'Homepage',
            path: '/homepage'
        },
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Settings',
            path: '/settings'
        },
    ]

    const toggleDrawer = (open: any) => (event: any) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div
                            onClick={toggleDrawer(true)}
                            style={{
                                cursor: 'pointer',
                                marginRight: '16px',
                                display: { xs: 'block', sm: 'none' } as any
                            }}>
                            <MenuIcon />
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            Panel Name
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    {menuObject.map((page, index) => (
                        <ListItem
                            button
                            onClick={() => navigate(page.path)}>
                            <ListItemText primary={page.name} />
                        </ListItem>
                    ))}
                    <ListItem
                        button
                        onClick={() => { }}>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;