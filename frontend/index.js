const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })

        history.replaceState({}, 'Home', '#home');
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