let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

let preveiwBContainer = document.querySelector('.bproducts-preview');
let previewBBox = preveiwBContainer.querySelectorAll('.bpreview');

document.querySelectorAll('.bproducts-container .bproduct').forEach(bproduct =>{
  bproduct.onclick = () =>{
    preveiwBContainer.style.display = 'flex';
    let name = bproduct.getAttribute('data-name');
    previewBBox.forEach(bpreview =>{
      let target = bpreview.getAttribute('data-target');
      if(name == target){
        bpreview.classList.add('active');
      }
    });
  };
});

let preveiwSContainer = document.querySelector('.sproducts-preview');
let previewSBox = preveiwSContainer.querySelectorAll('.spreview');

document.querySelectorAll('.sproducts-container .sproduct').forEach(sproduct =>{
  sproduct.onclick = () =>{
    preveiwSContainer.style.display = 'flex';
    let name = sproduct.getAttribute('data-name');
    previewSBox.forEach(spreview =>{
      let target = spreview.getAttribute('data-target');
      if(name == target){
        spreview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


previewBBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwBContainer.style.display = 'none';
  };
});

previewSBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwSContainer.style.display = 'none';
  };
});

var buyButtons = document.getElementsByClassName("buy");
for(var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function(){
        window.location.href = "order.html";
    });
}
