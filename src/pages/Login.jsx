import { useContext, useRef, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";
import { AXIOS } from "../services";

const Login = () => {

    const { setLogado } = useContext(LoginContext);

    const emailRef = useRef();
    const senhaRef = useRef();
    const navigate = useNavigate();

    async function onLogin(event) {
        event.preventDefault();
        // let email = document.getElementById('email').value
        // let senha = document.getElementById('senha').value

        let dados = {
            usuario_email: emailRef.current.value,
            usuario_senha: senhaRef.current.value,
        }
        const request = await AXIOS.post('/login', dados)
        console.log(request.data);
        if (request.data.token) {
            sessionStorage.setItem('token',request.data.token)
            sessionStorage.setItem('usuario', JSON.stringify(request.data.usuario))
            setLogado(true)
            navigate("/");
        }
    }

    return (
        <div>
            <div className="bg-white p-[30px] rounded xl:w-[580px]">
                <form onSubmit={onLogin}>
                    <h4 className="text-center text-[22px] leading-[34px] font-bold xl:text-left xl:mb-5">Acesse sua conta</h4>
                    <p className="text-grafite text-center mb-[30px] xl:text-left">Novo cliente? Então registre-se <a href="" className="underline hover:text-rosa">aqui</a>.</p>
                    <label className="block mb-1">Login *</label>
                    <input type="text" placeholder="Insira seu login ou email" className="bg-grafite/5 rounded w-full mb-5 h-[60px] focus:outline-rosa pl-[10px]" ref={emailRef} required />
                    <label className="block mb-1">Senha *</label>
                    <input type="text" placeholder="Insira sua Senha" className="bg-grafite/5 rounded w-full mb-5 h-[60px] focus:outline-rosa pl-[10px]" ref={senhaRef} required />
                    <a href="" className="text-grafite underline hover:text-rosa mb-[30px] block duration-[600ms]">Esqueci minha senha</a>
                    <button className="w-full h-[48px] bg-rosa hover:bg-rosa-hover text-white rounded duration-[600ms] font-bold cursor-pointer">Acessar Conta</button>
                </form>
            </div>
            <div className="hidden">

            </div>
        </div>
    );
}

export default Login;