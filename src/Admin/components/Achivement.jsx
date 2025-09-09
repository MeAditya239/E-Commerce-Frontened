import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'
import Trophy from '../../assests/trophy.png'

const TriangleImage = styled("img")({
    right:0,
    bottom: 0,
    height: 170,
    position:"absolute"

})

const TrophyImage = styled("img")({
    right:36,
    bottom: 20,
    height: 98,
    position:"absolute"

})

const Achivement = () => {
  return (
    <div>
       <Card className='' sx={{position: "relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                    Shop with Aditya
            </Typography>
            <Typography variant='body2'>Congratulations</Typography>
            <Typography variant='h5' sx={{my:3.1}} >500.0k</Typography>  

            <Button size='small' variant='contained'>View Sales</Button>  

            <TriangleImage src="" />


            <TrophyImage src={Trophy}/>
        </CardContent>
       </Card> 
    </div>
  )
}

export default Achivement
