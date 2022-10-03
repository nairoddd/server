const knex = require("../model/knex");

function createCars(cars){
    return knex("cars").insert(cars);
}

function getAllCars(){
    return knex("cars").select("*");
}
function getOneCars(id){
    return knex("cars").select("*").where({id});
}
function updateCars(id,cars){
    return knex("cars").where({id}).update(cars);
}
function deleteCars(id){
    return knex("cars").where({id}).del();
}

module.exports = {
    createCars,
    getAllCars,
    getOneCars,
    updateCars,
    deleteCars
}