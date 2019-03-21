(function($) {
  'use strict';
  
  /*
  Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
  coluna na tabela, com um botão de remover.
  Ao clicar nesse botão, a linha da tabela deve ser removida.
  */

  var app = (function(){
      return {
        init: function init(){
          this.companyInfo();
          this.initEvents();
        },
  
        initEvents: function initEvents(){
          $('[data-js="cadastro"]').on('submit', this.handleSubmit);
        },
  
        handleSubmit: function handleSubmit(e){
          e.preventDefault();
          var $tableCar = $('[data-js="table-car"]').get();
          $tableCar.appendChild(app.createNewCar());
        },
  
        createNewCar: function createNewCar(){
          var $fragment = document.createDocumentFragment();
          var $tr = document.createElement('tr');
          var $tdImage = document.createElement('td');
          var $image = document.createElement('img');
          var $tdBrand = document.createElement('td');
          var $tdYear = document.createElement('td');
          var $tdPlate = document.createElement('td');
          var $tdColor = document.createElement('td');
          var $tdDelete = document.createElement('td');

          var $btnDelete = document.createElement('button');
          $btnDelete.setAttribute('class', 'btn btn-danger');
          $btnDelete.addEventListener('click', this.handleDeleteClick, false);

          var $trashIcon = document.createElement('i');
          $trashIcon.setAttribute('class', 'far fa-trash-alt');

          $btnDelete.appendChild($trashIcon);
          $tdDelete.appendChild($btnDelete);

          $image.src = $('[data-js="url-imagem"]').get().value;
          $tdImage.appendChild($image);

          $tdBrand.textContent = $('[data-js="marca-modelo"]').get().value;
          $tdYear.textContent = $('[data-js="ano-carro"]').get().value;
          $tdPlate.textContent = $('[data-js="placa-carro"]').get().value;
          $tdColor.textContent = $('[data-js="cor-carro"]').get().value;

          $tr.appendChild($tdImage);
          $tr.appendChild($tdBrand);
          $tr.appendChild($tdYear);
          $tr.appendChild($tdPlate);
          $tr.appendChild($tdColor);
          $tr.appendChild($tdDelete);

          return $fragment.appendChild($tr);
        },

        handleDeleteClick: function handleDeleteClick(){
          this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        },
  
        companyInfo: function companyInfo(){
          var ajax = new XMLHttpRequest();
          ajax.open('GET', 'company.json', true);
          ajax.send();
          ajax.addEventListener('onreadystatechange', this.getCompanyInfo, false);
        },
  
        getCompanyInfo: function getCompanyInfo(){
          if(!app.isReady.call(this)) return;
          var data = JSON.parse(this.responseText);
          var $companyName = $('[data-js="company-name"]').get();
          var $companyPhone = $('[data-js="company-phone"]').get();
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
        },
  
        isReady: function isReady(){
          return this.readyState === 4 && this.status === 200;
        }
      };
    })();

  app.init();

})(window.DOM);
