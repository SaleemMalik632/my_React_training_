import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2}> 
      {/* this code is for showing matrial icon in the web   */} 
      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" src="/broken-image.jpg" >  SM  </Avatar>  
      <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="" />
      <Skeleton animation={true} />
    </Box> 
      
    </Stack>
  );
} 