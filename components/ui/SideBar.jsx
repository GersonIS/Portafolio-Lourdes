import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Link from 'next/link';

const SideBar = ({ navbarItems }) => {
    return (
        <Drawer anchor="left" open={false} onClose={() => console.log("cerrando")}>
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: "5px 10px" }} >
                    <Typography variant="h5" textAlign="center">Menu</Typography>
                </Box>
                <List>
                    {
                        navbarItems.map((el, index) => {
                            return <Link style={{ textDecoration: 'none', color: "inherit" }} key={index} href={el.path}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.title} />
                                </ListItemButton>
                            </Link>
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}

export default SideBar