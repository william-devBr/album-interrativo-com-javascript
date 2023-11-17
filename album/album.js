 
 
  const album = document.querySelector("#album");
  const modal = document.querySelector("#modal");
 
 //lista de itens
 const PHOTOS = [
    { sabor: "portuguesa", src : 'src/pizza1.jpg', preco : "49,99"} ,
    { sabor: "siciliana", src : 'src/pizza2.jpg', preco : "45,99"} ,
    { sabor: "bacalhau", src : 'src/pizza3.jpg', preco : "48,90"} ,
    { sabor: "a moda", src : 'src/pizza4.jpg', preco : "45,90"} ,
     ];

//carrega as imagens geradas 
 for(let i = 0; i < PHOTOS.length; i++) {
       const photo = PHOTOS[i].src;
       const legend = PHOTOS[i].sabor;

       const img = createIMG(photo);
       img.title = `${legend} ${PHOTOS[i].preco}`;
       img.dataset.preco = PHOTOS[i].preco;
       img.dataset.title = legend;
     
       img.addEventListener('click', thumbClick);
       album.appendChild(img);
 }
  //remove a modal quando ocorre evento de clicl
  function clickOut(){
     modal.innerHTML = '';
     modal.classList.add('hidden');
  }
  //insere os dados dentro da modal
  function thumbClick(evt){
 
     const image = createIMG(evt.currentTarget.src)
     let title = document.createElement('h1');
     title.textContent = evt.currentTarget.dataset.title;
     let valor = document.createElement('h3')
     valor.textContent = "R$ " + evt.currentTarget.dataset.preco;

     modal.style.top = window.pageYOffset + "px";
     modal.prepend(title);
     modal.appendChild(image);
     modal.appendChild(valor);
     modal.classList.remove('hidden');

  }
  //cria as imagens dentro do body
  function createIMG(src){
      let img = document.createElement('img');
          img.src = src;
         return img;
  }

modal.addEventListener('click',clickOut);