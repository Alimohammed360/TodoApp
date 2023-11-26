var firebaseConfig = {
    apiKey: "AIzaSyAh2_vWj9D46nWN_EpA7uK2sYTEbPWMsD0",
    authDomain: "todo-app-dea9f.firebaseapp.com",
    databaseURL: "https://todo-app-dea9f-default-rtdb.firebaseio.com",
    projectId: "todo-app-dea9f",
    storageBucket: "todo-app-dea9f.appspot.com",
    messagingSenderId: "623395349189",
    appId: "1:623395349189:web:b791bac3911f03191786ac",
    measurementId: "G-T09XFV6VN8"
};
var app = firebase.initializeApp(firebaseConfig);

var key = Math.random() * 10000
var roudedKey = Math.round(key)
var arr = []
var index = 0
arr[index] += roudedKey
console.log(firebase.database().ref("TodoList" + arr[0]).on("child_added", function (data) {
    console.log(data.val())}));
    
function onloadd() {
    for (let index = 0; index < arr.length - 1; index++) {
        var ulelement = document.getElementById("list")
        var input = document.getElementById("fetch")
        var lielement = document.createElement("li");
        var liText = document.createTextNode(firebase.database().ref("TodoList" + arr[i]).on("child_added", function (data) {
            console.log(data.val());
        }))

        // Delete Button

        var delBtn = document.createElement("button")
        delBtn.innerHTML = "Delete"
        delBtn.setAttribute("onclick", "del(this)")
        delBtn.setAttribute("class", "butt")


        // Edit button

        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("onclick", "edit(this)")
        editBtn.setAttribute("class", "butt")

        // implementation

        lielement.setAttribute("class", "FLEX")
        lielement.appendChild(liText)
        ulelement.appendChild(lielement)
        lielement.appendChild(delBtn)
        lielement.appendChild(editBtn)



    }
}


function addtodo() {
    var ulelement = document.getElementById("list")
    var input = document.getElementById("fetch")
    var lielement = document.createElement("li");
    var liText = document.createTextNode(input.value)
    arr[index] += roudedKey
    // Del Button

    var delBtn = document.createElement("button")
    delBtn.innerHTML = "Delete"
    delBtn.setAttribute("onclick", "del(this)")
    delBtn.setAttribute("class", "butt")


    // Edit button

    var editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("onclick", "edit(this)")
    editBtn.setAttribute("class", "butt")

    // implementation

    lielement.setAttribute("class", "FLEX")
    lielement.appendChild(liText)
    ulelement.appendChild(lielement)
    lielement.appendChild(delBtn)
    lielement.appendChild(editBtn)
    var todo = {
        task: input.value,
    }
    console.log(todo);
    firebase.database().ref("TodoList/" + roudedKey).set(todo)
    console.log(arr);

    input.value = ""
    index++
    key = Math.random() * 10000
}

function deleteall() {
    var ulelement = document.getElementById("list")
    ulelement.innerHTML = ""
}
function del(x) {
    console.log(x.parentNode.remove());
}
function edit(e) {
    var editedValue = prompt("Write the correct routine");
    e.parentNode.firstChild.nodeValue = editedValue
}

var student = {
    name: "alimohammed",
    grade: "B",
    email: "alimohamedwadiwala@gmail.com",
    address: "PrinceCenter B2 FBarea Karachi",
    courses: ["JavaScript", "Python", "MineCraft", "Html"],
    func: function () {
        return this.name
    }
}
delete student.name
console.log("grade" in student);
// console.log(student.func());