const router = require("express").Router()
const Todo = require("../schema/script");



router.get('/',async(req,res)=>{
    const items = await Todo.find();
    res.render("index", {todolist : items})


})

router.post("/add/todo", (req,res) =>{
    const task = req.body.todo;
    const newTodo = new Todo({ task });
    newTodo.save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
})

router.get("/delete/todo/:_id", (req,res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});


router.post("/update/todo/:_id",(req,res) => {
  const newTask = req.popup1.todo;
  console.log(newTask)
  const { _id } = req.params;
  Todo.updateOne({_id}, {$set:{task:newTask}})
})


module.exports = router;

