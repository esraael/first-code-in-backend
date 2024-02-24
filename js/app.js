const yargs=require("yargs");
const data=require("./data")
yargs.command({
    command:"add",
    describe:"you add an item",
    builder:{
        fname:{
            describe:"you added fname ",
            demandOption:true,
            type:"string",
        }
    },
    handler:(x)=>{
        data.addperson(x.id , x.fname , x.lname , x.age , x.city)
    }
})
yargs.parse();
// ----------------------------------------
yargs.command({
    command:"delete",
    describe:"you deleted an item",
    handler:(x)=>{
        data.deleteperson(x.id)
    }
})
yargs.parse();
// -----------------------------------------
yargs.command({
    command:"read",
    describe:"you readed an item",
    builder:{
        id:{
            describe:"you readed id ",
            demandOption:true,
            type:"string",
        }
    },
    handler:(x)=>{
        data.readdata(x.id , x.fname)
    }
})
yargs.parse();
// -------------------------------------------
yargs.command({
    command:"list",
    describe:"to list data",
    handler:(x)=>{
        data.listdata()
    }
})
yargs.parse();










