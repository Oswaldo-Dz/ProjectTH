const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    
    const {username, email,password} = req.body;
    if(!!!username || !!!email || !!!password){
        return res.status(400).json(jsonResponse(400,{
            error: "Fields are required",
        })
        );
    }
    try{
        //Crear usuario en la base de datos 
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            await pool.query('INSERT INTO users(name, password, email) VALUES($1, $2, $3)', [username, hash, email]);
            res.status(200).json(jsonResponse(200,{message: "Se creo el usuario correctamente"}));
            });
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Internal server error",
        })
        );
    }
});



module.exports = router;