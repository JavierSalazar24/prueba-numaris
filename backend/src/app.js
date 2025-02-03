import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import unitsRoutes from './routes/index.js'
import cors from 'cors'

const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

app.use('/api', unitsRoutes)

app.use(express.static(path.join('dist')))

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next()
  }
  res.sendFile(path.resolve('dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

export default app
