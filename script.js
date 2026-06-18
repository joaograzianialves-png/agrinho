// Função para controlar o Zoom do texto
let currentFontSize = 16;

function changeFontSize(action) {
    const body = document.body;
    
    if (action === 'increase' && currentFontSize < 26) {
        currentFontSize += 2;
    } else if (action === 'decrease' && currentFontSize > 12) {
        currentFontSize -= 2;
    }
    
    // Altera a variável CSS que controla o tamanho da fonte
    body.style.setProperty('--base-font-size', currentFontSize + 'px');
}

// Função para controlar o Brilho / Modo Escuro
function toggleContrast() {
    document.body.classList.toggle('dark-mode');
}

// Função para destacar as informações importantes
function toggleHighlights() {
    document.body.classList.toggle('highlight-mode');
}
