document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const input = document.getElementById("searchInput").value.trim(); // Get the input value and trim whitespace
    const results = searchKeywords(input); // Get corresponding results based on input

    if (results.length > 0) {
      showResults(results, input); // Show results for matches
    } else {
      alert("未找到相关页面，请输入正确的关键字。"); // Alert if no results found
    }
  });

function searchKeywords(input) {
  const results = [];
  for (const [keyword, details] of Object.entries(keywordToPage)) {
    if (keyword.includes(input)) {
      results.push(...details); // Push all matching details to results
    }
  }
  return results;
}

function showResults(results, input) {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = ""; // Clear previous results

  results.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.className = "search-result-item";

    const resultTitle = document.createElement("a");
    resultTitle.href = result.url;
    resultTitle.className = "search-result-title";
    resultTitle.innerHTML = highlightText(result.title, input);

    const resultSummary = document.createElement("p");
    resultSummary.className = "search-result-summary";
    resultSummary.innerHTML = highlightText(result.summary, input);

    resultItem.appendChild(resultTitle);
    resultItem.appendChild(resultSummary);
    resultsContainer.appendChild(resultItem);
  });
}

function highlightText(text, keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

const keywordToPage = {
  失智症: [
    {
      title: "失智症文章1",
      url: "post1.html#s2",
      summary: "这是关于失智症的文章1摘要。",
    },
    {
      title: "失智症文章2",
      url: "post2.html#s4",
      summary: "这是关于失智症的文章2摘要摘要喔。",
    },
    {
      title: "失智症文章3",
      url: "post2.html#s6",
      summary: "这是关于失智症的文章3摘要。",
    },
    {
      title: "失智症文章4",
      url: "post3.html#s7",
      summary: "这是关于失智症的文章4摘要。",
    },
    {
      title: "失智症文章5",
      url: "post3.html#s8",
      summary: "这是关于失智症的文章5摘要。",
    },
  ],
  周全性老年評估: [
    {
      title: "周全性老年評估文章1",
      url: "post1.html#s1",
      summary: "这是关于周全性老年评估的文章1摘要。",
    },
  ],
  老年憂鬱症: [
    {
      title: "老年憂鬱症文章1",
      url: "post1.html#s1",
      summary: "这是关于老年忧郁症的文章1摘要。",
    },
  ],
  老人自殺: [
    {
      title: "老人自殺文章1",
      url: "post1.html#s1",
      summary: "这是关于老人自杀的文章1摘要。",
    },
  ],
  老年認知功能障礙: [
    {
      title: "老年認知功能障礙文章1",
      url: "post1.html#s1",
      summary: "这是关于老年认知功能障碍的文章1摘要。",
    },
  ],
  樂齡健康促進: [
    {
      title: "樂齡健康促進文章1",
      url: "post1.html#s2",
      summary: "这是关于乐龄健康促进的文章1摘要。",
    },
  ],
  ARCS動機模式: [
    {
      title: "ARCS動機模式文章1",
      url: "post1.html#s2",
      summary: "这是关于ARCS动机模式的文章1摘要。",
    },
  ],
  學習成效: [
    {
      title: "學習成效文章1",
      url: "post1.html#s2",
      summary: "这是关于学习成效的文章1摘要。",
    },
  ],
  輕度認知障礙: [
    {
      title: "輕度認知障礙文章1",
      url: "post1.html#s3",
      summary: "这是关于轻度认知障碍的文章1摘要。",
    },
  ],
  失智症預防: [
    {
      title: "失智症預防文章1",
      url: "post1.html#s3",
      summary: "这是关于失智症预防的文章1摘要。",
    },
  ],
  認知運動操: [
    {
      title: "認知運動操文章1",
      url: "post1.html#s3",
      summary: "这是关于认知运动操的文章1摘要。",
    },
  ],
  精神行為症狀照護: [
    {
      title: "精神行為症狀照護文章1",
      url: "post2.html#s4",
      summary: "这是关于精神行为症状照护的文章1摘要。",
    },
  ],
  精神居家治療: [
    {
      title: "精神居家治療文章1",
      url: "post2.html#s4",
      summary: "这是关于精神居家治疗的文章1摘要。",
    },
  ],
  生態心理學: [
    {
      title: "生態心理學文章1",
      url: "post2.html#s5",
      summary: "这是关于生态心理学的文章1摘要。",
    },
  ],
  園藝治療: [
    {
      title: "園藝治療文章1",
      url: "post2.html#s5",
      summary: "这是关于园艺治疗的文章1摘要。",
    },
  ],
  輔助治療: [
    {
      title: "輔助治療文章1",
      url: "post2.html#s5",
      summary: "这是关于辅助治疗的文章1摘要。",
    },
  ],
  失智症長者: [
    {
      title: "失智症長者文章1",
      url: "post2.html#s5",
      summary: "这是关于失智症长者的文章1摘要。",
    },
  ],
  福祉效益: [
    {
      title: "福祉效益文章1",
      url: "post2.html#s5",
      summary: "这是关于福祉效益的文章1摘要。",
    },
  ],
  戲劇治療: [
    {
      title: "戲劇治療文章1",
      url: "post2.html#s6",
      summary: "这是关于戏剧治疗的文章1摘要。",
    },
  ],
  失智症照護: [
    {
      title: "失智症照護文章1",
      url: "post2.html#s6",
      summary: "这是关于失智症照护的文章1摘要。",
    },
  ],
  Dementia: [
    {
      title: "Dementia Article 1",
      url: "post2.html#s6",
      summary: "This is the summary of Dementia Article 1.",
    },
  ],
  Dramatherapy: [
    {
      title: "Dramatherapy Article 1",
      url: "post2.html#s6",
      summary: "This is the summary of Dramatherapy Article 1.",
    },
  ],
  Dementiacare: [
    {
      title: "Dementiacare Article 1",
      url: "post2.html#s6",
      summary: "This is the summary of Dementiacare Article 1.",
    },
  ],
  中醫藥: [
    {
      title: "中醫藥文章1",
      url: "post3.html#s7",
      summary: "这是关于中医药的文章1摘要。",
    },
  ],
  成人教育: [
    {
      title: "成人教育文章1",
      url: "post3.html#s7",
      summary: "这是关于成人教育的文章1摘要。",
    },
  ],
  失智社區服務據點: [
    {
      title: "失智社區服務據點文章1",
      url: "post3.html#s8",
      summary: "这是关于失智社区服务据点的文章1摘要。",
    },
  ],
  線上課程: [
    {
      title: "線上課程文章1",
      url: "post3.html#s8",
      summary: "这是关于线上课程的文章1摘要。",
    },
  ],
  長期照護: [
    {
      title: "長期照護文章1",
      url: "post3.html#s8",
      summary: "这是关于长期照护的文章1摘要。",
    },
  ],
  日照中心: [
    {
      title: "日照中心文章1",
      url: "post3.html#s9",
      summary: "这是关于日照中心的文章1摘要。",
    },
  ],
  社會互動: [
    {
      title: "社會互動文章1",
      url: "post3.html#s9",
      summary: "这是关于社会互动的文章1摘要。",
    },
  ],
  互動合作: [
    {
      title: "互動合作文章1",
      url: "post3.html#s9",
      summary: "这是关于互动合作的文章1摘要。",
    },
  ],
  Daycarecenter: [
    {
      title: "Daycarecenter Article 1",
      url: "post3.html#s9",
      summary: "This is the summary of Daycarecenter Article 1.",
    },
  ],
  Socialinteraction: [
    {
      title: "Socialinteraction Article 1",
      url: "post3.html#s9",
      summary: "This is the summary of Socialinteraction Article 1.",
    },
  ],
  Interactivecooperation: [
    {
      title: "Interactivecooperation Article 1",
      url: "post3.html#s9",
      summary: "This is the summary of Interactivecooperation Article 1.",
    },
  ],
};
