function My_menu(){
	    var body,curv;
		var menu = document.querySelector('.navigation');
		
			if(menu.style.display==="none"){
				menu.style.display="block";
				
				
			}
			else{
				menu.style.display="none";
				
			}
	
}


var y = document.querySelector('header');
var u = document.querySelector('.mywidget');

var sticky = y.offsetTop;

var header = function myheader() {

    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
		u.style.display="none";


    } else {
        y.classList.remove('sticky');
		u.style.display="block";

    }

};
