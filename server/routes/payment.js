const router = require('express').Router()
const Razorpay = require('razorpay')

const instance = new Razorpay({
    key_id: process.env.KeyId,
    key_secret: process.env.Secret,
});

router.post('/checkout', async (req, res) => {
    const options = {
        amount:parseInt(req.body.amount)*100,
        currency: "INR"
    }
    const order = await instance.orders.create(options)
    res.send(order)
})

router.post('/paymentverf', (req, res) => {
    res.status(200).send({ success: true })
})
module.exports = router