import logo from "../assets/logo.png";
import lupa from "../assets/icon-lupa.png";
import carrinho from "../assets/icon-carrinho.png";
import { NavLink } from "react-router";
import { Children, use, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { AXIOS } from "../services";
import Login from "../pages/Login";

const Header = () => {

    const { logado, usuario } = useContext(LoginContext)
    const { setLogado } = useContext(LoginContext);
    let box = document.querySelector('.caixa');

    function opcao() {


        box.classList.remove("hidden")
        box.classList.add("block");

    }
    function sair() {
        sessionStorage.removeItem('usuario')
        sessionStorage.removeItem('token')
        setLogado(false)
        console.log('deu certo')
        box.classList.add("hidden")
        box.classList.remove("block");

    }
    function continuar() {
        box.classList.add("hidden")
        box.classList.remove("block");
    }
    return (
        <header>
            <div className="topo">
                <div className="logo">
                    <img src={logo} alt="Digital store logo" />
                    DIGITAL STORE
                </div>
                <div className="buscador">
                    <input type="text" placeholder="Pesquisar produto..." />
                    <img src={lupa} alt="lupa" />
                </div>
                <div className="acoes">
                    {
                        logado ? (
                            usuario.usuario_nome ? (
                                <div className="flex gap-[20px] ">
                                    <div className=" relative group duration-700 rounded hover:fill-rosa">
                                        <a className=" cursor-pointer flex gap-[10px] duration-700" >
                                            <box-icon name='user' className=""></box-icon>
                                            {usuario.usuario_nome}
                                        </a>
                                        <div className="absolute hidden group-hover:block  group-hover:fill-rosa  w-full text-center pt-[10px] duration-700">
                                            <button className="cursor-pointer text-rosa" onClick={opcao}>Sair</button>
                                        </div>
                                    </div>
                                    <div className="fixed bg-rosa z-50 hidden gap-[10px] items-center rounded-2xl px-[40px] py-[10px] left-[550px] top-[250px] duration-700 caixa">
                                        <h1 className="mb-[20px]">Tem Certeza?</h1>
                                        <div className="flex gap-[10px] *:cursor-pointer *:bg-amarelo *:px-[10px] *:rounded">
                                            <button onClick={sair}>Sim</button>
                                            <button onClick={continuar}>Não</button>
                                        </div>
                                    </div>
                                    <div className="carrinho">
                                        <img src={carrinho} alt="carrinho" />
                                        <span>2</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                </>
                            )
                        ) : (
                            <>
                                <a href="">Cadastre-se</a>
                                <a href="/login" className="btn">Entrar</a>
                            </>
                        )
                    }

                </div>
            </div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/produtos'}>Produtos</NavLink>
                <NavLink to={'/categorias'}>Categorias</NavLink>
                {
                    logado && (
                        <NavLink to={'/meus-pedidos'}>Meus Pedidos</NavLink>

                    )
                }

            </nav>
        </header>
    );
}

export default Header;