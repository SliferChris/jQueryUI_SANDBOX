$(".circle").draggable({
    revert: "invalid",
    helper: "clone",
    containment: "#container",
});//END DRAGGABLE 

$("#dropZone").droppable({
    accept: "#C1, #C2, #C3",
    hoverClass: "drop-hover",
    over: handleOverEvent,
    out: handleOutEvent,
    drop: handleDropEvent,
}); //END DROPPABLE

function handleDropEvent(event, ui) {
    ui.draggable.draggable({
        disabled: true
    }).css("opacity", 0.5);

    setTimeout(function (){
        $("#dropZone > p").text("DROPZONE");
}, 500);
} //END handleDropEvent function

function handleOverEvent(event, ui) {
    $("#dropZone > p").text("ACCEPTED");
} //END handleOverEvent function

function handleOutEvent(event, ui) {
    $("#dropZone > p").text("DROPZONE");
} //END handleOutEvent function