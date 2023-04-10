import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Link from 'next/link';
import { useContext } from "react";
import { UiContext } from "@/context/ui";

const Navbar = ({ navbarItems }) => {
    const { openSideMenu } = useContext(UiContext);
    return (
        //Preguntar sobre la elevacion
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Toolbar>
                <IconButton edge="start" onClick={openSideMenu} color="inherit" size="large" sx={{ display: { xs: "flex", md: "none" } }}>
                    <ListOutlinedIcon />
                </IconButton>
                <Typography variant="h5">T</Typography>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>S</Typography>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    {
                        navbarItems.map((el, index) => {
                            return <Link style={{ textDecoration: 'none', color: "inherit" }} key={index} href={el.path}>
                                <Button color="inherit">
                                    {el.title}
                                </Button>
                            </Link>
                        })
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar