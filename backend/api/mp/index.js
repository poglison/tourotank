const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

const { MercadoPago, MercadoPagoConfig, Preference } = require('mercadopago');


const client = new MercadoPagoConfig({
    access_token: 'APP_USR-4014227609351153-051822-b29f33697a57559cf2372a8f44334c84-292267754',
});

router.post("/", (req, res) => {


    const preference = new Preference(client);
    preference.create(
        {
            body: {
                items: [
                    {
                        id: "1",
                        title: req.body.description,
                        unit_price: Number(req.body.price),
                        quantity: Number(req.body.quantity),
                    }
                ],
            }
        }
    )
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
});

router.get('/feedback', function (req, res) {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});

module.exports = router;