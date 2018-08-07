/**
 * @author leowang
 * @description  数组类公共方法
 */

 const arrayUtils = function() {
    /**
     * 
     * @param {*} list 用来查找对象的数组 
     * @param {*} val  用来查找对象的属性值
     * @param {*} attr 用来查找对象的属性名
     * @returns 根据某个属性值查找到的对象数组中的某个对象
     */
    function findObj(list, val, attr) {
        if (!list || list.length <= 0 || !val) {
            return {}
        }
        for (var item of list) {
            if (item[attr] === val) {
                return item
            }
        }
    }

    /**
     * 剔除list中的包含某个属性的一个对象
     * @param {*} list 被剔除的数组
     * @param {*} val  被剔除的项的标志属性值
     * @param {*} attr 被剔除的项的标志属性
     * @returns list   被剔除包含指定属性值后的数组
     */
    function spliceObj(list, val, attr) {
        var num = -1
        if (!list || list.length <= 0 || !val) {
            return []
        }
        for (var i = 0, leng = list.length; i < leng; i++) {
            if (list[i][attr] === val) {
                num = i
                break;
            }
        }
        if (num >= 0) {
            list.splice(num, 1)
        }
        return list
    }

    /**
     * @description 剔除数组中某个属性值为val的所有项
     * @param {*} list 被剔除数组
     * @param {*} val 匹配值
     * @param {*} attr 值对应属性
     */
    function spliceObjs(list, val, attr) {
        if (!list || list.length <= 0 || !val) {
            return []
        }
        list.forEach((element,index) => {
            element[attr] === val && list.splice(index, 1)
        });
        return list
    }

    /**
     * 
     * @param {*} list 被查找数组
     * @param {*} attr 被查找属性
     * @param {*} value 被查找属性值
     * @returns  list 包含特定属性值的数组
     */
    function findListByAttr(list, attr, value) {
        if (!list || list.length <= 0) {
            return []
        }
        return list.filter((item) => item[attr] === value)
    }

    /**
     * @description 根据一类属性找出匹配到的一类列表
     * @param {*} list 被查找数组
     * @param {*} attrList 被查找属性数组
     * @param {*} val 被查找属性值
     */
    function findListByAttrs(list, attrList, val) {
        if (!list || !attrList || list.length <= 0 || attrList.length <= 0) {
            return []
        }   
        return list.filter((item) => {
            for(var item2 of attrList) {
                if (item[item2].indexOf(val) > -1) {
                    return item[item2].indexOf(val) > -1
                }
            }
        })
    }

    /**
     * @description 排序函数，仅限于每一项均是数字的项
     * @param {*} list
     * @param {*} flag true表示从小到大 false表示从大到小 
     */
    function sort(list, flag) {
        if (!list || list.length <= 0) {
            return []
        }
        flag ? list.sort((a, b) => a-b) : list.sort((a, b) => b-a) 
        return list
    }

    /**
     * @description 排序函数，每一项均为对象。根据对象中的某个特定的属性值排序
     * @param {*} list 
     * @param {*} attr 
     * @param {*} flag 
     * @todo
     */
    function sortObjList(list, attr, flag) {
        if (!list || list.length <= 0) {
            return []
        }
        return list  
    }

    return {
        findObj,
        findListByAttr,
        findListByAttrs,
        spliceObj,
        spliceObjs,
        sort
    }
 }

 export default arrayUtils()