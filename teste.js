module.exports =  function(){
    let controller = {};//objeto vazio
    controller.teste = function(req, res){
        let json = {
            nome:'Darth Vader',
            idade: 33
        }
        res.send(json);
    }
    return controller;
}