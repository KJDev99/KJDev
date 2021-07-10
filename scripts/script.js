$(document).ready(function () {
    $('.fa-list-ul').click(function (e) {
        if ($(".navbar__list").css("display") == 'none') {
            $(".navbar__list").css({display: "block"})
            $(".fa-list-ul").css({display: "none"})
            $(".fa-window-close").css({display: "block"})
        }
    });
    $('.fa-window-close').click(function (e) { 
        if ($(".navbar__list").css("display") == 'block') {
            $(".navbar__list").css({"display": "none"})
            $(".fa-list-ul").css({"display": "block"})
            $(".fa-window-close").css({"display": "none"})
        }
    });

    //Scroll

    $('.navbar').css({
        'position': 'fixed',
        'width': '100%',
        'z-index': '50'
    })

    $(window).scroll(function () {
        let top = innerHeight - $('.nav').outerHeight() - $(window).scrollTop()
        top = top >= 0 ? top : 0
        $('.nav').css('top', `${top}px`)
    });

    $('.navbar__link').click(function (e) {
        e.preventDefault();
        attr = $($(e.target).attr('href')).offset().top - $('.nav').outerHeight()
        $('html, body').animate({
            scrollTop: attr
        }, 1000)
    });

    // owl carulsel

    (function() {
        "use strict";
      
        var carousel = document.getElementsByClassName('carousel')[0],
            slider = carousel.getElementsByClassName('carousel__slider')[0],
            items = carousel.getElementsByClassName('carousel__slider__item'),
            prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
            nextBtn = carousel.getElementsByClassName('carousel__next')[0];
        
        var width, height, totalWidth, margin = 20,
            currIndex = 0,
            interval, intervalTime = 4000;
        
        function init() {
            resize();
            move(Math.floor(items.length / 2));
            bindEvents();
          
            timer();
        }
        
        function resize() {
            width = Math.max(window.innerWidth * .25, 275),
            height = window.innerHeight * .5,
            totalWidth = width * items.length;
          
            slider.style.width = totalWidth + "px";
          
            for(var i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = (width - (margin * 2)) + "px";
                item.style.height = height + "px";
            }
        }
        
        function move(index) {
          
            if(index < 1) index = items.length;
            if(index > items.length) index = 1;
            currIndex = index;
          
            for(var i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName('item__3d-frame')[0];
                if(i == (index - 1)) {
                    item.classList.add('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px)"; 
                } else {
                  item.classList.remove('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                }
            }
          
            slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
        }
        
        function timer() {
            clearInterval(interval);    
            interval = setInterval(() => {
              move(++currIndex);
            }, intervalTime);    
        }
        
        function prev() {
          move(--currIndex);
          timer();
        }
        
        function next() {
          move(++currIndex);    
          timer();
        }
        
        
        function bindEvents() {
            window.onresize = resize;
            prevBtn.addEventListener('click', () => { prev(); });
            nextBtn.addEventListener('click', () => { next(); });    
        }
      
        
        init();
        
      })();

  
    class Typing {
        constructor(obj) {
            this.el = document.querySelector(obj.el)
            this.text = this.el.innerHTML.trim()
            this.el.innerHTML = ''
            this.speed = obj.speed
            this.top = this.el.getBoundingClientRect().top
            this.start = true
            this.startWrite()
            window.addEventListener('scroll', () => this.startWrite())
        }
        
        startWrite() {
            if (window.scrollY + window.innerHeight > this.top && this.start) {
                this.start = false
                this.write()
            }
        }
        
        write(i = 0) {
            if (this.el.innerHTML === this.text) {
                return
            }
            this.el.innerHTML += this.text[i]
            i++
            setTimeout(() => this.write(i), this.speed);
        }
    }

    new Typing({
        el: '.about__name',
        speed: 100
    })
    new Typing({
        el: '.about__surname',
        speed: 100
    })
    new Typing({
        el: '.about__age',
        speed: 100
    })
    new Typing({
        el: '.about__work',
        speed: 100
    })
    new Typing({
        el: '.about__live',
        speed: 100
    })
    new Typing({
        el: '.about__from',
        speed: 100
    })
    new Typing({
        el: '.about__educ',
        speed: 100
    })
    new Typing({
        el: '.about__course',
        speed: 100
    })


    const top = ScrollReveal({
        origin: 'top',
        distance: '100%',
        duration: 2000,
        reset: true
    });

    top.reveal('.header__right',{delay: 300}); 
    top.reveal('.head__link',{delay: 700}); 
    top.reveal('.iteam-right',{delay: 300}); 
    top.reveal('.iteam-right2',{delay: 100}); 

    top.reveal('.header__left',{delay: 500}); 
    top.reveal('.iteam-left',{delay: 100}); 
    top.reveal('.iteam-left2',{delay: 300}); 

    top.reveal('.sec__title',{}); 
    top.reveal('.sec__bottom',{}); 
    top.reveal('.skill',{delay: 100})
    top.reveal('.work__items',{delay: 200}); 
    

    top.reveal('.control',{delay: 100})

    // Skills

    class Protsent {
        constructor(obj){
            this.el = document.querySelector(obj.el)
            this.percent = document.querySelector(obj.percent)
            this.test= this.el.innerHTML
            this.prot = Number.parseInt(this.el.innerHTML)
            this.el.innerHTML = 0
            this.top = this.el.getBoundingClientRect().top
            this.start = true
            this.go()
            window.addEventListener('scroll', () => this.go())
        }
    
        go() {
            if (window.scrollY + window.innerHeight > this.top && this.start) {
                this.start = false
                this.time()
            }
        }
    
        testing() {
            if(this.el.innerHTML < +this.prot){
                this.el.innerHTML++;
                this.percent.style.width = `${this.el.innerHTML}%`
            }
            
        }
        time(){
            setInterval(() => {
                this.testing()
            }, 100); 
        }
       
    }
    new Protsent({
        el: '.html__percent',
        percent: '.html__line'
    })
    new Protsent({
        el: '.css__percent',
        percent: '.css__line'
    })
    new Protsent({
        el: '.scss__percent',
        percent: '.scss__line'
    })
    new Protsent({
        el: '.bootstrap__percent',
        percent: '.bootstrap__line'
    })
    new Protsent({
        el: '.js__percent',
        percent: '.js__line'
    })
    new Protsent({
        el: '.gulp__percent',
        percent: '.gulp__line'
    })
    new Protsent({
        el: '.react__percent',
        percent: '.react__line'
    })
});

var typed = new Typed('.types', {
    strings: [
        "freelancer",
        "web developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



