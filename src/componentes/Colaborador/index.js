import './Colaborador.css'

const Colaborador = (props) => {
    return (
            <div className='container__colaborador'>
                <div className='container__cabecalho' style={{backgroundColor: props.corDeFundo}}>
                    <img src={props.imagem} alt={props.nome}/>
                </div>
                <div className='container__rodape'>
                    <h4>{props.nome}</h4>
                    <h5>{props.cargo}</h5>
                </div>
            </div>
    )
}

export default Colaborador;