// BRING IN YOUR AUDIO FILES HERE

var audioOne = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_ImNotThisPicture.mp3';  // replace these with your audio files 
var audioTwo = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_WeHadBackThen.mp3';  // replace these with your audio files
var audioThree = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_IveNeverBeen.mp3';  // replace these with your audio files
var audioFour = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Dukakis_OneOfTheValuesofFurlough.mp3';  // replace these with your audio files

// SET YOUR SCROLL BREAKPOINTS HERE 

var breakOne = 0;
var breakTwo = $('.audio-two').offset().top - $(window).height();
var breakThree = $('.audio-three').offset().top - $(window).height();
var breakFour = $('.audio-four').offset().top - $(window).height();


// SET YOUR AUDIO FILE TITLES

var titleOne = 'LISTEN: The first audio file';
var titleTwo = 'LISTEN: The second audio file';
var titleThree = 'LISTEN: The third audio file';
var titleFour = 'LISTEN: The fourth audio file';

// DO THE STUFF

var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioOne);
    audioElement.setAttribute('preload', 'auto');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
    audioElement.play();
    }, true);

    // controls the playing of the audio

    $('.audioBug').click(function() {

        if ($(this).hasClass('playing')) {
            audioElement.pause();
            $(this).removeClass('playing');
        } else {
            audioElement.play();
            $(this).addClass('playing');
        }
    });

    //hovering over the bug expands it to reveal the audio title. 

    var timer;
	$('.audioBug').hover(function() {
		clearTimeout(timer);
		$(this).addClass('expanded');
		$('.audioBug > h6').fadeIn();
	}, function() {
		$('.audioBug > h6').fadeOut('slow');
		timer = setTimeout(function() {
			$('.audioBug').removeClass('expanded');
		}, 1000);
	});

	// collapses the bug 5 seconds after loading
	function removeBumper() {
		setTimeout(function() {
			$('.audioBug > h6').fadeOut(500, function() {
				$('.audioBug').removeClass('expanded');
			});
		}, 5000);
	}

	//page loads, audio bug expands to reveal title, then collapses again
	setTimeout(function() {
		$('.audioBug').addClass('expanded');
	}, 2000);
	setTimeout(function() {
		$('.audioBug > h6').fadeIn(300, function() {
			removeBumper();
		});
	}, 2700);

    //scrolling through set ranges changes the audio file/title and expands the bug anew

    $(window).scroll(function() {
        if ($(this).scrollTop() > breakOne && $(this).scrollTop() < breakTwo && audioElement.src !== audioOne) {
            audioElement.setAttribute('src', audioOne);
            $('.audioBug > h6').text(titleOne);
        } 
        else if ($(this).scrollTop() > breakTwo && $(this).scrollTop() < breakThree && audioElement.src !== audioTwo) {
            audioElement.setAttribute('src', audioTwo);
            $('.audioBug > h6').text(titleTwo);
        } 
        else if ($(this).scrollTop() > breakThree && $(this).scrollTop() < breakFour && audioElement.src !== audioThree) {
            audioElement.setAttribute('src', audioThree);
            $('.audioBug > h6').text(titleThree);
        } 
        else if ($(this).scrollTop() > breakFour && audioElement.src !== audioFour) {
            audioElement.setAttribute('src', audioFour);
            $('.audioBug > h6').text(titleFour);
        }
    });