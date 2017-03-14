// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require zeroclipboard
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).ready(function () {
    $('#input-field').on('ajax:success', function(status, data){
        var url = "http://localhost:3000/" + data.short_id;
        $('#fe_text').html("<strong><a href='"+url+"' target='_blank'>"+url+"</a></strong>");

    }).on('ajax:error',function(status, data){
        $('#fe_text').html('');
        $('#fe_text').html('<h4><strong>URL cannot be blank</strong></h4>');




    });
    var clip = new ZeroClipboard($("#d_clip_button"));


    $('#reset').click(function() {

        $("#fe_text").html('');

    });
});




