

let is_image_visible = true;

if(is_image_visible === true){
    $("#block").show();
    setInterval(function() { $("#block").hide(); }, 2000);
    // !! : update the value of your flag 
}
else{
    $("#block").hide();
    setTimeout(function() { $("#block").show(); }, 2000);
        // !! : update the value of your flag 
}