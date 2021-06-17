  const locale = window.localStorage.getItem("locale") || 'zh-CN';
  
  export default {
    // 默认语言
    locale,
    localeSelect: [
      {
        value: "zh-CN",
        label: "中文",
      },
      {
        value: "en-US",
        label: "English",
      },
    ],
  }