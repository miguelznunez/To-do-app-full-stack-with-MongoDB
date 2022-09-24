const Item = require("../model/itemModel");

const getList = async (req, res) => {
  Item.find({}, (err, rows) => {
    if (err) throw new Error(err)
    res.status(200).render("index", {"rows" : rows})
  }) 
}

const addItem = async (req, res) => {
  const todoItem = req.query.item
  const item = new Item({
     item : todoItem,
     check : false,
  })
  item.save()
  res.status(200).redirect("/")
}

const updateItem = async (req, res) => {
  const item = await Item.findById(req.query.id)

  if(!item){
    res.status(400)
    throw new Error("Item not found")
  }

  await Item.findByIdAndUpdate({ _id: req.query.id}, { check: req.query.action })

  res.status(200).redirect("/")
}

const deleteItem = async (req, res) => {
  const item = await Item.findById(req.query.id)

  if(!item){
    res.status(400)
    throw new Error("Item not found")
  }

  await item.remove()

  res.status(200).redirect("/")

}

module.exports = {
  getList,
  addItem,
  updateItem,
  deleteItem,
}
