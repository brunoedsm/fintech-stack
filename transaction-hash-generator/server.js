var SHA256 = require("crypto-js/sha256");
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/authorization', async (req, res) => {
    let transaction = { from, to, amount } = req.body;
    transaction["timestamp"] = new Date().toISOString();

    try {
        
        const hash = SHA256(JSON.stringify(transaction)).toString();
        console.log(hash);

        return res.send(hash);
    }
    catch (error) {
        return res.send(error);
    }
});

const app = express();
app.use(router);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Hash service at http://localhost:${port}`))