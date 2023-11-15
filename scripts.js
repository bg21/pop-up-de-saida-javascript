// Obtém o elemento de pop-up
const janelaPopUp = document.querySelector('#popup');
// Obtém o botão de cancelar
const botaoCancelar = document.querySelector('#cancel-button');
// Remove a indicação de exibição do pop-up ao entrar na página
localStorage.removeItem('popupExibido');
// Adiciona um ouvinte/listener de clique no botão de cancelar
botaoCancelar.addEventListener('click', () => {
	// Fecha o pop-up
	janelaPopUp.style.display = 'none';
	// Armazena o valor indicando que o pop-up já foi exibido
	localStorage.setItem('popupExibido', 'true');
});
// Adiciona um ouvinte/listener para detectar saída do cursor da página
document.addEventListener('mouseout', (evento) => {
	// Verifica se o pop-up já foi exibido nesta visita
	const popupExibido = localStorage.getItem('popupExibido');
	if (!popupExibido) {
		// Verifica se o cursor do mouse saiu da página
		if (evento.relatedTarget === null) {
			// Exibe o pop-up
			janelaPopUp.style.display = 'block';
		}
	}
});
