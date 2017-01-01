//sss
(function () {

  var todo =
    {
    input :  document.getElementById('input'),
    ul : document.getElementById('ul'),
    li : null,
    btn : null,
    spn : null,

    check : function (event) {
      if (this.input.value === "") {
        alert("type adssswqsomthinsssaaaaaawwwwwwwsaaaaaaawsssg");
        return false;
      }else {
        todo.updateItem();
      }
    },

    updateItem : function () {


      this.li = document.createElement("li");
      this.btn = document.createElement("button");
      this.spn = document.createElement("span");

      this.li.innerHTML = this.input.value;
      this.ul.appendChild(this.li);
      this.input.value = "";
      this.btn.classList.add("btn");
      this.btn.classList.add("btn-default");
      this.spn.classList.add("glyphicon");
      this.spn.classList.add("glyphicon-edit");
      this.btn.id = 'remove'
      this.li.appendChild(this.btn);
      this.btn.appendChild(this.spn);

      this.btn = this.btn.cloneNode(true);
      this.spn.classList.remove("glyphicon-edit");
      this.spn.classList.add("glyphicon-remove");
      this.btn.id = 'edit'
      this.li.appendChild(this.btn);
    },

    keypress : function (event) {
      if (event.which == 13) {
        todo.check();
      }
    },

    events : function () {
      this.input.addEventListener("keypress", this.keypress);
      this.ul.addEventListener("click", function(e) {
            if (e.target.parentElement.nodeName == 'LI') {
              if (e.target.id == 'edit') {
                todo.input.value = e.target.parentElement.innerText;
                e.target.parentElement.remove();
                todo.input.focus();
              }else if (e.target.id == 'remove') {
                e.target.parentElement.remove();
              }
            }else if (e.target.parentElement.parentElement.nodeName == 'LI') {
              if (e.target.parentElement.id == 'edit') {
                todo.input.value = e.target.parentElement.parentElement.innerText;
                e.target.parentElement.parentElement.remove();
                todo.input.focus();
              }else if (e.target.parentElement.id == 'remove') {
                e.target.parentElement.parentElement.remove();
              }
            }
          });
      this.ul.addEventListener("mouseover", function(e) {
        if (e.target && e.target.nodeName === "LI") {
          e.target.classList.add("bg-info");
        }
      });
      this.ul.addEventListener("mouseout", function(e) {
        if (e.target && e.target.nodeName === "LI") {
          e.target.classList.remove("bg-info");
        }
      });
    },
    init : function () {
    this.events();
  },


  };
 todo.init();


})();
