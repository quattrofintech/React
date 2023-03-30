import Header from './templates/Header';

// MUI
import { Box, Button, ButtonBase, List, ListItem, ListItemText, Modal, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const arrayPalavras = [
  {
    tema: 'Nome',
    palavra: 'Thiago'
  },
  {
    tema: 'Tem na cozinha',
    palavra: 'microondas'
  },
  {
    tema: 'Filme Famoso',
    palavra: 'Zohan'
  },

]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [msg, setMsg] = useState({})
  const [tema, setTema] = useState()
  const [palavra, setPalavra] = useState()
  const [letraChute, setLetraChute] = useState('')
  const [tentativas, setTentativas] = useState(5)
  const [chutes, setChutes] = useState([])
  const inputLetra = useRef('')

  // MODAL
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const chutarLetra = () => {
    const letra = letraChute.toUpperCase()
    if(chutes.includes(letra)){
      setLetraChute('')
      inputLetra.current.focus()
      return
    }

    if (letra.length > 1) {
      if (letra === palavra) {
        ganhou()
      } else {
        setTentativas(t => t - 1)
        setChutes([letra, ...chutes])
      }
    } else {
      verificarLetra(letra)
    }

    setLetraChute('')
    inputLetra.current.focus()
  }

  const verificarLetra = (l) => {
    if (palavra.includes(l)) {
      const letra = document.querySelectorAll('[name="letra"]')
      palavra.split('').forEach((item, i) => {
        if(item === l)
          letra[i].value = l
      })
      if(verificarVitoria(letra))
        ganhou()
    } else {
      setTentativas(t => t - 1)
      setChutes([l, ...chutes])

    }
  }

  const verificarVitoria = (letra) => {
    let vitoria = true
    letra.forEach((item) => {
      if(!item.value)
        vitoria = false
    })
    return vitoria
  }

  const ganhou = () => {
    setMsg({titulo: 'PARABÉNS!', subtitulo: 'Você conseguiu encontrar a palavra secreta.'})
    handleOpen()
    const letra = document.querySelectorAll('[name="letra"]')
    letra.forEach((item) => {
        item.value = ''
    })
    setTema('')
    setPalavra('')
    setChutes([])
    setTentativas(5)
    iniciarJogo()
  }

  
  const perdeu = () => {
    setMsg({titulo: 'VOCÊ PERDEU! ;(', subtitulo: 'Você gastou todas as suas tentativas . . .'})
    handleOpen()
    const letra = document.querySelectorAll('[name="letra"]')
    letra.forEach((item) => {
        item.value = ''
    })
    setTema('')
    setPalavra('')
    setChutes([])
    setTentativas(5)
    iniciarJogo()
  }

  const iniciarJogo = () => {
    const index = Math.floor(Math.random() * arrayPalavras.length)
    const selecionado = arrayPalavras[index]
    setTema(selecionado.tema.toUpperCase())
    setPalavra(selecionado.palavra.toUpperCase())
  }

  if(tentativas < 1){
    perdeu()
  }

  useEffect(() => {
    iniciarJogo()
  }, [])

  return (
    <Box>
      <Header />
      <Box
        component='main'
        sx={{
          width: '100%', paddingTop: '100px'
        }}
      >

        <Box

          sx={{
            width: '100%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '100px', marginBottom: '50px'
          }}
        >
          <Typography
            variant='h4'
            component='h1'
          >
            {tema}
          </Typography>
          <Box
            sx={{
              display: 'flex', flexDirection: 'row', gap: '20px', maxWidth: '800px', minWidth: '300px', background: 'rgba(245, 245, 245, 0.5)', padding: '20px'
            }}
          >
            {
              palavra &&
              palavra.split('').map((item, i) => (
                <TextField key={i} variant="standard" name='letra' disabled />
              ))
            }
          </Box>

          <Box
            sx={{
              display: 'flex', flexDirection: 'row', gap: '20px'
            }}
          >
            <TextField
              variant='filled'
              ref={inputLetra}
              value={letraChute}
              onChange={e => setLetraChute(e.target.value.trim())}
              onKeyDown={e => e.key === 'Enter' && letraChute ? chutarLetra() : null}
            />
            <Button
              variant='outlined'
              onClick={chutarLetra}
            >
              Chutar
            </Button>
          </Box>


        </Box>
        <Box
          sx={{
            width: '300px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'top', overflowY: 'auto', margin: 'auto'
          }}
        >
          <List >
            <Typography
              variant='body1'
              component='p'
            >
              Restam: {tentativas} tentativas
            </Typography>
            {
              chutes.map((item, i) => (
                <ListItem
                  key={i}
                >
                  <ListItemText
                    primary={item}
                  />
                </ListItem>
              ))
            }

          </List>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {
              msg &&
              msg.titulo
            }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
              msg &&
              msg.subtitulo
            }
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;
