$( document ).ready(function() {

    
    let containerA = document.getElementById("circleA");
  
    let circleA = new ProgressBar.Circle(containerA, {
  
      color: '#57d41d',
      strokeWidth: 8,
      duration: 1400,
      from: { color: '#80eac4'},
      to: { color: '#57d41d'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 60);
        circle.setText(value);
  
      }
  
    });
  
    let containerB = document.getElementById("circleB");
  
    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#57d41d',
      strokeWidth: 8,
      duration: 1600,
      from: { color: '#80eac4'},
      to: { color: '#57d41d'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 254);
        circle.setText(value);
  
      }
  
    });
  
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#57d41d',
      strokeWidth: 8,
      duration: 1800,
      from: { color: '#80eac4'},
      to: { color: '#57d41d'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 32);
        circle.setText(value);
  
      }
  
    });
  
    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#57d41d',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#80eac4'},
      to: { color: '#57d41d'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 5423);
        circle.setText(value);
  
      }
  
    });
  
    
    let dataAreaOffset = $('#data-area').offset();
    
    let stop = 0;
  
    $(window).scroll(function (e) {
  
      let scroll = $(window).scrollTop();
  
      if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
  
        stop = 1;
      }
  
    });
  
    
    setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
      $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 200);
  
    
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'services-menu') {
        scrollTo = servicesSection;
      } else if(btnId == 'team-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'portfolio-menu') {
        scrollTo = portfolioSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
  
  });
  

  // função validação email cadastro.

  function Enviar(){

    let email = document.getElementsByName("email");


    if ((form.email.value =="") || (form.email.value.indexOf('@')==-1)
    || (form.email.value.indexOf('.')==-1)){
    
    alert("Favor preencher com endereço de email válido.");

    }else{
        alert("Email cadastrados com sucesso.");
    }


  }


  function Cadastro(){

    let email1 = document.getElementsByName("email1");
    let assunto = document.getElementsByName("assunto");
    let mensagem = document.getElementsByName("mensagem");

    if((form1.email1.value =="") || (form1.email1.value.indexOf('@')==-1)
    || (form1.email1.value.indexOf('.')==-1) || (form1.assunto.value =="")
    || (form1.assunto.value.includes("@","/","<",">","#","%","¨","!","*","+","-"))
    || (form1.mensagem.value.length < 5) || (form1.mensagem.value.length > 1024)
    || (form1.assunto.value.length < 4) || (form1.assunto.value.length > 100))
    {
      alert("Dados inválidos, favor preencher corretamente.")

    }else{
      alert("Dados enviados com sucesso, aguarde o contato da nossa equipe.");
    }



  }