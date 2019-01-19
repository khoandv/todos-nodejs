var configValues=require("./config");
module.exports={
    getDbConnectionString:function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds253324.mlab.com:53324/nodetestdb1`;
      
    }
}