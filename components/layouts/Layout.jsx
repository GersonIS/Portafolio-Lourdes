import { Box } from "@mui/material"
import Head from "next/head"
import Navbar from "../ui/Navbar"
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SideBar from "../ui/SideBar";

const navbarItems = [
    {
        title: "Home",
        path: "/",
        icon: <CottageOutlinedIcon />
    },
    {
        title: "Experiencia",
        path: "/experiencia",
        icon: <WorkspacePremiumOutlinedIcon />
    },
    {
        title: "Contacto",
        path: "/contacto",
        icon: <ConnectWithoutContactOutlinedIcon />
    }
]

const Layout = ({ children, title = "Pon tu titulo :c" }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            {/*NavBar*/}
            <Navbar navbarItems={navbarItems} />
            {/*SideBar*/}
            <SideBar navbarItems={navbarItems} />
            {/*Main*/}
            <Box sx={{ padding: "10px 20px" }} >
                {children}
            </Box>
        </Box>
    )
}

export default Layout