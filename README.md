# ❓ Ziuq-quiZ ❓

Aplicação de quiz com perguntas sobre conhecimentos gerais, criado com NextJS e api criada com NodeJS.

O quiz pode ser respondido pelo jogador uma vez ao dia. Após responder pela primeira vez, os dados serão salvos no localStorage do cliente para validar uma segunda tentativa de resposta no mesmo dia. Se for confirmado que a tentativa subsequente está sendo feita no mesmo dia, o jogador será direcionado para a tela de pontuação. Caso contrário, o usuário será permitido responder novamente.

> Regras do quiz:    
> - São 10 perguntas de conhecimentos gerais
> - O jogador possui 30 segundos para responder cada pergunta

## ▶️ Testando a aplicação

> Executar a aplicação em sua máquina:

com o progeto em seu computador, rode na pasta [quiz](/quiz):
```
npm install
```

em seguida: 
```
npm run dev
```

Para executar a aplicação em seu computador deve rodar a [API](/api)

---------------------------------------------------

> Utilizar projeto em funcionamento: [Ziuq quiz diário](ziuq-quiz.vercel.app)

> **Note**        
>  A API está hospedada em um serviço que a desativa quando há uma média baixa de requisições

## 💠 Funcionalidades

- Responder o quiz uma vez por dia
- Visualizar o tempo que falta para uma nova tentativa
- Ver sua última pontuação

## 🔱 Ferramentas utilizadas

- React JS com NextJS
- TypeScript
- Axios
- DayJs
- Sass

### Tela inicial da aplicação
![Screenshot_1](https://user-images.githubusercontent.com/72395637/217956385-37e9b143-c02e-4ac1-a227-991196ae871a.png)

### Tela da sequência de perguntas
![Screenshot_2](https://user-images.githubusercontent.com/72395637/217956659-259e0a0e-aa9b-4a05-a12d-38ea265cbf64.png)

### Tela de última pontuação
![Screenshot_3](https://user-images.githubusercontent.com/72395637/217956902-a200ecc0-5bf9-4081-8727-e14b34cb7e38.png)

