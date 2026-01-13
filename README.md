# Divertida Mente 2 - Landing Page

Um projeto de Landing Page moderno e responsivo para o filme "Divertida Mente 2", focando nas emoções primárias e nas novas emoções da adolescência de Riley.

## 🚀 Tecnologias

- **HTML5**: Estrutura semântica e BEM.
- **SCSS (SASS)**: Estilização avançada com variáveis, mixins e aninhamento.
- **JavaScript (Vanilla)**: Interatividade e animações.
- **Gulp**: Automação de tarefas (compilação de SASS, servidor local).

## 🛠️ Como Rodar o Projeto

Siga os passos abaixo para visualizar o projeto em sua máquina:

1.  **Instale as dependências**:
    Certifique-se de ter o Node.js instalado. No terminal, execute:
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento**:
    Para compilar o SASS e iniciar o BrowserSync (recarregamento automático):
    ```bash
    gulp
    ```
    Isso abrirá automaticamente o navegador em `http://localhost:3000`.

3.  **Compilação para Produção** (Opcional):
    Para gerar apenas os arquivos na pasta `dist`:
    ```bash
    gulp style
    gulp copyHtml
    gulp copyJs
    gulp copyImages
    ```

## 🎨 Estrutura de Cores

O projeto utiliza uma paleta de cores vibrante baseada nos personagens:
- **Alegria**: Amarelo (#FFE049)
- **Tristeza**: Azul (#67A2D8)
- **Raiva**: Vermelho (#E53935)
- **Medo**: Lilás (#A865C9)
- **Nojinho**: Verde (#7CB342)
- **Ansiedade**: Laranja (#FF9800)
- **Inveja**: Verde-água (#009688)
- **Vergonha**: Rosa (#F48FB1)
- **Tédio**: Roxo Escuro (#5E35B1)

## 📂 Estrutura de Pastas

- `src/`: Código fonte (HTML, SCSS, JS, Imagens).
- `dist/`: Código compilado e otimizado para produção (não edite aqui).
- `gulpfile.js`: Configuração do Gulp.
