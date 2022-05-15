import * as R from 'ramda';

const map = [
    {name : "Lyon",coordx: 3, coordy:2},
    {name : "Paris",coordx: 2, coordy:4},
    {name : "Marseille",coordx: 3, coordy:0},
    {name : "Bordeaux",coordx: 1, coordy:1.5},
    {name : "Brest",coordx: 0, coordy:4},
    {name : "Strastbourg",coordx: 4, coordy:4},
    {name : "Lille",coordx: 2, coordy:5},
]

const Connexion = []

const calcul_distance = R.applySpec(
    R.add(1, 5)
)

const createConnexion = R.pipe(
    R.map(x => 2*x,[1,2])
)

console.log(Math.sqrt(4));