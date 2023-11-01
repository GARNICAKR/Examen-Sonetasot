const {format} =require('timeago.js');

const helpers={};
helpers.timeago=function(timestap){
    return format(timestap);
};
module.exports=helpers;