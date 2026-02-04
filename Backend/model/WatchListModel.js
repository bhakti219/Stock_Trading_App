const {model}=require("mongoose");
const {WatchListSchema}=require("../schemas/WatchListSchema");

const WatchListModel=model("watchList",WatchListSchema);
module.exports={WatchListModel};


