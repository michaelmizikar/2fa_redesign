$(function() {

  function morphElement(elmnt, newType) {
    var html = "<" + newType;
    for (var i = 0; i < elmnt.attributes.length; i++)
      html += " " + elmnt.attributes[i].name + '="' + elmnt.attributes[i].value + '"';
    html += ">" + elmnt.innerHTML + "</" + newType + ">";
    return $(html);
  }

  $(window).bind('beforeprint', function() {
    if ($.browser.mozilla) {
      $('fieldset').each( function(item) {
        $(this).replaceWith(morphElement(this, "div").addClass("fieldset"));
      });
      $('legend').each( function(item) {
        $(this).replaceWith(morphElement(this, "div").addClass("legend"));
      });
    }
  });
  $(window).bind('afterprint', function() {
    if ($.browser.mozilla) {
      $('.fieldset').each( function(item) {
        $(this).replaceWith(morphElement(this, "fieldset").removeClass("fieldset"));
      });
      $('.legend').each( function(item) {
        $(this).replaceWith(morphElement(this, "legend").removeClass("legend"));
      });
    }
  });
});
