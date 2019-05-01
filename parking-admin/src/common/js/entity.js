


import $ from 'jquery'

export const RequestDataItem = class RequestDataItem {

    constructor(){
        this.attributes = {};
        this.objectId = "";
        this.subItems = [];
    }

    addAttribute(name, value) {
        this.attributes[name] = value;
    }

    addSubItem(obj) {
        this.subItems.push(obj);
    }
}

export const RequestParams = class RequestParams {

    constructor(){
        /**附带属性 */
        this.attributes = {};
        this.seqId = "";
        /**业务规则ID，按业务规范命名进行设置； */
        this.serviceId = "";
        /**业务对象列表； */
        this.dataItems = [];
    }

    addAttribute(name, value) {
        this.attributes[name] = value;
    }

    addDataItem(requestDataItem) {
        this.dataItems.push(requestDataItem);
    }

}

export const ResponseBody = class ResponseBody {
    
    constructor(obj) {

        /**附加属性； */
        this.attributes = {};
        /**返回的业务对象列表； */
        this.dataItems = [];
        /**resultCode对应的消息描述 */
        this.message = "";
        /**0：成功 1：失败  */
        this.resultCode = 0;
        this.seqId = "";
        /**业务规则ID，按业务规范命名进行设置； */
        this.erviceId = "";

        $.extend(this, obj);
    }
}




