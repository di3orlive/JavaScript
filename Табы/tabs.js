(function($){
  $('.tabs').each(function(){
    var tabs=$(this),
    btTabs=tabs.children('.btTabs'),
    contents=tabs.children('.contentTabs');
    btTabs.children('.bt').click(function(){
      btTabs.children('.bt').removeClass('active');
      contents.children('.contentTab').removeClass('active');
      $(this).addClass('active');
      contents.children('.contentTab:eq('+$(this).index()+')').addClass('active');
    });
    btTabs.children('.bt:first').trigger('click');
  });
})(jQuery);