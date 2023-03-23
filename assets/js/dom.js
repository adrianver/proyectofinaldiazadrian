const slogan = document.getElementById("slogan")
slogan.textContent = "La mayor variedad y calidad de Bicicletas, elige, paga y recibe tu pedido sin moverte de tu casa, llegamos a todo el país"
const selectorTienda = document.querySelector("div.listarBicicletas");
const selectorFilter = document.querySelector("#datalistOptions");
const selectorFilterInput = document.querySelector("#dataList");
const selectorFilterCategory = document.querySelector("#dataCategory");
const selectorCarrito = document.querySelector("tbody.listarCarrito");
const selectorCompra = document.querySelector("div.finalizarCompra");
const selectorVac = document.querySelector("div.vaciarCarrito");
const selectorError = document.getElementById("error-listar");
const selectorLoad = document.getElementById("load");
const footer = document.getElementById("footer")
footer.innerHTML = `<div class="footerInfomacion">
<div class="containerBody">
  <div class="informacion">
      <h1>Nosotros</h1>
        <p>Somos una pujante empresa en la comercializacion de bicicletas mountain bike  
        reconocida a nivel nacional. </p>        
        
        <p>Contamos con mayor diversidad, calidad y al mejor precio.</p>

        <p>Poseemos 5 años de experiencia en el mercado, con un excelente equipo a medida 
          de las necesidades de nuestros clientes. </p>
          
         <p>Tenemos la suerte de amar lo que hacemos  hacer lo que amamos, y eso nos permite todos los días trabajar con las ganas y 
          el entusiasmo necesario para brindar el servicio de calidad que queremos 
          darle a todos nuestros clientes para que, una vez más, nos vuelvan a elegir.</p>
        
  </div>
  <div class="redesSociales">
      <h1>Redes Sociales</h1>
      <div class="redes">
          <img src="./assets/img/facebook.png" alt="facebook">
          <label class="facebook">Siguenos en facebook</label> 
      </div>

      <div class="redes">
        <img src="./assets/img/instagran.jpg" alt="Instagram">
        <label class="instagram">Siguenos en Instagram</label> 
      </div>

      <div class="redes">
        <img src="./assets/img/twitternuevo.png" alt="Twitter">
        <label class="twitter">Siguenos en twitter</label> 
      </div>
      <div class="redes">
        <img src="./assets/img/youtube.png" alt="youtube">
        <label class="youtube">Siguenos en youtube</label>
      </div>      
      <div class="redes">
        <img src="./assets/img/Google Plus.png" alt="Google Plus">
        <label class="googlePlus">Siguenos en googlePlus</label>
      </div>
  </div>
  <div class="contacto">
      <h1>Información Contactos</h1>
    <div class="contactos">
      <img src="./assets/img/gps.png" alt="direccion de Tandilaventura">
      <label class="direccion">San Felipe 864-Tandil</label> 
    </div>
    <div class="contactos">
       <img src="./assets/img/whatsapp img.png" alt="whatsapp">
       <label class="whatsapp">Whatsapp:+0542494548603</label>
    </div>
    <div class="contactos">
       <img src="./assets/img/gmail.png" alt="gmail">
       <label class="e_mail">e-mail:aldiaz@gmail.com</label>
    </div>
  </div>    
</div>
</div> 
<div class="containerFooter">
<div class="derechos">
  <p>Copyright &copy; Todos los derechos reservados zonabike.com.ar &reg;
    - <a href="">To top</a></p>  
</div>
</div>
`