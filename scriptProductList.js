
function Products(name, type, price, stock, size, weight, dimension) {
    this.name= name,
    this.type= type,
    this.price= price,
    this.stock = stock,
    this.size= size,
    this.weight = weight,
    this.dimension = dimension

}

var products = {
    discs: {
        name: new Products("JVC200123", "Acmedisc", "1.00$", "4", "700 MB"),
    },

    books: {
            name: new Products("GGWP0007", "War and Peace", "20.00$", "4", "2KG"),
    },


    chairs: {
        name: new Products("TR120555", "Chair", "40.00$", "4", "24x45x15"),
        },

}







class ProductDiscs{
    constructor(name, type, price, size) {
    this.name= 'JVC200123';
    this.type= 'Acmedisc';
    this.price= '1.00$';
    this.size= '700 MB';
    }
    purchase() {
        return 'purchase at' + this.price
    }
}

const disc2 = new ProductDiscs('disc2', 'name', 'type', 'price', 'size')
const disc3 = new ProductDiscs('disc3', 'name', 'type', 'price', 'size')
const disc4 = new ProductDiscs('disc4', 'name', 'type', 'price', 'size')


class ProductBooks{
    constructor(name, type, price, weight) {
    this.name= 'GGWP0007';
    this.type= 'War and Peace';
    this.price= '20.00$';
    this.weight= '2KG';
    }
    purchase() {
        return 'purchase at' + this.price
    }
}

const book2 = new ProductBooks('book2', 'name', 'type', 'price', 'weight')
const book3 = new ProductBooks('book3', 'name', 'type', 'price', 'weight')
const book4 = new ProductBooks('book4', 'name', 'type', 'price', 'weight')


class ProductFurniture{
    constructor(name, type, price, dimension) {
    this.name= 'TR120555';
    this.type= 'Chair';
    this.price= '40.00$';
    this.dimension= '24x45x15';
    }
    purchase() {
        return 'purchase at' + this.price
    }
}

const chair2 = new ProductFurniture('chair2', 'name', 'type', 'price', 'dimension')
const chair3 = new ProductFurniture('chair3', 'name', 'type', 'price', 'dimension')
const chair4 = new ProductFurniture('chair4', 'name', 'type', 'price', 'dimension')




const user ={
    name:[],
    active:'true',
    productList:[],
    savedList:[]
}

const compose = (cancelProduct, saveProduct) => (args) =>
cancelProduct(saveProduct(args));
    addProduct(
        cancelProduct,
        saveProduct)
    (user, {name: 'disc', price:1})

  function addProduct(...fns) {
      return fns.reduce(compose)
    }   


 function saveProduct(user, product) {
     const updateProduct = user.productList.concat(product)
     return Object.assign({}, user, { productList: updateProduct})
     
}

function cancelProduct(user) {
    return Object.assign({}, user, {productList: []})

}


/*
const deleteButton = document.getElementById("delete-button");
const checkboxElems = document.getElementsByClassName("delete-checkbox");
console.log(deleteButton, checkboxElems);


var button = document.querySelector("delete-button");
button.addEventListener("onclick", massDelete())
console.log()



function massDelete() {
    if ("delete-button" === clicked) {
      return ("delete-checkbox" === checked);
    } else {
      return ("delete-checkbox" === unchecked);
    };
  }
console.log()


        function massDelete() {
          document.getElementsByClassName("checkmark").innerHTML;
        }










var selections = {};
var checkboxElems = document.querySelectorAll("input[type='checkbox']");
var totalElem = document.getElementById("seats-total");
var seatsElem = document.getElementById("selected-seats");

for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", displayCheck);
}

function displayCheck(e) {
  if (e.target.checked) {
    selections[e.target.id] = {
      name: e.target.name,
      value: e.target.value
    };
  } 
  else {
    delete selections[e.target.id];
  }

  var result = [];
  var total = 0;

  for (var key in selections) {
    var listItem = "<li>" + selections[key].name + " " +
                   selections[key].value + "</li>";
    result.push(listItem);
    total += parseInt(selections[key].value.substring(1));
  }

  totalElem.innerText = total;
  seatsElem.innerHTML = result.join("");
}


  <form action="/action_page.php" method="post">
    <input type="checkbox" name="vehicle" id="A1" value="$100">$100<br>
    <input type="checkbox" name="vehicle" id="A2" value="$65"> $65<br>
    <input type="checkbox" name="vehicle" id="A3" value="$55"> $55<br>
    <input type="checkbox" name="vehicle" id="A4" value="$50"> $50<br>
    <p>Selected Seat(s)</p>

    <!-- container for displaying selected seats -->
    <ul id="selected-seats"></ul>
    
    <div>
      Total: $<span id="seats-total">0</span> USD 
      <input type="submit" value="Reserve Now">
    </div>  
  
  */






/*

  var checkbox = document.querySelector("input[name=delete-checkbox]");

checkbox.addEventListener('change', massDelete())
 {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
};
*/
