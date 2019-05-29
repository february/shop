$(function() {
    $(".card-text").wordLimit(100);
    
    
    $('#exampleModalCenter').on('show.bs.modal', function(event) {
        var modal = $(this);
        modal.find('#img_panel').html("");
        var button = $(event.relatedTarget);
        var recipient = button.data('imgs');
        var imgs = recipient.split(",");
        var html = "";
        for (var i in imgs) {
            html += "<img class=\"card-img-top\" src=\"img/" + imgs[i] + "\">";
        };
        modal.find('#img_panel').html(html);
    })
});