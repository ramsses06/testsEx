# codepen (https://codepen.io/ramsses06/pen/yLeRRyg)

## SASS
```scss
  @import url('https://fonts.googleapis.com/css?family=Quicksand:500,600,700&display=swap');
  $lato: 'Quicksand', sans-serif;

  $blue: #5cb3db;
  $darkBlue: #3c6a80;

  * {
    font-family: $lato;
    font-weight: 200;
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
  }

  .box {
    width: 400px;
    height: 400px;
    margin: 5px auto;
    background: $blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px $darkBlue solid;
    & p {
      color: white;
      text-align: center;
    }
  }
```

## HTML
```html
  <div class="box"><p>HOLA MUNDO ¡!!!</p></div>
```