document.addEventListener('DOMContentLoaded', () => {
    // Botão de "Voltar ao Topo"
    const backToTop = document.createElement('button');
    backToTop.textContent = '⬆ Topo';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.padding = '10px 15px';
    backToTop.style.backgroundColor = '#2c3e50';
    backToTop.style.color = '#fff';
    backToTop.style.border = 'none';
    backToTop.style.borderRadius = '5px';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';
    backToTop.style.zIndex = '1000';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    // Saudação automática
    const hora = new Date().getHours();
    let mensagem = '';
    if (hora >= 5 && hora < 12) {
        mensagem = 'Bom dia! Que Deus te abençoe!';
    } else if (hora >= 12 && hora < 18) {
        mensagem = 'Boa tarde! Seja bem-vindo!';
    } else {
        mensagem = 'Boa noite! Que a paz do Senhor esteja contigo!';
    }

    const saudacao = document.createElement('div');
    saudacao.textContent = mensagem;
    saudacao.style.textAlign = 'center';
    saudacao.style.padding = '15px';
    saudacao.style.fontSize = '1.1em';
    saudacao.style.color = '#2c3e50';
    saudacao.style.backgroundColor = '#ecf0f1';
    saudacao.style.fontWeight = 'bold';

    const main = document.querySelector('main');
    if (main) {
        main.insertBefore(saudacao, main.firstChild);
    }

    // Fade-in para conteúdo ao rolar
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('main > *').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });

    // Função para alternar o conteúdo do "Leia mais"
    function toggleContent(id) {
        var content = document.getElementById(id);
        var button = document.getElementById('btn-' + id);
        if (content.style.display === "none") {
            content.style.display = "block";
            button.innerText = "Leia menos...";
        } else {
            content.style.display = "none";
            button.innerText = "Leia mais...";
        }
    }

    // Adicionar evento de clique nos botões "Leia mais"
    document.querySelectorAll('[id^="btn-"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.id.split('-')[1];
            toggleContent(targetId);
        });
    });
});
