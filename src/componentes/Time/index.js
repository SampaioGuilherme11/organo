import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    return(

        props.colaboradores.length > 0 && <section className='time' style={
            {
                backgroundColor: props.corSecundaria
            }
        }>
            
            <h3>{props.nome}</h3>

            <span style={
            {
                borderColor: props.corPrimaria
            }
        }>
            </span>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;