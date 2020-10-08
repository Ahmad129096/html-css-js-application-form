


function AddData() {
  

    var rows = "";
    var name = document.getElementById("name").value;;
    var gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : '';
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    

     
             


    // if(name.value==null|| gender.value==null||age.value==null||city.value==null)
    // {
    //     alert("No field should be empty")
        
    // }
            
        //  else
        //  { 
            rows += "<td>" + name + "</td><td>" + gender + "</td><td>" + age + "</td><td>" + city   + "</td><td><input type='button' value='Update' id='upd-btn'>/<input type='button' value='Remove' onclick='deleteRow(this)' id='del-btn'></td>"
            var tbody = document.querySelector("#list tbody");
            var tr = document.createElement("tr");

            tr.innerHTML = rows;
            tbody.appendChild(tr);
       
    

        //   }
        

            
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

  function updateinfo()
  {
    

  }
 

//a
