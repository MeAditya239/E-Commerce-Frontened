import { Typography, Grid, Button } from '@mui/material'

const Footer1 = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="space-evenly"
        sx={{ bgcolor: "black", color: "white", py: 3, textAlign: "center" }}
      >
        {/* COMPANY */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2 }}>COMPANY</Typography>
          <div><Button color="inherit">about</Button></div>
          <div><Button color="inherit">blog</Button></div>
          <div><Button color="inherit">press</Button></div>
          <div><Button color="inherit">jobs</Button></div>
          <div><Button color="inherit">partners</Button></div>
        </Grid>

        {/* SOLUTIONS */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2 }}>SOLUTIONS</Typography>
          <div><Button color="inherit">marketing</Button></div>
          <div><Button color="inherit">analytics</Button></div>
          <div><Button color="inherit">commerce</Button></div>
          <div><Button color="inherit">insights</Button></div>
          <div><Button color="inherit">support</Button></div>
        </Grid>

        {/* DOCUMENTATION */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2 }}>DOCUMENTATION</Typography>
          <div><Button color="inherit">guides</Button></div>
          <div><Button color="inherit">apiStatus</Button></div>
        </Grid>

        {/* LEGAL */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ mb: 2 }}>LEGAL</Typography>
          <div><Button color="inherit">claim</Button></div>
          <div><Button color="inherit">privacy</Button></div>
          <div><Button color="inherit">terms</Button></div>
        </Grid>
      </Grid>

      {/* COPYRIGHT SECTION */}
      <Grid item xs={12} sx={{ bgcolor: "black", pt: 5, pb: 3, textAlign: "center" }}>
        <Typography variant="body2" component="p" sx={{ color: "green", mb: 1 }}>
          © 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" sx={{ color: "crimson", mb: 1 }}>
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" sx={{ color: "gray" }}>
          Icons made by{' '}
          <a
            href="https://www.freepik.com"
            style={{ color: 'red', textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            style={{ color: 'red', textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
        </Typography>
      </Grid>
    </div>
  );
}

export default Footer1