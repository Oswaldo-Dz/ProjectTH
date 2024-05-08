const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');

router.post("/", async (req, res) => {
    const {user_id,cp,colonia,estado,ciudad,num_ext,pais} = req.body;
    try{
        console.log(req.body);
        //Crear producto en la base de datos 
            await pool.query('INSERT INTO orders(user_id,cp,colonia,estado,ciudad,num_ext,pais) VALUES($1, $2, $3, $4, $5, $6,$7)', [user_id,cp,colonia,estado,ciudad,num_ext,pais]);
            res.status(200).json(jsonResponse(200,{message: "Se creo la orden correctamente"}));
            
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Internal server error",
        })
        );
    }
});



module.exports = router;