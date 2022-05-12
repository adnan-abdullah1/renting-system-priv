const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')

const port = 3000;
const authRoutes = require('./modules/auth/routes/authRoute')
const landLordRoutes = require('./modules/landlord/routes/landLordRoute')
const tenanatRoutes = require('./modules/tenant/routes/tenantRoute')
const adminRoutes = require('./modules/admin/routes/adminRoutes')
const sharedRoutes = require('./modules/shared/routes/sharedRoute')


mongoose.connect('mongodb://localhost:27017/Renting-system')
    .then(() => console.log('connected Db'))
    .catch(console.error)

app.use(cors())
// app.use(bodyParser({ limit: '50mb' }));


app.get('/', (req, res) => {
    res.send('Hi')
})



app.use('/api/auth', authRoutes)
app.use('/api/landlord', landLordRoutes)
app.use('/api/tenant', tenanatRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/shared',sharedRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})