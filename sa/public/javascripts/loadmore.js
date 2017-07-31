$(document).ready(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {// makes sure the whole site is loaded 
            $('#status').fadeIn(); // will first fade out the loading animation 
            $('#preloader').delay(12000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(12000).css({'overflow':'visible'});
        } else { // makes sure the whole site is loaded 
            $('#status').fadeIn(); // will first fade out the loading animation 
            $('#preloader').delay(5500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(5500).css({'overflow':'visible'});
        }
})




function Load() {
    var a = document.getElementById('loadmore');
    var b = document.getElementById("loadmore2");
    var c = document.getElementById("loadmore3");
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
    }

    if (b.style.display === 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
    }
     if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
    }
}

function Load2() {
	var d = document.getElementById("loadmore4");
    var e = document.getElementById("loadmore5");
	 if (d.style.display === 'block') {
        d.style.display = 'none';
    } else {
        d.style.display = 'block';
    }
     if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none"); 
});

$("#partnerAlert").click(function() {
	alert('Will be available in App Store in August 2017!');
});

$('#alertSubmit').click(function() {
	alert('Email sent!');
});

$('#alertSubscribed').click(function() {
	alert('Subscribed!');
})

$('#alertSubmitAmb').click(function() {
	alert('Email sent!');
});

$("#chungAlert").click(function() {
    alert('Coming in 2018!');
});





