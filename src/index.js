const html = require('nanohtml')
var csjs = require('csjs-inject')

const style = csjs`
  .title {
    font-size: 16px;
    color: blue;
  }
`

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

function onclick(e) {
  console.dir(e);
  console.log(`"${e.target.innerText}"" was clicked`)
}