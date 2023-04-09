import { Layout } from "@/components/layouts";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const contacto = () => {
    return (
        <Layout title="Contacto">
            <Box textAlign="center" color="white">
                <Typography variant="h3">Contactame</Typography>
            </Box>
            <Grid container marginTop={3}>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
                    <Image
                        src="/lourdes2.jpeg"
                        alt="Imagen de home"
                        width={300}
                        height={350}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ borderRadius: 5, boxShadow: 5 }}>
                    <Box
                        component="form"
                        paddingBottom={3}
                        noValidate
                        autoComplete="off"
                    >
                        <Box sx={{ textAlign: "center", color: "white" }}>
                            <Typography variant="h4">Dejame tu Consulta</Typography>
                            <Typography variant="span">Me gustaria saber tu opinion despues de conocerme</Typography>
                            <Box sx={{ marginTop: 3, marginBottom: 3 }}>
                                <TextField id="standard-basic" placeholder="Escribe tu correo" sx={{ maxWidth: "240px", textDecoration: "none", backgroundColor: "white", borderRadius: "5px" }} label="Correo" variant="standard" />
                            </Box>
                            <TextField
                                id="standard-multiline-static"
                                label="Mensaje"
                                multiline
                                rows={5}
                                placeholder="Escribe tu mensaje"
                                variant="standard"
                                sx={{ textDecoration: "none", backgroundColor: "white", borderRadius: "5px", marginBottom: 3 }}
                            />
                            <Box>
                                <Link style={{ textDecoration: 'none', color: "inherit" }} href="/experiencia">
                                    <Button variant="contained" endIcon={<SendOutlinedIcon />}>
                                        Enviar
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" marginTop={5}>
                    <Box sx={{ backgroundColor: "white", color: "black", width: "150px", height: "50px", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Link style={{ textDecoration: 'none', color: "inherit" }} href="https://www.facebook.com/lourdes.rodriguez.98229241">
                                <FacebookIcon />
                            </Link>
                        </Box>
                        <Box>
                            <Link style={{ textDecoration: 'none', color: "inherit" }} href="https://www.instagram.com/luivodelacruzrodriguez/">
                                <InstagramIcon />
                            </Link>
                        </Box>
                        <Box>
                            <Link style={{ textDecoration: 'none', color: "inherit" }} href="https://www.facebook.com/lourdes.rodriguez.98229241">
                                <TelegramIcon />
                            </Link>
                        </Box>
                        <Box>
                            <Link style={{ textDecoration: 'none', color: "inherit" }} href="https://www.facebook.com/lourdes.rodriguez.98229241">
                                <WhatsAppIcon />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default contacto