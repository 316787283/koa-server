// var siteController = require('../controller/site.js');
var roleController = require('../app/controller/RoleController')
var routingTable = {
    default: {
         //site: siteController,
        role: roleController
    }
}
class Person {
    say() {
        console.log('say')
    }
}
var dispatch = async function(module, controller, action, ctx){
    if(module[controller]){
        if(module[controller][action]){
            new Person().say()
            var index = 0
            var handles = module[controller][action]
            if(handles){
                await handles(ctx)
            }else{
                throw 'action not found'
            }
            // var nexthandles = function(error){
            //     if(error){
            //         next(error)
            //     }else{
            //         var handle = handles[index++]
            //         if(!handle){
            //             next(error)
            //         }else{
            //             handle(req,res,nexthandles)
            //         }
            //     }
            // }
            // nexthandles()
        }else{
            //next()
            throw 'action not found'
        }
    }else{
        //next()
        throw 'action not found'
    }
}
exports.route = async function(module, controller, action, ctx){
    if(routingTable[module]){
        await dispatch(routingTable[module], controller, action, ctx)
    }else{
        
    }
}