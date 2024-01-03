const express = require("express");
const app = express();

const user = [{
    name: "bhupendra",
    kidney: [{
        healthy: false,
    }]
}];

// Corrected middleware usage
app.use(express.json());

app.get("/", function(_req, res) {
    const bhupendra = user[0].kidney;
    const numberofkidney = bhupendra.length;
    let numberofhealthkidney = 0;
    
    for (let i = 0; i < bhupendra.length; i++) {
        if (bhupendra[i].healthy) {
            numberofhealthkidney++;
        }
    }
    
    const numberofunhealthkidney = numberofkidney - numberofhealthkidney;
    
    res.json({
        numberofkidney,
        numberofhealthkidney,
        numberofunhealthkidney
    });
});

app.post("/", function(req, res) {
    const ishealthy = req.body.ishealthy;

    // Corrected syntax for pushing new kidney data
    user[0].kidney.push({
        healthy: ishealthy
    });

    res.json({
        msg: "done!"
    });
});
app.put("/", function(req,res){
    for(i = 0; i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = true;
    }
    res.json({});
})


app.delete("/", function(req,res){
   const newkidney = [];
   for (let i = 0 ;i<user[0].kidney.length;i++){
    if(user[0].kidney[i].healthy){
        newkidney.push({
            healthy : true
        })
    }
    user[0].kidney = newkidney;
    res.json({msg: "done"})
   }

})

app.listen(3002, () => {
    console.log("Server is running on port 3001");
});
