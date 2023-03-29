import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Material UI
import { Box, Link, Button, Fab, Typography, Rating, TextField, InputAdornment, Avatar, Chip, Tooltip, Alert, AlertTitle, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress, Snackbar, IconButton } from '@mui/material';

// ICONS
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { deepOrange } from '@mui/material/colors';

const Login = ({ user }) => {
    const navigate = useNavigate()
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [msg, setMsg] = useState('')
    const [value, setValue] = useState(0)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const [open, setOpen] = React.useState(false);

  const handleClickToast = () => {
    setOpen(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const logar = (e) => {
        e.preventDefault()
        setMsg('')
        if (cpf.length !== 11)
            return setMsg('CPF inválido!')
        if (cpf !== user.cpf || senha !== user.senha)
            return setMsg('CPF e/ou Senha incorretos')
        navigate('/home')
    }

    const action = (
        <Fragment>
          <Button color="secondary" size="small" onClick={handleCloseToast}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseToast}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );

    return (
        <div>
            {/* <form onSubmit={logar}>
                {
                    msg &&
                    <div>
                        <p>{msg}</p>
                    </div>
                }
                <label>
                    CPF
                    <input type="number" placeholder='CPF' title='apenas números' required minLength={11}
                        onChange={e => setCpf(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Senha
                    <input type="password" placeholder='Sua senha' title='Digite sua senha' required minLength={6}
                        onChange={e => setSenha(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" />
            </form> */}

            <Button variant='contained' color='secondary'>Testando MUI</Button>
            <Button variant='contained' color='success'>Testando MUI</Button>
            <Button variant='contained' disabled>Testando MUI</Button>
            <Button variant="contained" disableElevation>Chapado </Button>
            <Button variant="outlined" disableElevation color='error'>Chapado </Button>
            <Button variant="outlined" disableElevation color='error' size='large'>Chapado </Button>
            <Button variant='contained' color='secondary'>Testando MUI</Button>
            <Button
                variant="contained"
                endIcon={<SendIcon />}
            >
                Send
            </Button>
            <Button
                componet={Link}
                href='/'
                variant="contained"
                color='primary'
            >
                Ir
            </Button>

            <Fab color="default" aria-label="add" size='small'>
                <AddIcon />
            </Fab>


            {/* RATING */}
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>

            <TextField
                id="standard-basic" label="Email" variant="standard"
                placeholder='Digite seu Email'
                onChange={(e) => { }} />

            <TextField
                id="input-with-icon-textfield"
                label="Username"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <Avatar alt="Kenji" src="/static/images/avatar/3.jpg" sx={{ bgcolor: deepOrange[500] }} />
            <Chip label="Deletar" variant="outlined" onDelete={() => alert('Me deleta não, prfvrrrr')} />


            <Tooltip title="Add" placement="left">
                <Button>top-start</Button>
            </Tooltip>

            <Typography variant="overline" component="p">
                h1
            </Typography>

            <Alert severity="info">This is an error alert — check it out!</Alert>

            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <CircularProgress />
            <Button onClick={handleClickToast}>Open simple snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
            />

        </div>
    )
}

export default Login