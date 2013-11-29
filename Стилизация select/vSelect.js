/*
Использование:
$('select').vSelect([param]);
// возможен повторный вызов после получения select методом AJAX
param:
{
  parentClass:'select', - класс родителя
  textClass:'text'      - класс текстового блока
}
HTML:
<span class="select">
  <span clsas="text">Выберите ...</span>
  <select><option></option></select>
</span>
*/
(function($){
  $.fn.vSelect=function(options){
    var opt = $.extend({
      parentClass:'select',
      textClass:'text'
    },options);
    return this.each(function(){
      if(!$(this).parent().hasClass('.'+opt.parentClass)){
        $(this).wrap('<span class="'+opt.parentClass+'" style="cursor:pointer;display:inline-block;position:relative;width: '+$(this).width()+'px;"></span>').after('<span class="'+opt.textClass+'" style="overflow: hidden;white-space:nowrap;float: left;width:100%;">'+$(this).find('option:selected').html()+'</span>').css({'border':0,'width':'100%','z-index':2,'cursor':'pointer','opacity':0,'position':'absolute','top':0,'left':0,'height':'100%'})
        .change(function(){
          $(this).parent().find('.'+opt.textClass).html($(this).find('option:selected').html());
        });
      }
    });
  }
})(jQuery);