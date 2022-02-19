import {Dialog,DialogContent,makeStyles,Box,TextField,Button,Divider} from "@material-ui/core"



export default function Dialogs({open,setopen}){

    // login button is set by login click and also state manage by the usestate when user click on button
    //  it become true this state transfer as a props to dialog component

    const handleClose = () => {
        setopen(false);
       
      };

      const useStyle=makeStyles({
        box2:{
       display:"flex",
       flex:"1",
       flexDirection:"column",
       
       padding:"30px 31px",
       marginTop:"10px"

        }

      })
 
    

      const classes=useStyle();

    return(

        <>
          <Dialog open={open}  onClose={handleClose}>

          <DialogContent style={{height:"70vh",width:"90vh"}} >
                      <h1>Basic Model</h1>
                      <Divider/>
          
         
                        <Box className={classes.box2}>
                                   <label>Name:</label>
                                    <TextField name="Name" label="Enter Name"/>
                                    <Divider/>
                                    <label>Email:</label>
                                    <TextField name="Email" label="Enter Email"/>
                                    <Divider/>
                                    <label>Phone number:</label>
                                    <TextField name="Phone" label="Enter Phone"/>
                                    <Divider/>
                                    <label>Website:</label>
                                    <TextField name="Website" label="Enter website"/>
                                    <Divider/>
                                     <Box style={{display:"flex",padding:"12px 30px",margin:"10px 20px"}}>
                                          <Button style={{backgroundColor:"blue", padding:"10px 10px",marginLeft:"10px",color:"white"}} onClick={handleClose}>Cancel</Button>
                                           <Button style={{backgroundColor:"blue", padding:"5px 5px",marginLeft:"10px",color:"white"}}>Ok</Button>
                                           </Box>

                        </Box>
          
            
          </DialogContent>

     </Dialog>

        </>
    )
}