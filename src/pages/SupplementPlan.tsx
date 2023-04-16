import React from 'react'
import { Box,  Typography } from '@pankod/refine-mui'


function SupplementPlan() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}>Supplement Plan</Typography>


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
          width="50%" // burada değişiklik yapıldı
        >
          Plan 1
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
          width="50%" // burada değişiklik yapıldı
        >
          Plan 1
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
          width="50%" // burada değişiklik yapıldı
        >
          Plan 1
        </Box>
      </Box>


    </Box>

  )
}

export default SupplementPlan