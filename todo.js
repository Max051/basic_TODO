(function () {

  var todo =
    {
    input :  document.getElementById('input'),
    ul : document.getElementById('ul'),
    li : null,
    btn : null,
    spn : null,
    items : [],

    check : function (event) {
      if (this.input.value === "") {
        alert("type something");
        return false;
      }else {
        todo.addItemTolocalStorage();
        todo.updateItem();
      }
    },
    getAllItemsFromlocalStorage : function(callback) {
      for(let i = 1; i<=localStorage.length; i++){
          if (localStorage["item"+i]) {
            this.items.push(localStorage["item"+i]);
          }
      }

      //console.log(this.items)
      //callback()
    },
    addItemTolocalStorage : function(){
        localStorage.setItem('item'+(localStorage.length+1),this.input.value);
    },
    render_item : function(item_value){
            this.li = document.createElement("li");
            this.btn = document.createElement("button");
            this.spn = document.createElement("span");
            this.ul.appendChild(this.li);
            this.input.value = "";
            this.btn.classList.add("btn");
            this.btn.classList.add("btn-default");
            this.spn.classList.add("glyphicon");
            this.spn.classList.add("glyphicon-edit");
            this.btn.id = 'remove'
            this.li.innerHTML = item_value;
            this.li.appendChild(this.btn);

            this.btn.appendChild(this.spn);
            console.log(this.li)
            this.btn = this.btn.cloneNode(true);
            this.spn.classList.remove("glyphicon-edit");
            this.spn.classList.add("glyphicon-remove");
            this.btn.id = 'edit'
            this.li.appendChild(this.btn);


    },
    render_all_items : function() {
      this.items.map(function(el) {
        todo.render_item(el);
      })
    },
    remove_item : function (target) {
    for(let i = 1; i<=localStorage.length; i++){
            if(localStorage["item"+i]==target){
              let x = i
              for(x;x<=localStorage.length;x++){
                localStorage["item"+x] = localStorage["item"+(x+1)]
                console.log(x)
              }
              break;
            }
      }
    //  console.log(localStorage)
  localStorage.removeItem("item"+localStorage.length)
    },
    updateItem : function () {
      this.render_item(this.input.value);
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
                todo.remove_item(e.target.parentElement.innerText)
              }else if (e.target.id == 'remove') {
                e.target.parentElement.remove();
                todo.remove_item(e.target.parentElement.innerText)
              }
            }else if (e.target.parentElement.parentElement.nodeName == 'LI') {
              if (e.target.parentElement.id == 'edit') {
                todo.input.value = e.target.parentElement.parentElement.innerText;
                e.target.parentElement.parentElement.remove();
                todo.input.focus();
                todo.remove_item(e.target.parentElement.innerText)
              }else if (e.target.parentElement.id == 'remove') {
                e.target.parentElement.parentElement.remove();
                todo.remove_item(e.target.parentElement.innerText)
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
      if(localStorage["item1"])
      {
        this.getAllItemsFromlocalStorage();
        this.render_all_items();
      }

    this.events();
  },


  };
 todo.init();


})();
