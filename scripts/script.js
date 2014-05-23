(function() {
  $(function() {
    $('pre').addClass('prettyprint');
    prettyPrint();
    return $("#mc-form").ajaxChimp({
      url: "http://barber.us2.list-manage.com/subscribe/post?u=c2a3d075433cc3d4d29b54601&amp;id=35e61978da"
    });
  });

}).call(this);
