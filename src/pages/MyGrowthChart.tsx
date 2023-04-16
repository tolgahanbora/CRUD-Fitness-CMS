import React from 'react'
import { Box, Typography } from '@pankod/refine-mui'
import { LineChart, YearlyChart, Note } from '../components/index'



function MyGrowthChart() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}>Monthly Growth Chart</Typography>

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
          width={"fit-content"}
        >
          <LineChart />


        </Box>

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
          width={"fit-content"}
        >
          <YearlyChart />
        </Box>

      </Box>
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
          width={"fit-content"}
        >
          <Note />
        </Box>
      </Box>

    </Box>

  )
}


export default MyGrowthChart