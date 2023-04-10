const cnx=require('../config/conexion');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const controller ={};


controller.signup = async (req, res)=>{

    const password = req.body.password;
    console.log(password);
    let hash = await bcrypt.hash(password,10);
    console.log(hash);

    var data={
        email:req.body.email,
        password:hash,         
   }

   cnx.query('INSERT INTO usuario set ?',[data],(error, result)=>{
         console.log(result);               
     }); 

   const token = jwt.sign({user: data}, 'secretKey');
   res.status(200).json({token});


}

controller.signin = async (req, res)=>{
    
 const {email, password} = req.body;

 if (email && password) {
    cnx.query('SELECT * FROM usuario WHERE email = ?',[email],async (err, usuario)=>{
          if (usuario.length == 0 || !(await bcrypt.compare(password, usuario[0].password))) {
            return res.status(400).send('no existe el usuario');
            
          }else{         
            console.log(usuario[0]);
            const token = jwt.sign({user: usuario[0]}, 'secretKey');
            return res.status(200).json({token}); 
              
            }
    
        });
 }else{
    res.send('ingrese un email o contraseña valido');
 }

        

}

module.exports = controller;


