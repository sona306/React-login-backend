const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "uname":String,
        "pwd":String
}
)

let loginmodel = mongoose.model("logins",schema);
module.exports={loginmodel}