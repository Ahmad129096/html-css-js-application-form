


function AddData() {
  

    var rows = "";
    var name = document.getElementById("name").value;;
    var gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : '';
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
     var check = document.getElementById("check")
     var btn = "<button>Update</button>/<button>Remove</button>";



    // if(name.value==null|| gender.value==null||age.value==null||city.value==null)
    // {
    //     alert("No field should be empty")
        
    // }
         
            rows += "<td>" + name + "</td><td>" + gender + "</td><td>" + age + "</td><td>" + city + "</td><td>" + btn +"</td><td>" + "</td>";
            var tbody = document.querySelector("#list tbody");
            var tr = document.createElement("tr");

            tr.innerHTML = rows;
            tbody.appendChild(tr);
        
         
    

    
    //"</button><button>Update</button>/<button>Remove";
    //div>(button#update{Update}){/}(button#delbtn{Remove})

}

function ResetForm() {
document.getElementById("form-Style").reset();
}

function DeleteData() {



}

function Openfb() {
Console.log("THis is working")
}