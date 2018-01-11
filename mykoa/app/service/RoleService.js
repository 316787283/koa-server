// var query = require('./mysqlPool')
const RoleDao = require('../dao/RoleDao') 
class RoleService {
    async getlist(page, pagesize){
        // let results = await new Promise(function(resolve,reject){
        //     query('select * from role','', function(err,results,fields){
        //         console.log('1232311')
        //         if(err){
        //             resolve({code: -1})
        //         }
        //         if(results){
        //             resolve(results)
                    
        //         }
        //     }) 
        // })
        // console.log(JSON.stringify(results))
        // return results
        return 
    }
    async insertRole(role){
        let results = await RoleDao.insertEntity('Role', role)
        console.log(results)
        return results
    }
    async getRoleById(id) {
        let results = await RoleDao.getEntityById('Role', id)
        console.log(JSON.stringify(results))
        return results
    }
    async getAllRole() {
        let results = await RoleDao.getAll('Role', [['id', 'desc']])
        console.log(JSON.stringify(results))
        return results
    }
    async getRoleByProperty(property, value) {
        let results = await RoleDao.getEntityByProperty('Role', property, value)
        return results
    }
    async getListByProperty(property, value) {
        let results = await RoleDao.getListByProperty('Role', property, value, [['id', 'desc']])
        return results
    }
    async getListByProperties(){
        let results = await RoleDao.getListByProperties('Role', {name: 'yjk', type: 1}, [['id', 'desc']])
        return results
    }
    async getCountByProperties(){
        let count = await RoleDao.getCountByProperties('Role',{name: 'yjk', type: 1})
        return count
    }
}

module.exports = RoleService