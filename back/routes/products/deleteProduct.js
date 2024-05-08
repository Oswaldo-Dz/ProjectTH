const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');

router.post("/", async (req, res) => {
    
    const {idProducto} = req.body;
    console.log(idProducto);
    try{
        
    await pool.query('DELETE FROM PRODUCT WHERE id = $1', [idProducto]);
    return res.status(200).json(jsonResponse(200, { message: "Producto Borrado" }));
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Error al realizar accion",
        })
        );

    }
});



module.exports = router;