document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    const input = document.getElementById("searchInput").value.trim(); // 获取输入值并去除两边空格
    const urls = keywordToPage[input]; // 根据输入获取对应的URL列表

    if (urls) {
      if (urls.length === 1) {
        window.location.href = urls[0]; // 如果只有一个URL，直接跳转
      } else {
        showResults(urls); // 显示结果列表让用户选择
      }
    } else {
      alert("為找到相關頁面，請輸入正確的關鍵字。"); // Alert if no results found
    }
  });

function showResults(urls) {
  const resultsContainer = document.getElementById("resultsContainer");
  const resultsSelect = document.getElementById("resultsSelect");
  resultsSelect.innerHTML = ""; // Clear previous options

  urls.forEach((url) => {
    let option = document.createElement("option");
    option.value = url;
    option.textContent = url; // Display URL or you could modify to show a more user-friendly description
    resultsSelect.appendChild(option);
  });

  resultsContainer.style.display = "block"; // Display the results container
}

function goToSelectedPage() {
  const selectedUrl = document.getElementById("resultsSelect").value;
  window.location.href = selectedUrl; // Navigate to selected URL
}

const keywordToPage = {
  周全性老年評估: ["post1.html#s1"],
  老年憂鬱症: ["post1.html#s1"],
  老人自殺: ["post1.html#s1"],
  老年認知功能障礙: ["post1.html#s1"],
  心理病症: ["post1.html#s1"],
  自尊心下降: ["post1.html#s1"],

  樂齡健康促進: ["post1.html#s2"],
  失智症: [
    "post1.html#s2",
    "post2.html#s4",
    "post2.html#s6",
    "post3.html#s7",
    "post3.html#s8",
  ],
  ARCS動機模式: ["post1.html#s2"],
  學習成效: ["post1.html#s2"],

  輕度認知障礙: ["post1.html#s3"],
  失智症預防: ["post1.html#s3"],
  認知運動操: ["post1.html#s3"],

  精神行為症狀照護: ["post2.html#s4"],
  精神居家治療: ["post2.html#s4"],

  生態心理學: ["post2.html#s5"],
  園藝治療: ["post2.html#s5"],
  輔助治療: ["post2.html#s5"],
  失智症長者: ["post2.html#s5"],
  福祉效益: ["post2.html#s5"],

  戲劇治療: ["post2.html#s6"],
  失智症照護: ["post2.html#s6"],
  Dementia: ["post2.html#s6"],
  Dramatherapy: ["post2.html#s6"],
  Dementiacare: ["post2.html#s6"],

  中醫藥: ["post3.html#s7"],
  成人教育: ["post3.html#s7"],
  畫鐘測驗: ["post3.html#s7"],

  失智社區服務據點: ["post3.html#s8"],
  線上課程: ["post3.html#s8"],
  長期照護: ["post3.html#s8"],
  社區支援: ["post3.html#s8"],

  日照中心: ["post3.html#s9"],
  社會互動: ["post3.html#s9"],
  互動合作: ["post3.html#s9"],
  DayCareCenter: ["post3.html#s9"],
  SocialInteraction: ["post3.html#s9"],
  InteractiveCooperation: ["post3.html#s9"],
  失智症照顧測繪: ["post3.html#s9"],
};
