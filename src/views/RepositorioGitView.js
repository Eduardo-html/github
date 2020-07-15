class RepositorioGitView {
    constructor() {

    }

    template(repositorio) {
        return `<div class="repocont" >
        
        <p id="b1">REPOSITORIO: ${repositorio.nome}</p>
       
        <a id="perfil" href="${repositorio.link}"><svg width="2em" height="2em" viewBox="0 0 16 16" id="teste" class="bi bi-folder-plus"
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      
        </a>
   
        </div>`
    }
}
