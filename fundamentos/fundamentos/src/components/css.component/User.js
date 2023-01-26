import css from './Index.module.css'
const User = ({user, status, id, evento}) => {
    return(
        <div className={status ? 'conectado' : 'desconectado'}>
            <span>{id}</span>
            <span>{user}</span>
            {status && <button onClick={() => evento(id)}>Desconectar</button>}
            {!status && <button onClick={() => evento(id)}>Conectar</button> }

            {/* O mesmo resultado             
                {
                    status
                    ?
                        <button>Desconectar</button>
                    :
                        <button>Conectar</button> 
                } 
            */}
        </div>
    )
}

export default User