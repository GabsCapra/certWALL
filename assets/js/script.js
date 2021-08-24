$(function () {
    $("[data-toggle='tooltip']").tooltip();
})

function reload() {
    window.location.reload()
}

function filterByKeyword(filterKeyword) {
    var list = document.querySelectorAll('.boxfilter')

    try {
        list.forEach(element => {
                element.style.display = 'none';
                let elementtxt = element.getElementsByTagName('h5')[0].innerText
                for (let i = 0; i < filterKeyword.length; i++) {
                    const elementout = filterKeyword[i];
                    if(elementtxt.toLowerCase().includes(elementout.toLowerCase())){                          
                        element.style.display =  'block';
                    }
                }
        });
    } catch (e) {
        console.error(e)
    }
}

var button = document.querySelector('.srch')

button.onclick = function () {
    var keyword = document.getElementById('srch').querySelector('input').value
    var newList = filterByKeyword(keyword.split(' '))
   
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


function openModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modalImg").setAttribute("src", "")

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("modalImg").setAttribute("src", "")

  }
}

function loadModal(img){
    document.getElementById("modalImg").setAttribute("src", img.replace(" ","%20"))



}