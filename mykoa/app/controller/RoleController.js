let RoleService = require('../service/RoleService');
let Entity = require('./Entity')
let roleService = new RoleService()

class RoleController{
    static async index(ctx){
        console.log('wait')
      //res.render('index', {});
    }
    static getRoleService(){
        let roleService = ''
        if(!roleService){
            roleService = new RoleService()
        }
        return roleService
    }
    static async getList(ctx) {
        
        //let rolelist = await roleService.getlist()
        // let a = await roleService.insertRole({
        //     name: 'yjk',
        //     type: 1,
        //     status: 0,
            
        // })
        //let a = await roleService.getRoleById('1')
        //let a = await roleService.getAllRole()
        //let a = await roleService.getRoleByProperty('id', 1)
        let a = await roleService.getCountByProperties()
        console.log(JSON.stringify(a))
        ctx.body = a
    }
    
    static async addRole(ctx){
        // let role = {
        //     name: req.params.name,
        //     type: 1,
        //     status: 0
        // }
        // let addRole = await roleService.addRole(role)
        // res.json(new Entity(0, '', addRole))
    }
    
    static async delRole(ctx){
    
    }
}
module.exports = {
    addRole: RoleController.addRole, 
    index: RoleController.index,
    getList: RoleController.getList,
    delRole: RoleController.delRole,
};