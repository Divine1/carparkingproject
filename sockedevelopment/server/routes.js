module.exports = (app,io) => {
    
    const FAILED = "failed";
    const SUCCESS = "success";
    app.get("/",(req,res)=>{
        console.log("in root route")
        res.send({"data" : "home"})
    })

    /*
    type,data
    */
    app.get("/floordata",(req,res)=>{
        console.log("in floordata route req ")
        let reqParams = null;
        let floor1 = null;
        let floor2 = null;
        let floor3 = null;
        let floor4 = null;
        let type = null;
        reqParams = req.query;
        let validation = validateFloorData(reqParams)
        console.log("validation ",validation)
        if( validation === SUCCESS){
            type = reqParams.type;
            
            console.log("type ",type)
            switch(type){
                case "allfloors":
                    floor1 = reqParams.floor1;
                    floor2 = reqParams.floor2;
                    floor3 = reqParams.floor3;
                    floor4 = reqParams.floor4;
                    let allfloors = {floor1,floor2,floor3,floor4};
                    io.emit("allfloors",{"data" : allfloors})
                break;
                case "floor1":
                    floor1 = reqParams.floor1;
                    io.emit("FLOOR1",{"data" : floor1})
                break;
                case "floor2":
                    floor2 = reqParams.floor2;
                    io.emit("FLOOR2",{"data" : floor2})
                break;
                case "floor3":
                    floor3 = reqParams.floor3;
                    io.emit("FLOOR3",{"data" : floor3})
                break;
                case "floor4":
                    floor4 = reqParams.floor4;
                    io.emit("FLOOR4",{"data" : floor4})
                break;
                default:
            }        
            res.send({"data" : "floordata reached server"})
        }else{
            res.send({"data" : "validation failed. Construct a valid request"})
        }
    })

    var validateFloorData = (reqParams)=> {
        console.log("in validateFloorData() ")
        let floor1 = null;
        let floor2 = null;
        let floor3 = null;
        let floor4 = null;
        let type = null;

        try{
            type = reqParams.type;
            if(type == null) return FAILED
        }
        catch(e){
            console.log("type is not found ",e)
            return FAILED
        }
        console.log("type ",type)
        
        switch(type){
            case "allfloors":
                try{
                    floor1 = reqParams.floor1;
                    floor2 = reqParams.floor2;
                    floor3 = reqParams.floor3;
                    floor4 = reqParams.floor4;
                    if(!isNotNull(floor1)){
                        return FAILED
                    }
                    if(!isNotNull(floor2)){
                        return FAILED
                    }
                    if(!isNotNull(floor3)){
                        return FAILED
                    }
                    if(!isNotNull(floor4)){
                        return FAILED
                    }
                    return SUCCESS
                }
                catch(e){
                    console.log(" catch ",e)
                    return FAILED
                }
            case "floor1":
                try{
                    floor1 = reqParams.floor1;
                    if(!isNotNull(floor1)){
                        return FAILED
                    }
                    return SUCCESS
                }
                catch(e){
                    console.log(" catch ",e)
                    return FAILED
                }
            case "floor2":
                try{
                    floor2 = reqParams.floor2;
                    if(!isNotNull(floor2)){
                        return FAILED
                    }
                    return SUCCESS
                }
                catch(e){
                    console.log(" catch ",e)
                    return FAILED
                }
            case "floor3":
                try{
                    floor3 = reqParams.floor3;
                    if(!isNotNull(floor3)){
                        return FAILED
                    }
                    return SUCCESS
                }
                catch(e){
                    console.log(" catch ",e)
                    return FAILED
                }
            case "floor4":
                try{
                    floor4 = reqParams.floor4;
                    if(!isNotNull(floor4)){
                        return FAILED
                    }
                    return SUCCESS
                }
                catch(e){
                    console.log(" catch ",e)
                    return FAILED
                }
            default:
                return FAILED
        }     
    }

    var isNotNull = (input)=>{
        if(input == null)
            return false
        else
            return true
    }
}