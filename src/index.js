const html = require('nanohtml')
const csjs = require('csjs-inject')
const breadcrumb = require('breadcrumb-element')
const morphdom = require('morphdom')

const style = csjs`
  .title {
    font-size: 16px;
    color: blue;
  }
`

// Compose an Element
const el = html`
  <body>
    <h1>Hello world</h1>
    <div class="${style.title}">Hi everybody</div>
    <button onclick=${onclick}>
      Click Me
    </button>
  </body>
`

document.body.appendChild(el)

// Attributes and Events

function onclick(e) {
  console.dir(e);
  console.log(`"${e.target.innerText}"" was clicked`)
}

// Compose Multiple Elements

var bears = ['grizzly', 'polar', 'brown']
var element = html`<ul>
  ${bears.map(function (bear) {
    return html`<li>${bear}</li>`
  })}
</ul>`

document.body.appendChild(element)

// Updating an Element

const element2 = html`
  <div>Hi</div>
`
document.body.appendChild(element2)

morphdom(element2, html`<div>changed!</div>`)

// Data Down

function render(msg) {
  return html`<div>${msg}</div>`
}
var element3 = render('alincode')

document.body.appendChild(element3)

morphdom(element3, render('john'))

// Scaling

var bears = ['grizzly', 'polar', 'brown']
var element4 = render2(bears)
document.body.appendChild(element4)

function render2(bears) {
  return html`<ul>
    ${bears.map(function (bear) {
      return html`<li>${button(bear)}</li>`
    })}
  </ul>`
}

function button(label) {
  return html`<button>${label}</button>`
}



// breadcrumb

// const element = breadcrumb(['C', 'C++', 'JAVA'], function (picked) {
//   console.log(picked)
// })

// document.body.appendChild(element)