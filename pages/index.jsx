import { Layout } from "@/components/layouts";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function HomePage() {
  return (
    <Layout title="Home">
      <Grid container marginTop={3}>
        <Grid item xs={12} md={6} sx={{ color: "white", borderRadius: 5, boxShadow: 10, marginBottom: 3, paddingLeft: { xs: 3, md: 5 }, paddingRight: { xs: 4 } }}>
          <Box textAlign="center">
            <Typography variant="h4" sx={{marginTop: 3}}>Hola! Soy Lourdes</Typography>
            <Typography variant="h6" sx={{ marginBottom: 3, marginTop: 2 }}>Trabajadora Social</Typography>
          </Box>
          <Typography variant="body2" sx={{ marginBottom: 5, textAlign: "justify" }}>
            Bachiller en Trabajo Social, perteneciente a la Universidad Nacional de Trujillo con
            conocimiento en beneficios sociales y Microsoft Excel. Poseo experiencia en el rubro de
            transporte, en el apoyo a la verificación de planillas, orientaciones a los colaboradores
            en seguros y apoyo en recuperación de subsidio; asimismo en la Municipalidad Distrital
            de El Porvenir en Recursos Humanos como practicante pre profesional en el apoyo de
            ingreso de planillas a PLAME, T – REGISTRO, seguimiento de casos sociales ante
            ausentismo laboral, ejecución de proyectos relacionados al clima laboral, en el cual he
            liderado equipos de trabajo con responsabilidad y compromiso. Entre mis principales
            fortalezas se encuentra la perseverancia, eficiencia, optimismo, capacidad de trabajar
            en equipo, orden, disciplina, fácil trato y capacidad de establecer relaciones humanas
            armónicas y espíritu de colaboración. Mi objetivo profesional es poner en práctica mi
            experiencia en cada proceso de Gestión del Talento Humano para brindar un adecuado
            soporte a los colaboradores y a la vez contribuir con los objetivos institucionales para la
            mejora continua de la empresa.
          </Typography>
          <Box textAlign="center" marginBottom={3}>
            <Link style={{ textDecoration: 'none', color: "inherit" }} href="/experiencia">
              <Button variant="contained" endIcon={<ArrowForwardOutlinedIcon />}>
                Conoceme
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
          <Image
            src="/lourdes.png"
            alt="Imagen de home"
            width={300}
            height={350}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}
