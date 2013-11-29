*Внимание необходим jQuery*

HTML:
```html
<div class="tabs">
  <div class="btTabs">
    <div class="bt">Таб 1</div>
    <div class="bt">Таб 2</div>
    <div class="bt">Таб 3</div>
  </div>
  <div class="contentTabs">
    <div class="contentTab">Описание 1</div>
    <div class="contentTab">Описание 2</div>
    <div class="contentTab">Описание 3</div>
  </div>
</div>
```
CSS:
```css
.contentTab{display:none;}
.contentTab.active{display:block;}
```

Активные ```.bt``` и ```.contentTab``` будут иметь класс ```active```.