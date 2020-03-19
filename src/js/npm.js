// Импортируем jQuery
//= ../../node_modules/jquery/dist/jquery.js

// Импортируем Popper
// ../../node_modules/popper.js/dist/umd/popper.js

// Импортируем необходимые js-файлы Bootstrap 4
// ../../node_modules/bootstrap/js/dist/util.js
// ../../node_modules/bootstrap/js/dist/alert.js
// ../../node_modules/bootstrap/js/dist/button.js
// ../../node_modules/bootstrap/js/dist/carousel.js
// ../../node_modules/bootstrap/js/dist/collapse.js
// ../../node_modules/bootstrap/js/dist/dropdown.js
// ../../node_modules/bootstrap/js/dist/modal.js
// ../../node_modules/bootstrap/js/dist/tooltip.js
// ../../node_modules/bootstrap/js/dist/popover.js
// ../../node_modules/bootstrap/js/dist/scrollspy.js
// ../../node_modules/bootstrap/js/dist/tab.js
// ../../node_modules/bootstrap/js/dist/toast.js

// Импортируем другие js-файлы
// custom.js


function scrollToTarget(target) {
  if(!target) return false;
  var item = document.querySelector(target);
  if(item){
    var pos = item.offsetTop;
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    });
  }
}
