const Bootstrapper = require('../Bootstrapper');

function CommandProcessor(){

    this.execute = (command)=>{
        let cmdHandlerType = command.type + "Handler";
        let handler = Bootstrapper.container.get(cmdHandlerType);
        return handler.execute(command);       
    }
}

module.exports = new CommandProcessor();





// app.get('/players', (req, res) => {
//     let repo = new PlayerRepository();
//     repo.getAll()
//         .then(todos =>{
//             let mytodos = todos.serialize();
//             res.send(mytodos);
//         })
//         .catch(error =>{
//             res.send(error);        
//         })
// })

// app.get('/todos', (req, res) => {
//     if (!req.params) return res.sendStatus(400); 
//     Todo.where({id: req.query.id})
//         .fetch()
//         .then(todo =>{
//             res.send(JSON.stringify(todo));
//         })
//         .catch(error =>{
//             res.send(JSON.stringify(error));        
//         })
// })


// app.post('/todos/create', urlencodedParser, (req, res) =>{
    
//     if (!req.body) return res.sendStatus(400);
//     let todo = new Todo({
//         completed: req.body.completed,
//         description: req.body.description
//     })
//     todo.save()
//         .then(savedTodo => {
//             res.send(JSON.stringify(savedTodo.attributes));
//         })
//         .catch(error => {
//             res.send(JSON.stringify(error));        
//         })


// })


// app.put('/todos/update/:id', urlencodedParser, (req, res) =>{
//     if (!req.body) return res.sendStatus(400);
//     let updateData = {
//         completed: req.body.completed,
//         description: req.body.description

//     }
    
//     new Todo({id: req.body.id})
//         .save(updateData)
//         .then(updateData=>{
//             res.send(JSON.stringify(updateData.attributes));
//         })
//         .catch(error => {
//             res.send(JSON.stringify(error));        
//         })

// })