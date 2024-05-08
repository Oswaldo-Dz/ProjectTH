const { jsonResponse } = require("../../lib/jsonResponse");
const router = require("express").Router();
const pool = require('../../server');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
    
    const {username,password} = req.body;
    //Validar que los campos no esten vacios
    if(!!!username || !!!password){
        return res.status(400).json(jsonResponse(400,{
            error: "Fields are required",
        })
        );
    };
    try{
    const result = await pool.query("SELECT * FROM users WHERE name = $1", [username]);
    if (result.rows.length === 0) {
        return res.status(401).json(jsonResponse(401, { error: "Invalid credentials" }));
      }
      const user = result.rows[0];
      console.log(user);
      // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        //autenticar 
        // const accessToken = "access_token";
        // const refreshToken = "refresh_token";
        return res.status(403).json(jsonResponse(403, { error: "Invalid Credentials" }));
    }else{
        return res.status(200).json(jsonResponse(200, { message: "Login Success", users: user }));
    };
    
    }catch(e){
        res.status(500).json(jsonResponse(500,{
            error: "Internal server error",
        })
        );

    }
});



module.exports = router;