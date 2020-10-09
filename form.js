


function AddData() {
  

    var rows = "";
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : '';
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    

     
             


    if(name==""|| gender==""||age==""||city=="")
    {
        alert("No field should be empty")
        
    }
            
         else
         { 
            rows += "<td>" + name + "</td><td>" + gender + "</td><td>" + age + "</td><td>" + city   + "</td><td><input type='button' onclick='edit_row()' value='Update' id='upd-btn'>/<input type='button' value='Remove' onclick='deleteRow(this)' id='del-btn'></td>"
            var tbody = document.querySelector("#list tbody");
            var tr = document.createElement("tr");

            tr.innerHTML = rows;
            tbody.appendChild(tr);
            reset()
       
    

          }
        

            
    //"</button><button>Update</button>/<button>Remove";
    //div>(button#update{Update}){/}(button#delbtn{Remove})

}

function ResetForm() {
document.getElementById("form-Style").reset();
var tableHeaderRowCount = 1;
var table = document.getElementById('list');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("list").deleteRow(i);
  }
  function reset()
  {
    document.getElementById("form-Style").reset();
  }

  function updateinfo()
  {
    

  }
  function edit_row()
  {
    var rindex, table = document.getElementById("list")

    for( var i=0; i<table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rindex = this.rowIndex;
            document.getElementById("name").value =this.cells[0].innerHTML;
            document.getElementById("age").value =this.cells[2].innerHTML;
            document.getElementById("city").value =this.cells[3].innerHTML;
        }
    }

  }

  function save_row() {
       var rindex, table = document.getElementById("list")
   
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    table.rows[rindex].cells[0].innerHTML =name;

    table.rows[rindex].cells[2].innerHTML =age;
    table.rows[rindex].cells[3].innerHTML =city;
      
  }