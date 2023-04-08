import { Layout } from "@/components/layouts"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

const experiencia = () => {
    return (
        <Layout title="Experiencia">
            <Box sx={{ color: "white" }}>
                <Typography variant="h2" textAlign="center">Mis Trabajos</Typography>
            </Box>
            <Grid container marginTop={4}>
                <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={3} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: 250, textAlign: "center" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image="/lourdes.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: "#202D65", color: "white" }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={3} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image="/lourdes.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{ background: "#202D65", color: "white" }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={3} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image="/lourdes.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{ background: "#202D65", color: "white" }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={3} display="flex" justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image="/lourdes.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{ background: "#202D65", color: "white" }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default experiencia