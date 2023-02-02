import { apiDB } from '@/apiDB/Api';
import  Layout from '../components/layout/layout';
import { IProduct } from '@/interfaces/Products';
import React, { useEffect, useState } from 'react'
import AXIOSAPI from '@/apiDB/AXIOSAPI';
import { Sidemenu } from '@/components/ui/Sidemenu';
import { Box, Typography } from '@mui/material';
import {GridTheme} from '../components/ui/GridTheme'


const Homepage = () => {
 const [productos, setproductos] = useState()
 useEffect(() => {
    apiDB.get<IProduct>('/products').then(result => {
      //console.log(result)
      setproductos(result);
    })  //punto de petición  (.then para promesas)
  }, []);

  if (productos === undefined) {
    return
  }


  console.log(productos?.data[0]);
  
  const { inStock,price } = productos?.data[0]


  


  return (
    
    <Layout title={"Landing Page"}>
    <Sidemenu />
    <AXIOSAPI />
    <GridTheme />
    
    <Box>
      <Typography>Existencia: {inStock} </Typography>
      <Typography>Existencia: {price} </Typography>
    </Box>
    
    "Hola mundo"
    </Layout>
  )
}

export default Homepage