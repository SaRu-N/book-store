import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import { colors } from '@/utils/index';
import Slider from '@mui/material/Slider';
const useStyles=makeStyles(theme=>({

rangeContainer:{
    // height:"250px",
    width:"40%",
    margin:"0 auto",
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
},
minRange:{
    width:"100px",
    marginRight:24,
    fontSize:"20px",
    color:colors.black,
    fontWeight:500
},
maxRange:{
    width:"100px",
    marginLeft:24,
    fontSize:"20px",
    color:colors.black,
    fontWeight:500
},
rangeSlider:{
    '& .css-14pt78w-MuiSlider-rail':{
        opacity:1,
        backgroundColor:colors.greenSurface,
        borderRadius:"25px",
        height:"8px"
    },
    '& .css-1gv0vcd-MuiSlider-track':{
        color:colors.primary,
        height:"8px"
        // border:`3px solid ${colors.primary}`
    },
    '& .css-eg0mwd-MuiSlider-thumb':{
        color:"#fff",
        width:"32px",
        height:"32px",
        border:`3px solid ${colors.primary}`
    },
   
},
priceRange:{
    fontSize:"16px",
    lineHeight:"19px",
    fontWeight:600,
    color:colors.black,
    textAlign:"center",
    marginTop:"24px"
}
}))

const RangeSlider = (props) => {
    const {minRange,maxRange}=props;
    const classes=useStyles()
    const [filterValue,setFilterValue]=useState("")
    function valuetext(value) {
        return `${value}°C`;
      }
      
        const [value, setValue] = React.useState([20, 37]);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
    return (
        <div className={classes.rangeContainer}>
                <div className={classes.minRange}>{minRange}</div>
                <Slider
                className={classes.rangeSlider}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            <div className={classes.maxRange}>{maxRange}</div>
            </div>
    )
}

export default RangeSlider