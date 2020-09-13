const { Router } = require('express');
const router = Router();


router.get('/tasks', (req, res) => {
    const data = {
        "Task01":"pedido",
        "Description":"pegar_ordem_pedido"
    };

    res.json(data);
});

module.exports = router;