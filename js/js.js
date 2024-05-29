document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    const input = document.getElementById("searchInput").value.trim(); // 获取输入值并去除两边空格
    const url = keywordToPage[input]; // 根据输入获取对应的URL

    if (url) {
      window.location.href = url; // 如果找到URL，则跳转到该页面
    } else {
      alert("未找到相关页面，请输入正确的关键字。"); // 如果没有找到，显示错误消息
    }
  });

const keywordToPage = {
  周全性老年評估: "post1.html#s1",
  老年憂鬱症: "post1.html#s1",
  老人自殺: "post1.html#s1",
  老年認知功能障礙: "post1.html#s1",

  樂齡健康促進: "post1.html#s2",
  失智症: "post1.html#s2",
  ARCS動機模式: "post1.html#s2",
  學習成效: "post1.html#s2",

  輕度認知障礙: "post1.html#s3",
  失智症預防: "post1.html#s3",
  認知運動操: "post1.html#s3",

  失智症: "post2.html#s4",
  精神行為症狀照護: "post2.html#s4",
  精神居家治療: "post2.html#s4",

  生態心理學: "post2.html#s5",
  園藝治療: "post2.html#s5",
  輔助治療: "post2.html#s5",
  失智症長者: "post2.html#s5",
  福祉效益: "post2.html#s5",

  失智症: "post2.html#s6",
  戲劇治療: "post2.html#s6",
  失智症照護: "post2.html#s6",
  Dementia: "post2.html#s6",
  Dramatherapy: "post2.html#s6",
  Dementiacare: "post2.html#s6",

  失智症: "post3.html#s7",
  中醫藥: "post3.html#s7",
  成人教育: "post3.html#s7",

  失智症: "post3.html#s8",
  失智社區服務據點: "post3.html#s8",
  線上課程: "post3.html#s8",
  長期照護: "post3.html#s8",

  日照中心: "post3.html#s9",
  社會互動: "post3.html#s9",
  互動合作: "post3.html#s9",
  Daycarecenter: "post3.html#s9",
  Socialinteraction: "post3.html#s9",
  Interactivecooperation: "post3.html#s9",
};
