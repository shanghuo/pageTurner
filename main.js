var robot = require('./robotjs.node');
var express = require('./sep');
var app = express(10000000);

app.use('/up',(req,res)=>{
    robot.keyTap("up");
    res.end(JSON.stringify({ "ok": "ok" }));
});
app.use('/down',(req,res)=>{
    robot.keyTap("down");
    res.end(JSON.stringify({ "ok": "ok" }));
});

app.use(express.static(__dirname));
app.listen(80);
