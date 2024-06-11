document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const villagerImages = document.querySelectorAll('.villager');

    const tooltip = document.getElementById('tooltip');

    // Mapeamento de IDs para URLs de imagens ou textos
    const tooltipContent = {
        villager_sem_profissao: 'Sem profissão',
        fudido: 'Fudido',
        Armadureiro: 'assets/img/trocas_armadureiro.png',
        Armeiro: 'assets/img/trocas_armeiro.png',
        Ferramenteiro: 'assets/img/trocas_ferramenteiro.png',
        Flecheiro: 'assets/img/trocas_flecheiro.png',
        Fazendeiro: 'assets/img/trocas_fazendeiro.png',
        Açougueiro: 'assets/img/trocas_açougueiro.png',
        Coureiro: 'assets/img/trocas_coureiro.png',
        Pescador: 'assets/img/trocas_pescador.png',
        Bibliotecário: 'assets/img/trocas_bibliotecario.png',
        Cartógrafo: 'assets/img/Cartógrafo.png',
        Clérigo: 'assets/img/trocas_clerigo.png',
        Pastor: 'assets/img/_pastor.png',
        Pedreiro: 'assets/img/Pedreiro.png'
    };

    // Função de busca
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false;

        villagerImages.forEach(image => {
            image.classList.remove('highlight');
            if (image.alt.toLowerCase().includes(searchTerm) || image.id.toLowerCase().includes(searchTerm)) {
                image.classList.add('highlight');
                image.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
        });

        if (!found) {
            alert('Villager não encontrado');
        }
    });

    villagerImages.forEach(image => {
        image.addEventListener('mouseover', function (event) {
            const villagerId = event.target.id;
            const content = tooltipContent[villagerId] || '';

            tooltip.innerHTML = '';

            if (content.endsWith('.png') || content.endsWith('.jpg') || content.endsWith('.jpeg') || content.endsWith('.gif')) {
                const img = document.createElement('img');
                img.src = content;
                tooltip.appendChild(img);
            } else {
                tooltip.textContent = content;
            }

            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.right + 10}px`;
            tooltip.style.top = `${rect.top}px`;
            tooltip.style.display = 'block';
        });

        image.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
        });
    });
});
