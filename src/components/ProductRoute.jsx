import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const ProductRoute = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"column",borderRadius:"20px",marginTop:"-50px",width:"80%",margin:"auto"}}>

<Link to="./allproducts">
<ArrowForwardOutlinedIcon style={{backgroundColor:"black",color:"white",width:"40px",height:"40px", borderRadius:"80px", margin:"10px"}} fontSize="large" /></Link>
<h3>All Products</h3>
</div>
  )
}

export default ProductRoute