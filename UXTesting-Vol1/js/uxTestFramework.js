$( document ).ready(function() {
    initFramework();
});

function initFramework(){

}

function checkOnlinePreview(){
    if(!navigator.onLine) return;
    $("#prevVideo").click(showVideo);
    $("#prevAudio").click(showAudio);
}

function showVideo(e){
    e.preventDefault();
    tmpWidth = $(window).width() * 0.8;
    tmpHeight = (9 * tmpWidth) / 21.0 + 20;
    var videoString = '<div class="ux-lightbox"><iframe frameborder="0" class="ux-iframe" src="http://slideslive.com/embed/38890315/'+tmpWidth+'" width="'+tmpWidth+'" height="'+tmpHeight+'"></iframe></div>'
    $("#ux-lightboxWrapper").append(videoString);
    $(".ux-lightbox").click(clearLightbox);
}

function showAudio(e){
    e.preventDefault();
    tmpWidth = $(window).width() * 0.5;
    tmpHeight = (3 * tmpWidth) / 4.0 + 20;
    var videoString = '<div class="ux-lightbox"><iframe frameborder="0" class="ux-iframe" src="http://slideslive.com/embed/38890377/'+tmpWidth+'" width="'+tmpWidth+'" height="'+tmpHeight+'"></iframe></div>'
    $("#ux-lightboxWrapper").append(videoString);
    $(".ux-lightbox").click(clearLightbox);
}

function clearLightbox(){
    $("#ux-lightboxWrapper").html("");
}
