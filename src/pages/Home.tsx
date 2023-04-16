import { Typography, Box, Stack } from '@pankod/refine-mui'
import React from 'react'

import { AccumulationDoughnut, TrainProgram, DietList, YearlyChart, Profile } from '../components/index'

function Home() {
  return (

    <Box>
      <Typography fontSize={25} fontWeight={700}> Dashboard</Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={2}  >
        <Box
          flex={1}
          display="flex"
          bgcolor="#fcfcfc"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          pl={{ xs: 1.5, sm: 3.5 }}
          py={{ xs: 1, sm: 2 }}
          gap={2}
          borderRadius="15px"
          minHeight={{ xs: '90px', sm: '110px' }}
          width="fit-content">

          <AccumulationDoughnut />

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
          <Stack direction="column">
            <Typography color="#404446">
              Diet Plan
            </Typography>
            <DietList />
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
          <Stack direction="column">
            <Typography color="#404446" >
              Train Program
            </Typography>
            <TrainProgram />
          </Stack>
        </Box>
      </Box>

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
      
          <YearlyChart />

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

          <Stack direction="column">

            <Profile />

          </Stack>

        </Box>
      </Box>

    </Box>


  )
}

export default Home