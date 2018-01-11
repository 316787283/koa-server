// var query = require('./mysqlPool')
const AllEntity = require('../entity/AllEntity')
const sequelize = require('../util/sequelize')
class BaseDao {
    static getCommonModal(className){
        return sequelize.define(className, AllEntity[className], {
            timestamps: false
        });
    }
    //通过id获取对象
    static async getEntityById(className, id){
        if(AllEntity[className]){
            let CommonModal = this.getCommonModal(className)
            let modals = await CommonModal.findAll({
                where: {
                    id: id
                }
            });
            modals.forEach((p) =>{
                console.log(JSON.stringify(p));
                console.log(JSON.stringify(p));
            })
            console.log(modals.length)
            return modals && modals.length > 0 ? modals[0] : null
        }else{
            return null
        }
    }

    //插入对象
    static async insertEntity(className, entity){
        if(AllEntity[className]){
            var CommonModal = this.getCommonModal(className)
            
            let result = await CommonModal.create(entity)
            return result
        }else{
            return null
        }
        
    }
    //获取所有对象
    static async getAll(className, orderArray) {
        if(AllEntity[className]){
            let result = []
            let CommonModal = this.getCommonModal(className)
            if(orderArray){
                
                let modals = await CommonModal.findAll({
                    order: orderArray
                });
                result = modals
            }else{
                let modals = await CommonModal.findAll();
                result = modals
            }
            return result
        }else{
            return null
        }
    }

    //根据属性获取对象
    static async getEntityByProperty(className, property, value){
        if(AllEntity[className]){
            let CommonModal = this.getCommonModal(className)
            let o = {}
            o[property] = value
            let modals = await CommonModal.findAll({
                where: o
            });
            return modals && modals.length > 0 ? modals[0] : null
        }else{
            return null
        }
    }

    //根据属性获取数据列表
    static async getListByProperty(className, property, value, orderArray){
        if(AllEntity[className]){
            let CommonModal = this.getCommonModal(className)
            let o = {}
            o[property] = value
            let modals = await CommonModal.findAll({
                where: o,
                order: orderArray
            });
            return modals
        }else{
            return null
        }
    }

    //根据多个属性获取数据列表
    static async getListByProperties(className, param, orderArray){
        if(AllEntity[className]){
            let CommonModal = this.getCommonModal(className)
            let modals = await CommonModal.findAll({
                where: param,
                order: orderArray
            });
            return modals
        }else{
            return null
        }
    }

    //根据熟悉获取数据条目
    static async getCountByProperties(className, param){
        if(AllEntity[className]){
            let CommonModal = this.getCommonModal(className)
            let modals = await CommonModal.count({
                where: param
            });
            console.log(modals)
            return modals
        }else{
            return null
        }
    }
}

module.exports = BaseDao
