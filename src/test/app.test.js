const request= require('supertest');
const app= require('../index');

describe('Login POST & GET api',()=>{

    var token='';

    const datos={
        email:"tavov21@gmail.com",
        password:"1234"
    }
    const datoMal={
        email:"tavov921@hotmail.co",
        password:"123456"

    }
    test("enviar datos al registro",async () =>{
        const response = await request(app).post('/api/signup').send(datos);
        expect(response.statusCode).toBe(200);
        token=response.body.token;
        console.log(token);
     })


     test("envio de datos al login",async () =>{
        const response = await request(app).post('/api/signin').send(datos)
        expect(response.statusCode).toBe(200);
        token=response.body.token;
        console.log(token);
        
     })

     test("envio de datos invalidos al login",async () =>{
        const response = await request(app).post('/api/signin').send(datoMal);
        expect(response.statusCode).toBe(400);
     })

     test("obtener las tareas",async () =>{
        const response = await request(app).get('/api/task').send();
        expect(response.statusCode).toBe(200);
     })

     test("obtener las tareas privadas",async () =>{
        const response = await request(app).get('/api/private-task').set('Authorization', 'Bearer '+ token);
        expect(response.statusCode).toBe(200);
     })
});

