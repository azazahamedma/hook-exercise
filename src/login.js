import React , {useState} from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography, Link, FormControlLabel, FormGroup} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CheckBox } from "@mui/icons-material";
const Login = ()=> {
    const paperStyle={padding :20, height: '70vh', width:280 , margin:"20px auto"}
    const avatarStyle={backgroundColor: 'green'}
    const btstyle={margin:'8px 0'}
    const txtstyle={margin:'4px 0'}
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

    const handlePrintValues = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  
  };
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='Center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                 <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder="Enter username" fullWidth required style={txtstyle} value={username} onChange={handleNameChange}/>
                <TextField label='Password' placeholder="Enter password" type="password" fullWidth required style={txtstyle} value={password} onChange={handlePasswordChange} />
                <Grid align='left'>
                <FormGroup>
                <FormControlLabel control={<CheckBox color="primary" />} label="Remember me" />
                </FormGroup>
                </Grid>
                <Button variant="contained" type='submit' color='primary' fullWidth style={btstyle} onClick={handlePrintValues}>Sign in</Button>
                <Typography>
                <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography> Do you have an account? 
                <Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>        
    );
}
export default Login;