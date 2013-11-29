*Внимание!!! Необходим jQuery.*

Использование:
```js
$(function(){
  $('select').vSelect([param]);
  });
```

Возможен повторный вызов после получения select методом AJAX.

param:
```
{
  parentClass:'select', - класс родителя
  textClass:'text'      - класс текстового блока
}
```
HTML:
```html
<span class="select">
  <span clsas="text">Выберите ...</span>
  <select><option>Выберите ...</option></select>
</span>
```