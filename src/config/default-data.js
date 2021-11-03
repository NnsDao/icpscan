  const locale = window.localStorage.getItem("locale") || 'zh-TW';
  
  export default {
    // 默认语言
    locale,
    localeSelect: [
      {
        label: "zh-TW",
        value: "中文（繁体）",
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
      {
        label: "tl-SW",
        value: "Kiswahili",
      },
    ],
  }