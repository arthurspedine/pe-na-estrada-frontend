# Pé na Estrada

O site do Pé na Estrada serve para o usuário poder entender sobre o projeto, poder cadastrar/entrar na sua conta, interagir com a IA para marcar um orçamento e consultar orçamentos já criados.

## Lembrar de iniciar o backend
### Como iniciar?
Abrir o projeto com o IntelliJ Ultimate e baixar o [Apache Tomcat](https://tomcat.apache.org/download-90.cgi). Baixe o zip e extraia.
No IntelliJ Ultimate, com o projeto aberto, installe a SDK necessária e siga os passos a seguir:

#### Passo 1
Clique no botão para editar as configurações
![image](https://github.com/user-attachments/assets/9d2e43e7-6ee3-4a3d-94c5-2e63a9e0f414)

#### Passo 2
Adicione uma nova configuração e em seguida digite Tomcat e escolha a opção Local
| ![image](https://github.com/user-attachments/assets/7bbb8f22-b625-4522-adf5-3d854ef67867) | ![image](https://github.com/user-attachments/assets/f8b8a001-cb2b-4268-9d98-d5f33ba395b0) |
|---|---|

#### Passo 3
Após isso, selecione o local do servidor, sendo ele a pasta raiz onde está o Tomcat
![image](https://github.com/user-attachments/assets/666875db-6b81-4ee5-ab94-636b9ba2ce7d)

* EXEMPLO DE PASTA RAIZ

<img src="https://github.com/user-attachments/assets/07f5d1bc-c1aa-4791-9b37-ae58d8a37199" alt="image" style="width: 50%;"/>

#### Passo 4
Após confirmar, sera necessário configurar o Artifact
![image](https://github.com/user-attachments/assets/6f38220c-c98f-4340-9d40-120e0b6f7300)

Selecione a primeira opção e deixe o contexto sendo nulo
| ![image](https://github.com/user-attachments/assets/b99e09d8-2033-400c-8907-eb227687e34e) | ![image](https://github.com/user-attachments/assets/35ccab23-b4fa-4c4f-8270-294eec6c851b) |
|---|---|

#### Passo 5
Após isso, volte para Server e clique no botão + nas configurações de build
![image](https://github.com/user-attachments/assets/4860d3e4-2a38-4fee-bf6f-1dd7c6f4464a)

Selecione "Run Maven Goal" e digite clean install
| ![image](https://github.com/user-attachments/assets/170215fa-0ec0-4562-b1cd-0cde50f4e288) | ![image](https://github.com/user-attachments/assets/292ebf4d-6023-415c-bc40-790eac5ca148) |
|---|---| 

#### Passo 6
Clique no OK, e agora, vamos ordernar.
| ![image](https://github.com/user-attachments/assets/3002b696-a4d7-4aa8-a360-5c860496ef5d) | ![image](https://github.com/user-attachments/assets/fb3a6f96-57b3-4410-a288-86c988f93b9a) |
|---|---| 

Agora, é só clicar no Apply no canto inferior da janela e Run.

Se uma guia do seu navegador for aberta na http://localhost:8080, quer dizer que o servidor está funcionando. Por favor, certifique-se de ter deixado em branco o contexto do Passo 4
![image](https://github.com/user-attachments/assets/93057610-f10f-460a-b543-dc7d99404035)

## Entrar na página Dashboard, tanto como oficina quanto cliente
![image](https://github.com/user-attachments/assets/8dee1094-1a1a-49b4-9eb2-4410d773f3dd)

## Página de Login
Aqui você irá poder logar na sua conta, tanto como oficina quanto cliente, aqui está uma lista de oficinas já cadastradas e clientes.
### Clientes
### Oficinas
```json
{
    "email": "oficina.alphaville@gmail.com",
    "password": "alphaville#1"
}
```
```json
{
    "email": "oficina.leopoldina@gmail.com",
    "password": "leopoldina#1"
}
```
```json
{
    "email": "oficina.butanta@gmail.com",
    "password": "butanta#1"
}

```
```json
{
    "email": "oficina.vilamariana@gmail.com",
    "password": "vilamariana#1"
}
```
```json
{
    "email": "oficina.ibirapuera@gmail.com",
    "password": "ibirapuera#1"
}
```

### Clientes
```json
{
    "email": "clienteteste@gmail.com",
    "password": "Clienteteste#1"
}
```
```json
{
    "email": "arthurspedine@gmail.com",
    "password": "Teste#123"
}
```
![image](https://github.com/user-attachments/assets/6fa15bd3-64b6-49bc-9d45-a0cee79d9e0c)
