import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Container id="AboutMe" maxWidth="md" sx={{height:"100vh"}}>
      <Typography
        variant="h1"
        component="h3"
        align="center"
        sx={{
        }}
      > About Me
      </Typography>
      <Typography
        variant="h6"
        component="p"
        align="center"
        gutterBottom
      >
        <Box>
            Full Stack Web Dev
        </Box>
      </Typography>

      <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam iure enim vel blanditiis necessitatibus eum id quis suscipit accusamus tenetur ratione cupiditate harum optio reiciendis libero similique, adipisci debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni amet. Suscipit rem fugiat excepturi, sed eos nemo recusandae sint omnis enim dolores neque culpa dicta a natus. Deserunt, facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a! Error, quia. Saepe iure praesentium ducimus ullam ratione blanditiis id doloribus sapiente nemo tempora ea vel ipsa odio, sed hic.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet magnam eum reprehenderit perferendis. Hic, ipsum qui quas optio nobis aliquam cum vel impedit eos dolorum. Architecto obcaecati alias perferendis?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, esse fugit tempore possimus minus sed ipsam nobis, voluptatibus beatae praesentium inventore asperiores quisquam perspiciatis quibusdam odio, necessitatibus sapiente neque quam?
      </Typography>
    </Container>

  )
}
