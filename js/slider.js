//Slider
var mySlider = function myslider() {
    //get body 
    var body, section;
    body = document.getElementById('body');
    //create Section for banner
    section = document.createElement('section');
    body.appendChild(section);

    var sec_el = [{
        banner: 'images/adharav_banner.jpg'
    }]
    document.querySelector('section').innerHTML += `
       <div class="banner"><img src="${sec_el[0].banner}" class="img responsive"></div>
    `;

}
mySlider();