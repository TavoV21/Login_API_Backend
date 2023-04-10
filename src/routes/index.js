const { Router } = require('express');
const cnx = require('../config/conexion')
const router = Router();
const verifyToken = require('../security/token')
const loginController = require('../controllers/loginController');

router.post('/signup', loginController.signup);

router.post('/signin', loginController.signin);

router.get('/task', (req,res) =>{
    res.json([
        {
            id: 1,
            name: 'Tarea 1',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '4/04/2023'
        },
        {
            id: 2,
            name: 'Tarea 2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '8/12/2026'
        },
        {
            id: 3,
            name: 'Tarea 3',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '2/06/2028'
        },

        {
            id: 4,
            name: 'Tarea 4',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '7/08/2020'
        },

        {
            id: 5,
            name: 'Tarea 5',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '1/04/2019'
        },

        {
            id: 6,
            name: 'Tarea 6',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '5/05/2017'
        }

    ])
});

router.get('/private-task', verifyToken, (req,res) =>{
    res.json([
        {
            id: 1,
            name: 'Tarea 1',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '4/04/2023'
        },
        {
            id: 2,
            name: 'Tarea 2',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '8/12/2026'
        },
        {
            id: 3,
            name: 'Tarea 3',
            description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, totam omnis libero explicabo autem quisquam eligendi. Minus delectus eos voluptatum amet, eligendi impedit hic. Optio provident esse ipsam maxime ad.',
            date: '2/06/2028'
        }

    ])
});


module.exports= router;

