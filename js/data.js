const fs=require("fs");
const addperson=(id , fname , lname ,age , city )=>{
    const alldata=loaddata();
    const duplicatedid=alldata.filter((obj)=>{
        return obj.id===id
    })
    if(duplicatedid.length===0){
        alldata.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
        savealldata(alldata);
    }
    else{
        console.log("error duplicated id !!!!");
    }
}
// ----------------------------
const deleteperson=(id)=>{
    const alldata=loaddata()
    const datatokeep=alldata.filter((obj)=>{
        return obj.id!==id
    })
    savealldata(datatokeep)
}
// ----------------------------
const readdata=(id)=>{
    const alldata=loaddata()
    const dataneeded=alldata.find((obj)=>{
        return obj.id==id
    })
    if(dataneeded){
        console.log( dataneeded.id , dataneeded.fname)
    }
    else{
        console.log("data not found !!!")
    }
}
// ----------------------------
const listdata=()=>{
    const alldata=loaddata()
    alldata.forEach(obj=>{
        console.log(obj.fname , obj.age , obj.city)
    })
}
// ----------------------------
const loaddata=()=>{
    try{
        const datajson=fs.readFileSync("data.json").toString();
        return JSON.parse(datajson);
    }
    catch{
        return [];
    }
    
}

const savealldata=(alldata)=>{
    const savealldatajson=JSON.stringify(alldata);
    fs.writeFileSync("data.json" , savealldatajson)
}
// ------------------------------
module.exports={
    addperson ,
    deleteperson,
    readdata,
    listdata
}

