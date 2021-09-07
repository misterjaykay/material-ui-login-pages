import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';

export default function Create() {
    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="primary"
                align="center"
            >
                Create a New Note
            </Typography>

            <Button 
                type="submit" 
                variant="outlined" 
                color="primary"
            >
                Submit
            </Button>
        </Container>
    )
}