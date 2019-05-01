

/**常量 */
import CONSTANTS from "./constants";
import APIS from "./serviceurls";

/**后端接口 */
export default (function createApis(apis) {
    var api = apis;
    if (typeof (apis.url) != "string") {
        for (var k in apis) {
            apis[k] = createApis(apis[k]);
        }
    }
    /**
     * 接口调用
     * @param 接口入参
     */
    else apis = function (params = {}) {
        const method = api.method;
        const url = String(api.url);
        const changeOrigin = api.changeOrigin;

        return new Promise(function (resolve, reject) {
            if (method == "GETURL") {
                for (var key in params) {
                    url = url.replace(new RegExp(`[$]${key}`, "ig"), params[key]);
                }
                params = {};
                method = "GET";
            }
            $.ajax({
                type: method,
                url: changeOrigin ? CONSTANTS.PROXY_HOST : CONSTANTS.HOST + url,
                data: params,
                dataType: "json",
                success: function (response, xhr) {
                    resolve(response)
                },
                error: function (e) {
                    reject(e);
                }
            })
        });
    };

    return apis;
})(APIS);