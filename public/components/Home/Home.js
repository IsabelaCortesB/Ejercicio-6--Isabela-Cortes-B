export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/public/components/Home/style.css">
        <article>
        <div class="contenedorSuperior">

        
                
                <img  class="grupoIconos" src="./img/icon1.png">
                <img  class="grupoIconos" src="./img/icon43.png">
                <img  class="grupoIconos" src="./img/icon3.png">
                <img  class="grupoIconos" src="./img/icon4.png">
                <img  class="grupoIconos" src="./img/icon6.png">
                <img  class="imagenBuscar" src="./img/icon5.png">
                <img  class="imagenPerfil" src="./img/iconimg.png">
                
          </div>

            <img  class="imagenLogo" src="./img/Instagram_logo.png">

        <div class="contenedorGeneral">

            <div class="textoSuperior">
              <h2>Isabelacb1</h2>
              <p>Canada</p>
             </div>

             <img id="ImagenPerfil" src="./img/iconimg.png">
            <img id="ImagenPost" src="./img/usuarioPost5.jpg">

            <div class="contenedorI>
              
                
                <img  id="guardar" src="./img/guardar.png">
                <h1   id="views">20.340 views</h1>
                <h1   id="TextoNombre">Isabelacb1</h1>
                <p   id="texto2">Time for an adventuree!!</p>
                <p   id="texto3">#post</p>
                <p   id="texto4">27 commentaries</p>
                <p   id="texto5">7 DAYS AGO</p>
                   
            </div>

                <img  class="imagenesAbajo" src="./img/like.png">
                <img  class="imagenesAbajo" src="./img/comentario.png">
                <img  class="imagenesAbajo" src="./img/enviar.png">


            <div class="MyAccountCard">
                    
                <img id="myaccountimg" src="./img/iconimg.png"/>
                <h1 id="myaccountname">Isabelacb1</h1>
                <h2 id="myname">Isabela Cortes</h2>
                <h3 id="cambiar">Change</h3>

            </div>

        <div class="InstagramInfo">

            <p>Información . Ayuda . Prensa . API . Empleo</p>
            <p>Privacidad . Condiciones . Ubicaciones . Idioma</p>

            <p>© 2022 INSTAGRAM FROM META</p>

        </div>

            
        </article>
        `;
    }
}
customElements.define("app-home", Home);
