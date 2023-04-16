import React from 'react'
import {Box, Stack, Typography} from '@pankod/refine-mui'


import { updateSampleSection } from '../Middleware/sample-base';


function TrainPrograms() {

  React.useEffect(() => {
    updateSampleSection();
}, []);
//Map the appropriate columns to fields property


  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}>
       Train Programs
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={2}>

<Box
  flex={1}
  display="flex"
  bgcolor="#fcfcfc"
  flexDirection={{ xs: 'column', sm: 'row' }}
  justifyContent="space-between"
  alignItems="center"
  pl={3.5}
  py={2}
  gap={2}
  borderRadius="15px"
  minHeight={"110px"}
  width="fit-content"
>
  <Stack direction="column">
    <Typography fontSize={14} color="#808191"> Monday </Typography>


  </Stack>
</Box>

<Box
  flex={1}
  display="flex"
  bgcolor="#fcfcfc"
  flexDirection={{ xs: 'column', sm: 'row' }}
  justifyContent="space-between"
  alignItems="center"
  pl={3.5}
  py={2}
  gap={2}
  borderRadius="15px"
  minHeight={"110px"}
  width="fit-content"
>
  <Stack direction="row">
    <Typography fontSize={14} color="#808191"> Tuesday </Typography>


  </Stack>
</Box>

<Box
  flex={1}
  display="flex"
  bgcolor="#fcfcfc"
  flexDirection={{ xs: 'column', sm: 'row' }}
  justifyContent="space-between"
  alignItems="center"
  pl={3.5}
  py={2}
  gap={2}
  borderRadius="15px"
  minHeight={"110px"}
  width="fit-content"
>

  <Typography fontSize={14} color="#808191"> Wednesday </Typography>



</Box>
<Box
  flex={1}
  display="flex"
  bgcolor="#fcfcfc"
  flexDirection={{ xs: 'column', sm: 'row' }}
  justifyContent="space-between"
  alignItems="center"
  pl={3.5}
  py={2}
  gap={2}
  borderRadius="15px"
  minHeight={"110px"}
  width="fit-content"
>

  <Typography fontSize={14} color="#808191"> Friday </Typography>



</Box>


</Box>
    </Box>
  )
}

export default TrainPrograms