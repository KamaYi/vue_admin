/**
 *
 * //判断手机号码
 * @param {*} phoneNumber
 * @returns
 */
const rightPhoneNumber = (phoneNumber) => {
    return /^1[34578]\d{9}$/.test(phoneNumber);
}


/**
 *判断固定电话
 *
 * @returns
 */
const rightFixedTelephone = (fixedTelephone) => {
    return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(fixedTelephone)
}

/**
 *判断身份证
 *
 * @param {*} ID
 * @returns
 */
const rightID = (ID) => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(ID)
}



/**
 *
 * 判断浏览器版本
 * @returns
 */
const IEVersion = () => {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; //edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1; //不是ie浏览器
    }
}


/**
 *
 * 判断是手机还是pc访问
 * @returns
 */
const isPhonePc = () => {
    let UA = navigator.userAgent;
    let ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
        isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
        isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
        isMobile = !!(isIphone || isAndroid);
    let CLICK = isMobile ? "tap" : 'click'; // 移动端触摸、PC单击 事件
    if (CLICK == 'tap') {
        return true;
    } else {
        return false;
    }
}



export { rightPhoneNumber, rightFixedTelephone, rightID }