function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `
    let respostaEstaVisivel = false
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)
}
‎assets/styles.css
+125
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,125 @@
:root {
    --text-color: #DBE4EF;
    --card-front-color: #144480;
    --card-back-color: #00F4BF;
}
body {
    background: url('img/bg-desktop.webp');
    font-family: Bai Jamjuree;
}
#container {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4rem;
    gap: 3rem;
}
.cartao {
    margin: 1rem 1rem;
    height: 20rem;
    flex-grow: 1;
    flex-basis: calc(33% - 6rem);
}
.cartao__conteudo {
    background-color: var(--card-front-color);
    text-align: center;
    /* background-color: aquamarine; */
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms ease-in-out;
}
.cartao__conteudo h3 {
    color: var(--text-color);
    border: 1px solid var(--text-color);
    text-align: left;
    padding: 0.5rem;
    position: absolute;
    margin: 0.6rem;
    border-radius: 0.6rem;
    font-size: 1vw;
    backface-visibility: hidden;
}
.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
    font-size: 1.4vw;
}
.cartao__conteudo__pergunta p {
    color: var(--text-color);
    font-weight: 500;
}
.cartao__conteudo__resposta p {
    color: var(--card-back-color);
    font-weight: 700;
}
.cartao.active .cartao__conteudo {
    transform: rotateY(180deg);
}
.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.cartao__conteudo__resposta {
    transform: rotateY(180deg);
    background-color: rgba(0, 244, 191, 0.2);
    border: 4px solid var(--card-back-color);
}
footer {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
}
footer p {
    text-align: center;
    font-size: 0.6rem;
    margin-top: 0.5rem;
}
@media (max-width: 560px) {
    body {
        background: url('img/bg-mobile.webp')
    }
    .cartao {
       flex: 1 0 calc(100% - 1rem) 
    }
    .cartao__conteudo h3 {
        font-size: 3.5vw;
    }
    .cartao__conteudo p {
        font-size: 4.2vw
    }
}
@media (max-width: 800px) {
    .cartao {
        flex: 1 0 calc(100% - 1rem) 
     }
    .cartao__conteudo h3 {
        font-size: 3.0vw;
    }
    .cartao__conteudo p {
        font-size: 3.5vw
    }  
}
‎index.html
+7
-27
Original file line number	Diff line number	Diff line change
@@ -3,13 +3,13 @@
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/styles.css">
    <title>Flashcard</title>
</head>
<body>
    <main>
        <section id="container">
            <article class="cartao">
            <!-- <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
@@ -19,33 +19,13 @@ <h3>Programação</h3>
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é CSS?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                    <p>O CSS é uma linguagem de estilização</p>
                    </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é CSS?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                    <p>O CSS é uma linguagem de estilização</p>
                    </div>
                </div>
            </article>
            </article> -->
        </section>
    </main>
    <footer>
        <p>Projeto desenvolvido pela Alura, sem fins lucrativos</p>
        <p>Projeto desenvolvido pelo 2D - Colégio Estadual José Gomes</p>
    </footer>
    <script src="app.js"></script>
    <script src="perguntas.js"></script>
</body>
</html>
</html>
‎perguntas.js
+162
-3
Original file line number	Diff line number	Diff line change
@@ -1,4 +1,163 @@
criaCartao (
    'Programação',
    'O que é JavaScript?',
    'O JavaScript é uma linguagem de programação'
    'Para que serve o main de uma pagina html?',
    'Serve para eu anexar todo conteúdo principal do meu site'
)
criaCartao (
    'Robótica',
    'Por que o carrinho de robótica não deu certo?',
    'Estava com mal contato no jumper que conectava na placa'
)
criaCartao (
    'História',
    'Quais foram algumas das principais revoltas que ocorreram durante a Primeira República do Brasil?',
    'Revolta das vacinas, revolta de canudos, revolução federalista, movimento do contestado.'
)
criaCartao (
    'Geografia',
    'Quais são as estações do ano ?',
    'Outono, Inverno, Verão, Primavera'
)
criaCartao (
    'Empreendedorismo',
    'O que é MEI?',
    'Microempreendedorismo individual '
)
criaCartao (
    'Empreendedorismo',
    'O que é receita recorrente?',
    'Fluxo continuo de faturamento gerado para a empresa'
)
criaCartao (
    'Empreendedorismo',
    'O que e previsibilidade?',
    'qualidade da pessoa que se comporta da forma como se espera'
)
criaCartao (
    'Empreendedorismo',
    'Quais são as vantagens de um negócio ser escalável?',
    'as empresa s adotam melhorias nos processos e conquistam mais credibilidade para a marca'
)
criaCartao (
    'Biologia',
    'Quais são os tipos de agrotóxicos?',
    'Inseticidas, fungicidas, herbicidas, esfoliantes e fumigantes'
)
criaCartao (
    'Biologia',
    'Qual o conceito de saúde?',
    'Um estado de completo bem-estar físico, mental e social, não apenas na ausência de doenças'
)
criaCartao (
    'Biologia',
    'O que são Heredogramas?',
    'São quase como árvores genealógicas, mas que focam em características específicas e como elas são transformadas de geração para geração da família',
)
criaCartao (
   'Biologia',
    'O que são vacinas?',
    'As vacinas são produtos biológicos que estimulam o organismo e se defender de invasores'
)
criaCartao (
    'química',
    'o que são amidas?',
    'Amidas são compostos orgânicos derivados de ácidos, onde o grupo hidroxila (–OH) é substituído por um grupo amino (–NH2).'
)
criaCartao (
   'química',
    'o que são aminas?',
    'Aminas são uma função ogânica em que o nitrogênio liga-se diretamente a um grupo acila.' 
)
criaCartao (
    'química',
    'o que significa o termo HPA?',
    'Hidrocarbonetos Policíclicos Aromáticos.'
)
criaCartao (
    'química',
    'como calcular o deltaH?',
    'deltaH=HP-HR.'
)
criaCartao (
    'química',
    'o que são ácidos carboxílicos',
    'São compostos orgẫnicos que possuem o grupo funcional  carboxila em sua estrutura.'
)
criaCartao (
    'química',
    'qual o significado da palavra Isomeria?',
    'Iso=igual Meria= partes.'
)
criaCartao (
    'quínica',
    'cite um exemplo de Fenol.',
    'Xilenol-(CH3)2 C6H3OH.'
)
criaCartao (
    'Emprendedorismo',
    'Características de um empreendedor de sucesso?',
    'Resiliência, adaptabilidade, visão, proatividade e boas habilidades de comunicação.'
)
criaCartao (
    'Emprendedorismo',
    'Como identificar uma oportunidade de negócio?',
   'Analise o mercado, identifique problemas e estude as necessidades dos clientes.'
)
criaCartao (
    'Emprendedorismo',
    'Passos para um plano de negócios?',
   'Inclua descrição do negócio, análise de mercado, plano de marketing e finanças.'
)
criaCartao (
    'Emprendedorismo',
    'Impacto do networking?',
    'Ajuda a fazer conexões, encontrar mentores e atrair investidores.'
)
criaCartao (
    'Emprendedorismo',
    'Desafios de novos empreendedores?',
    'Falta de capital, inexperiência e competição.'
)
criaCartao (
    'Emprendedorismo',
    'Como usar tecnologia para escalar?',
    'Automatize processos, use marketing digital e analise dados de clientes.'
)
criaCartao (
    'Empreendorismo',
    'Melhores práticas para fluxo de caixa?',
    'Monitore receitas e despesas, crie um orçamento e planeje pagamentos.'
)
criaCartao (
    'Empreendorismo',
    'Como lidar com fracasso?',
     'Aprenda com os erros, ajuste a abordagem e mantenha a resiliência.'
)