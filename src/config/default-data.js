  const locale = window.localStorage.getItem("locale") || 'zh-CN';
  
  export default {
    // 默认语言
    locale,
    localeSelect: [
      {
        label: "zh-CN",
        value: "中文",
      },
      {
        label: "en-US",
        value: "English",
      },
      {
        label: "ja-JP",
        value: "日本語",
      },
      {
        label: "ko-KR",
        value: "한국어",
      },
    ],
  }