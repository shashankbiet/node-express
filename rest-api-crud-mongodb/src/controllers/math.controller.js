const mathService = require('../services/math.service');

module.exports = {
    addition: (req, res) => {
        let x = parseFloat(req.params.x), y = parseFloat(req.params.y);
        if (isNaN(x) || isNaN(y)) {
            res.status(404).json({ result: 'bad request' });
        }
        let result = mathService.addition(x, y);
        if (result) {
            res.status(200).json({ result: result });
        } else {
            res.status(500).json({ result: 'some error occured' });
        }
    },
    subtraction: (req, res) => {
        let x = parseFloat(req.params.x), y = parseFloat(req.params.y);
        if (isNaN(x) || isNaN(y)) {
            res.status(404).json({ result: 'bad request' });
        }
        let result = mathService.subtraction(x, y);
        if (result) {
            res.status(200).json({ result: result });
        } else {
            res.status(500).json({ result: 'some error occured' });
        }
    },
    multiplication: (req, res) => {
        let x = parseFloat(req.params.x), y = parseFloat(req.params.y);
        if (isNaN(x) || isNaN(y)) {
            res.status(404).json({ result: 'bad request' });
        }
        let result = mathService.multiplication(x, y);
        if (result) {
            res.status(200).json({ result: result });
        } else {
            res.status(500).json({ result: 'some error occured' });
        }
    },
    division: (req, res) => {
        let x = parseFloat(req.params.x), y = parseFloat(req.params.y);
        if (isNaN(x) || isNaN(y)) {
            res.status(404).json({ result: 'bad request' });
        }
        let result = mathService.division(x, y);
        if (result) {
            res.status(200).json({ result: result });
        } else {
            res.status(500).json({ result: 'some error occured' });
        }
    }
}

