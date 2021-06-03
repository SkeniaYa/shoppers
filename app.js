const express = require('express');
const path = require('path')
const morgan = require('morgan')
const hbs = require('hbs')

const PORT = 3000 
const app = express()


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))


// подключение routers

// подключение routers


// Start middleware section
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static('public'))
// Start middleware section

app.listen(PORT, () => {
    console.log('server work >>>', PORT)
})


