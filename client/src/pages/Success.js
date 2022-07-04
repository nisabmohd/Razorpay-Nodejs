import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export function Success() {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'25%',margin:'auto',justifyContent:'center',alignItems:'center',marginTop:'9vh'}}>
        <CheckCircleIcon style={{color:'green',fontSize:'198px'}}/>
        <h2>Success</h2>
    </div>
  )
}
