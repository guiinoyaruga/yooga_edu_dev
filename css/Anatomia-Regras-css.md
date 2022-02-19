## tipos

Global = *, com força 0
Elementos = h1,h2,p,div, com força 1
Class = .blue, .m-2, com força 10
ID = #nome, com força 100
inline = style dentro de tags, com força 1000
!important = sobrescreve todos o styles do CSS

## At-rules

- @import = Regras para incluir um css externo ou fonte;
- @media = Regras para dispositivos;
- @font-face = fontes externas;
- @keyframes = animacoes no css;


## Links adicionais

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

## Funcoes 

* nome seguido de abre e fecha paretesis
* recebe argumentos

```css
{

   color: rgb(255, 0, 100);
   width: calc(100% - 10px);

}
```

## Vendor Prefixes

Permite que os browsers adicione "Features"
a fim de colocar em uso alguma novidade que vemos no CSS

**http://ireade.github.io/which-vendor-prefix/**

# Exemplos

```css
p{

-webkit-background-clip: text;  = Chrome, Safari, iOS e Android
-moz-background-clip: text; = Mozilla (Firefox)
-ms-background-clip: text; = Internet Explorer
-o-background-clip: text; = Opera

}











```css
h1{
    color:blue
    font-size:60px;
    background:gray;

}

```