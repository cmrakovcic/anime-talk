const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
    },
    nav: function(ev){
        ev.preventDefault();
    },
    pageShown: function(ev){
    },
    poppin: function(ev){
    }
}

document.addEventListener('DOMContentLoaded', app.init);