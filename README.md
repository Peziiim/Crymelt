Um site portfólio moderno e responsivo para a artista digital **Crymelt**, especializada em ilustrações únicas e personalizadas.

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Seções do Site

### 1. **Header/Navegação**
- Logo com nome "Crymelt"
- Menu de navegação com links para todas as seções
- Links para redes sociais (Twitch, Instagram, YouTube, Email)
- Menu responsivo para mobile

### 2. **Hero Section**
- Imagem em destaque com animação de flutuação
- Título principal e descrição
- Call-to-action para solicitar comissões

### 3. **Showcase**
- Apresentação da artista
- 3 imagens em destaque
- Lista de especialidades com check marks

### 4. **Seção de Comissões**
- **Faço ✓**
  - Fanart
  - OC (Personagens Originais)
  - Gore leve (sangue)
  - Animais
  - Levemente sugestivo

- **Não faço ✗**
  - Mechas
  - NSFW
  - Furries
  - Realismo extremo

- **Formulário de Contato**
  - Email
  - Assunto
  - Descrição da comissão

### 5. **Galeria**
- Grid de 12 obras (3x4 desktop, responsivo em mobile)
- Modal lightbox ao clicar na imagem
- Navegação entre imagens (setas ou botões)
- Efeito hover com zoom

### 6. **Vídeos**
- 2 vídeos do YouTube incorporados
- Avisos de conteúdo (Gore/Sangue)
- Responsivo com altura ajustável

### 7. **Footer**
- Informações sobre a artista
- Links para redes sociais
- Contato (Email)
- Copyright

## 🎨 Personalização

### Alterar Cores
Edite as variáveis CSS em `main/style/style.css`:
```css
:root {
    --primary-color: rgb(243, 201, 76);        /* Amarelo */
    --background: rgb(28, 29, 43);             /* Azul escuro */
    --accent: rgb(4, 180, 4);                  /* Verde */
    /* ... outras cores ... */
}
```

### Adicionar/Remover Imagens da Galeria
No `index.html`, adicione ou remova items na seção de galeria:
```html
<div class="gallery-item" data-image="./assets/images/imageX.png">
    <img src="./assets/images/imageX.png" alt="Obra X">
</div>
```


## 📱 Responsividade

O site possui 3 breakpoints principais:

| Dispositivo | Largura | Características |
|-----------|---------|-----------------|
| **Desktop** | 1200px+ | Layout completo, galeria 4 colunas |
| **Tablet** | 768px - 1199px | Menu hamburger, galeria 2 colunas |
| **Mobile** | até 480px | Layout otimizado, galeria 2 colunas |

## 🎯 Funcionalidades JavaScript

### Menu Mobile
- Toggle ao clicar no ícone hamburger
- Fecha automaticamente ao clicar em um link
- Animação suave de transformação

### Galeria Modal
```javascript
// Clique para abrir
// Navegação com setas do teclado
// ESC para fechar
// Clique fora da imagem para fechar
```

### Formulário
- Validação básica de campos
- Feedback ao enviar
- Reset automático após envio

## 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **HTML5** | 5 | Estrutura semântica |
| **CSS3** | 3 | Styling, Grid, Flexbox, Animações |
| **JavaScript** | ES6+ | Interatividade, DOM manipulation |
| **Font Awesome** | 6.4.0 | Ícones (opcional) |
| **YouTube API** | Embed | Vídeos incorporados |

## 📞 Contato

- **Email**: [crymeltcontact@gmail.com](mailto:crymeltcontact@gmail.com)
- **Twitch**: [twitch.tv/crymelt](https://www.twitch.tv/crymelt)
- **Instagram**: [@crymelt](https://www.instagram.com/crymelt/)
- **YouTube**: [@crymelt](https://www.youtube.com/@crymelt)

## 🤝 Contribuindo

Se você deseja contribuir para este projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## Reportar Bugs

Se encontrar algum bug, abra uma [issue](https://github.com/Peziiim/Crymelt/issues) descrevendo:
- Descrição do bug
- Passos para reproduzir
- Comportamento esperado
- Screenshots (se aplicável)
- Navegador/dispositivo usado

## ✨ Créditos

**Desenvolvedor**: Peziiim
**Artista**: Crymelt

---

**Feito com ❤️ para Crymelt**

Desenvolvido em 2026 
