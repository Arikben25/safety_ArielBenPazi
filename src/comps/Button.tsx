import Button from '@mui/material/Button';

interface Props{
    str:string;
    type:"button" | "submit" | "reset"
}

export default function ButtonUsage(props:Props) {
  return <Button type={props.type} variant="contained" sx={{
        backgroundColor: '#d3daf4ff',        
        color: '#333333',        
        '&:hover': {
          backgroundColor: '#bcc2d4ff', 
          boxShadow: 'none',
        }, 
        boxShadow: 'none', 
      }}>{props.str} </Button>;
}