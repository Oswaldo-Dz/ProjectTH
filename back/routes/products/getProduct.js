const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');

router.get("/", async (req, res) => {
    try{
    const result = await pool.query('SELECT * FROM PRODUCT');
        return res.status(200).json(jsonResponse(200, { success: result.rows }));
    
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Internal Server Error",
        })
        );

    }
});



module.exports = router;