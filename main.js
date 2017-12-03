$( document ).ready(function() {
    
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    });


      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll( function(){
          
              /* Check the location of each desired element */
              $('.fadeinscroll').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'opacity':'1'},3000);
                          
                  }
                  
              }); 
          
          });
          
      });

      $(document).ready(function() {
        
        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
        
            /* Check the location of each desired element */
            $('.fadeinscrollfast').each( function(i){
                
                var bottom_of_object = $(this).position().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1500);
                        
                }
                
            }); 
        
        });
        
    });


      $.ajax({
        method: 'GET',
        url: "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=evelinasundin&api_key=596bfe5bae097e1c9f7dd354901bc20c&format=json&limit=1",
        dataType: 'JSON',
        success: function(response) {
            console.log(response);
            $('.song-container .artist-info').html(response.recenttracks.track[0].artist['#text']);
            $('.song-container .song-info').html(response.recenttracks.track[0].name);
        },
        error: function(code, message) {
            $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
        }
    });


    $(document).ready(function() {

  	$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
        });
       });


    });