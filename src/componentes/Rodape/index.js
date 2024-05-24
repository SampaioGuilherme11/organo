import './Rodape.css'

const Rodape = (props) => {

    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
                        <img src="/imagens/fb.png" alt="Logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/?lang=pt-br" target="_blank" rel='noreferrer'>
                        <img src="/imagens/tw.png" alt="Logo X" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                        <img src="/imagens/ig.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo"/>
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape;