import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '24px',
  },
  variants:{
    primary:{
      bg:'#0968A8',
      px:'18px',
      color:'white',
      fontSize:'15px',
      fontWeight:500,
      _hover:{
        opacity:0.8
      }
    },
    outlined:{
      bg:'transparent',
      px:'18px',
      color:'#0968A8',
      fontSize:'15px',
      border:'1px solid #0968A8',
      fontWeight:500,
      _hover:{
        opacity:0.8
      }
    },
    inActive:{
      bg:'#F1F1F1',
      px:'18px',
      color:'#ACACAC',
      fontSize:'15px',
      fontWeight:500,
      _hover:{
        opacity:0.8
      }
    },
  }
};
