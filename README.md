# TccNgOwlCarousel

This project is develop for Angular 4.

## Install

```html
npm install tcc-ng-owl-carousel
```

## Import library

If you use [Angular Cli](https://github.com/angular/angular-cli), edit `.angular-cli.json`

```json
{
  "apps": [
    {
      //...
      "styles": [
        //...
        "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
      ],
      "scripts": [
        //...
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/owl.carousel/dist/owl.carousel.min.js"
      ]
    }
  ]
}
```

Without `Angular CLI`, edit `index.html`

```html
<!--index.html-->
<link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
<script src="/node_modules/jquery/dist/jquery.min.js"></script>
<script src="/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
```

## Usage

You can find the options of OwlCarouse2 [here](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)

```typescript
//app.component.ts
export class AppComponent {
    configs = {
        items: 2, 
        nav: true
    };
}
```
```typescript
//app.module.ts
//...
import { TccOwlCarouselDirective } from 'tcc-ng-owl-carousel';

@NgModule({
  declarations: [
    TccOwlCarouselDirective,
    //...
  ],
  //...
})
export class AppModule { }
```
```html
<!--app.component.html-->
<div tccOwlCarousel [configs]="configs">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
</div>
```