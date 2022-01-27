const axios = require("axios");
async function getDataForEach(ids){
    listForData = [];
    ids.forEach(async (id)=>{
        const result = await axios.get("https://reqbin.com/echo/get/json");
        //console.log(result.data);
        listForData.push(result.data);
    });
    listForData.forEach((item)=> console.log(item));
}

async function getDataFor(ids){
    listForData = [];
    for (i=0; i<ids.length; i++){
        const result = await axios.get("https://reqbin.com/echo/get/json");
        listForData.push(result.data);
        
    }
    listForData.forEach((item)=> console.log(item));

}
//getDataForEach([1,2,3]).then(console.log("done"));
getDataFor([1,2,3]).then(console.log("done"));