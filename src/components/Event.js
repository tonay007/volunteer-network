import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Event({ title, image, color }) {
    return (
        <Link style={{textDecoration: 'none'}} to={`/register?event=${title}`} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="230"
                        image={image}
                        alt={title}
                    />
                    <CardContent sx={{ backgroundColor: `#${color}`, minHeight: '100px', color: color === "FFBD3E" ? 'black' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{fontFamily: "'Montserrat', sans-serif", fontSize: '15px'}} gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}