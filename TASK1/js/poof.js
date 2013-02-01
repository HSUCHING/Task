/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 1/16/13
 * Time: 4:29 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {

    $('.deleteme').click(function(e) {
        // set the x and y offset of the poof animation <div> from cursor position (in pixels)
        var xOffset = 24;
        var yOffset = 24;

        // remove clicked box from the document tree
        $(this).fadeOut('fast');

        // set the absolute postion of the poof animation <div>
        // uses e.pageX and e.pagY to get the cursor position
        // and offsets the poof animation from this point based on the xOffset and yOffset values set above
        $('.poof').css({
            left: e.pageX - xOffset + 'px',
            top: e.pageY - yOffset + 'px'
        }).show(); // display the poof <div>
        animatePoof(); // run the sprite animation
    });
});

function animatePoof() {
    var bgTop = 0; // initial background-position for the poof sprit is '0 0'
    var frames = 5; // number of frames in the sprite animation
    var frameSize = 32; // size of poof <div> in pixels (32 x 32 px in this example)
    var frameRate = 100; // set length of time each frame in the animation will display (in milliseconds)

    // loop through amination frames
    // and display each frame by resetting the background-position of the poof <div>
    for(i=1;i<frames;i++) {
        $('.poof').animate({
            'background-position-y': (bgTop - frameSize) + 'px'
        }, frameRate);
        bgTop -= frameSize; // update bgPosition to reflect the new background-position of our poof <div>
    }
    // wait until the animation completes and then hide the poof <div>
    setTimeout("$('.poof').hide()", frames * frameRate);
}


// the script below is relevant only to the styling of this specific example page
// it sets up the alternating colors of the deletable boxes
// and is not necessary for making the poof function
// you may safely ignore or delete it
$(document).ready(function() {
    $('.deleteme:even').addClass('even');
});
