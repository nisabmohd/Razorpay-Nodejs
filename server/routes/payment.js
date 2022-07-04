const router = require('express').Router()
const Razorpay = require('razorpay')
const crypto = require("crypto");
const instance = new Razorpay({
    key_id: process.env.KeyId,
    key_secret: process.env.Secret,
});

router.post('/checkout', async (req, res) => {
    const options = {
        amount: parseInt(req.body.amount) * 100,
        currency: "INR"
    }
    const order = await instance.orders.create(options)
    res.send(order)
})

router.post('/paymentverf', (req, res) => {
    console.log(req.body);
    let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    expectedSignature = crypto.createHmac('sha256', process.env.Secret)
        .update(body.toString())
        .digest('hex');
    if (expectedSignature === req.body.razorpay_signature) {
        res.redirect(`${process.env.frontend}/success`)
    } else {
        res.send('payment Failed')
    }
})
module.exports = router