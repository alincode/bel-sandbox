const html = require('nanohtml')

const el = html`
  <body>
    <h1>Hello world</h1>
    <div>Click Me</div>
  </body>
`

document.body.appendChild(el)