var app = require("../app");
	
app.get("/items", function(req,res){
    var items = ["item 1", "item 2", "item 3"];
    res.send(items);
})