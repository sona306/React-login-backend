const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "name":String,
        "dob":String,
        "blood":String,
        "mob":String,
        "add":String,
        "pin":String,
        "dis":String,
        "uname":String,
        "pwd":String,
        "confirm":String
}
)

let registermodel = mongoose.model("registers",schema);
module.exports={registermodel}