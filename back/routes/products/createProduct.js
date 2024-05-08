const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');

router.post("/", async (req, res) => {
    console.log(req.body);
    const {name,image,price,description,category,brand} = req.body;
    if(!!!name || !!!price || !!!description || !!!category || !!!brand){
        return res.status(400).json(jsonResponse(400,{
            error: "Favor de llenar todos los campos",
        })
        );
    }
    if(price ==0 ){
        return res.status(400).json(jsonResponse(400,{
            error: "Favor de validar el precio del producto",
        })
        );
    };
    try{
        //Crear producto en la base de datos 
            await pool.query('INSERT INTO product(name,image,price,description,category,brand) VALUES($1, $2, $3, $4, $5, $6)', [name,image,price,description,category,brand]);
            res.status(200).json(jsonResponse(200,{message: "Se creo el producto correctamente"}));
            
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Internal server error",
        })
        );
    }
});



module.exports = router;