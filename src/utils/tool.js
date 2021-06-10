/**
 *
 * 时间日期工具
 */

 import * as moment from "moment";

 const DateUtil = {
   install(Vue) {
     Vue.prototype.$date = {
       toDate() {
 
       },
       stampToDate() {
 
       },
       dateToStamp(datetime) {
         return parseInt(datetime.getTime() / 1000)
       },
       dateToShortFormat(param) {
         if (param == '' || param == null) {
           return ' '
         }
         return moment(param).format("YYYYMMDD");
       },
       dateToWebFormat(param) {
         if (param == '' || param == null) {
           return ' '
         }
         return moment(param).format("YYYY-MM-DD");
       },
       dateToAllFormat(param) {
         if (param == '' || param == null) {
           return ' '
         }
         return moment(param).format("YYYY-MM-DD hh:mm:ss");
       },
     
     }
   }
 }
 
 export default DateUtil
 
