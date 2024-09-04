import { ConteudoCliente, MainContainer, Titulo } from "../../styled";

export default function AreaCliente() {

    return (
        <MainContainer>
            <ConteudoCliente>
                <Titulo className="email">Cliente</Titulo>
                <form id="contactForm">
                    <label htmlFor="name">Email:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Senha:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Enviar</button>
                </form>
            </ConteudoCliente>

        </MainContainer>
    )

}