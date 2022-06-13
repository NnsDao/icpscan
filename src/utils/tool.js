/**
 * @param {number} s
 * @returns {100,000.00}
 */
export function toThousands(s, type) {
  if (s == null || s == '' || s == 0) return '0.00';
  s = Number(s);
  var result = s;
  if (s < 0) {
    s = 0 - s;
  }
  if (isNaN(s)) return '';
  s = s.toString().replace(/^(\d*)$/, '$1.');
  s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
  s = s.replace('.', ',');
  var re = /(\d)(\d{3},)/;
  while (re.test(s)) s = s.replace(re, '$1,$2');
  s = s.replace(/,(\d\d)$/, '.$1');
  if (type == 0) {
    var a = s.split('.');
    if (a[1] == '00') {
      s = a[0];
    }
  }
  if (result < 0) {
    s = '-' + s;
  }
  return s;
}

export function getTodayUnix() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

export function MDate(dval) {
  var interval = (new Date().getTime() - dval) / 10000;
  if (Math.floor(interval / 60) <= 0) {
    //1 分钟之前
    return 'just now';
  } else if (interval < 3600) {
    //1 分钟到 1 小时之间
    return Math.floor(interval / 60) + ' minutes ago';
  } else if (interval >= 3600 && dval - getTodayUnix() >= 0) {
    //1 小时到 1 天之间
    return Math.floor(interval / 3600) + ' hours ago';
  } else if (interval / (3600 * 24) <= 31) {
    //1 天到 1 个月（假设固定为 31 天）之间
    return Math.ceil(interval / (3600 * 24)) + ' days ago';
  } else {
    return this.mydate(dval);
  }
}

export function mydate(time_stamp) {
  var date = new Date(parseInt(time_stamp) * 1000).toLocaleString('zh', {
    hour12: false
  });
  return date;
}

const divisionBigInt = (number1, number2) => {
  return Number(Number(number1) / Number(number2));
};

const multipBigInt = (number1, number2) => {
  return Number(Number(number1) * Number(number2));
};

export { divisionBigInt, multipBigInt };
