import logo from "../assets/logo.png";
import lupa from "../assets/icon-lupa.png";
import carrinho from "../assets/icon-carrinho.png";
import { NavLink } from "react-router";
import { Children, use, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const Header = () => {

    const { logado } = useContext(LoginContext)

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
                    <a href="">Cadastre-se</a>
                    <a href="/auth" className="btn">Entrar</a>
                    <div className="carrinho">
                        <img src={carrinho} alt="carrinho" />
                        <span>2</span>
                    </div>
                    {
                        logado && (
                            <a><box-icon name='user'>nome</box-icon></a>
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