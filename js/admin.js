let cate = document.querySelector(".cate-show");
let btn = document.querySelector(".cate-btn");
let closebt= document.getElementsByClassName("bx-search")[0];
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let down = document.getElementsByClassName('fas')[0];
let neig = document.getElementsByClassName("neig-show")[0];
let neigbtn = document.getElementsByClassName("neig-btn")[0];
/*btn.addEventListener('click',function(){
  if(sidebar.contains('open')){
    
  }
})*/

let openlog = document.getElementById("back-btn");


openlog.addEventListener("click",function(){
  if(sidebar.classList.contains("open")){
   {
      cate.classList.toggle("show");
      down.classList.toggle("rotate");
    }
  }

})



btn.addEventListener("click",function(){
  if(sidebar.classList.contains("open")){
   {
     
      cate.classList.toggle("show");
      down.classList.toggle("rotate");
    }
  }

})

let up =document.querySelector(".cate-show show");





closeBtn.addEventListener("click", ()=>{   //메뉴버튼을 누르면
  sidebar.classList.toggle("open");  // 사이드바가 펼쳐짐
  down.style.display= "block";
   if(!sidebar.classList.contains("open")){
   {
      down.classList.remove("rotate");
      cate.classList.remove("show");
      down.style.display= "none";
    }
  }
  /* if(sidebar.classList.contains('open')){  //사이드바에 open class 가 포함이 되면
    $('.cate-btn').click(function(){  //카테고리 버튼을 누르면 함수 실행
      $('.cate-show').toggleClass("show");  // 스위치 온오프 왔다리 갔다리
      $('.first').toggleClass("rotate");  // 이건 화살표 방향이라 신경x
      
    });
  }
  else{    //사이드바에 open class가 포함이 안되면
   
  }*/
  menuBtnChange();
});


searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");  // 사이드바가 펼쳐짐
  down.style.display= "block";
   if(!sidebar.classList.contains("open")){
   {
      down.classList.remove("rotate");
      cate.classList.remove("show");
      down.style.display= "none";
    }
  }
  menuBtnChange();
});


function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right","first");
  
   }else {
    
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu","first");
   }
}

/*
const links = document.getElementsByClassName("linkname")[0];
const openbutton= document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closebtn = modal.querySelector(".asd");

const openModal =() => {
    modal.classList.remove("hidden");
}

const closeModal= () => {
    modal.classList.add("hidden");
}
links.addEventListener("click",openModal);
openbutton.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
closebtn.addEventListener("click", closeModal);

*/



let btn_search = document.querySelector(".search");
let btn_clear = document.querySelector(".clear");

btn_search.onclick=function(){
{
    document.querySelector(".area_search").classList.toggle('active');
}
btn_clear.onclick=function(){
    {
        document.getElementById("search").value = "";
    }

}
}


/*
$('.friend-btn').click(function(){
    $('ul .show').toggleClass("show1");
    $('ul .second').toggleClass("rotate");
    
});

*/




const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", function() {
  window.history.back();
});



function hasScrollBehavior() {
  return 'scrollBehavior' in document.documentElement.style;
}

function smoothScroll() {
  var currentY = window.scrollY;
  var int = setInterval(function () {
    window.scrollTo(0, currentY);

    if (currentY > 500) {
      currentY -= 70;
    } else if (currentY > 100) {
      currentY -= 50;
    } else {
      currentY -= 10;
    }

    if (currentY <= 0) clearInterval(int);
  }, 1000 / 60); // 60fps
}

function scrollToTop() {
  // document.getElementById('page-title').scrollIntoView({behavior: 'smooth'});
  if (hasScrollBehavior()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    smoothScroll();
  }
}

function toggleScrollUpButton() {
  var y = window.scrollY;
  var e = document.getElementById('scroll-to-top');
  if (y >= 20) {
    e.style.transform = 'translateY(-30%)'
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
    e.style.transform = 'translateY(30%)'
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.removeEventListener("DOMContentLoaded", arguments.callee, false);

  window.addEventListener("scroll", toggleScrollUpButton);

  var e = document.getElementById('scroll-to-top');
  e.addEventListener('click', scrollToTop, false);
}, false);








  
const openbutton= document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closebtn = modal.querySelector(".asd");

const openModal =() => {
    modal.classList.remove("hidden");
}

const closeModal= () => {
    modal.classList.add("hidden");
}

openbutton.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
closebtn.addEventListener("click", closeModal);

    var categories = ['코딩', '컴퓨터', '웹' , '언어'];

    function renderCategories() {
      var categoryList = document.getElementById('categoryList');
      categoryList.innerHTML = '';

      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];

        var li = document.createElement('li');
        li.innerHTML = category + '<button class="delete-button" onclick="deleteCategory(' + i + ')">삭제</button>';

        categoryList.appendChild(li);
      }
    }

    function openPopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'block';
    }

    function closePopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'none';
      document.getElementById('categoryInput').value = '';
    }

    function addCategory() {
      var categoryInput = document.getElementById('categoryInput');
      var category = categoryInput.value;

      if (category.trim() !== '') {
        categories.push(category);
        renderCategories();
        closePopup();
      }
    }

    function deleteCategory(index) {
      categories.splice(index, 1);
      renderCategories();
    }



    renderCategories();