function addHeader(){
    document.getElementById("theHeader").innerHTML = `
    <h1><a href="index.html">Evgeniy Bernarenko</a></h1>
    <nav>
        <ul class="ulNav">
            <li>
                <p><a href="sobre.html">Sobre</a></p>
            </li>
            <li>
                <p><a href="projetos.html">Projetos</a></p>
            </li>
            <li>
                <p><a href="contatos.html">Contato</a></p>
            </li>
        </ul>
    </nav>    
    `
}

function addFooter(){
    document.getElementById("theFooter").innerHTML = `
    <div>
    <h3>Redes</h3>
    <a href="https://github.com/bernarenko" target="_blank">
        <img src="img/github.ico" alt="Github icon"  class="footerImg">
    </a>
    <a href="https://www.linkedin.com/in/bernarenko/" target="_blank">
        <img src="img/linkedin.ico" alt="Linked icon" class="footerImg">
    </a>
    <a href="https://twitter.com/bernarenko" target="_blank">
        <img src="img/twitter.ico" alt="Twitter icon" class="footerImg">
    </a>
</div>
<div>
    <h3>Evgeniy Bernarenko</h3>
    <p class="txtFooter">Projeto 2022, construído por Evgeniy Freitas Bernarenko</p>
</div>
<div>
    <h3>Links</h3>
    <a href="#">
        <p>Projetos</p>
    </a>
    <a href="#">
        <p>Sobre</p>
    </a>
    <a href="#">
        <p>Contato</p>
    </a>
</div>
    `
}