document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const input = document.getElementById("searchInput").value.trim(); // Get the input value and trim whitespace
    if (input === "") {
      hideResults();
      return;
    }

    if (input.startsWith("#")) {
      const results = searchDirectLinks(input); // Get direct link based on input
      if (results.length > 0) {
        window.location.href = results[0]; // Redirect to the first matching result
      } else {
        alert("未找到相关页面，请输入正确的关键字。"); // Alert if no results found
        hideResults();
      }
    } else {
      const results = searchKeywords(input); // Get corresponding results based on input
      if (results.length > 0) {
        showResults(results, input); // Show results for matches
      } else {
        alert("未找到相关页面，请输入正确的关键字。"); // Alert if no results found
        hideResults();
      }
    }
  });

document.getElementById("searchInput").addEventListener("input", function () {
  const input = document.getElementById("searchInput").value.trim();
  if (input === "") {
    hideResults();
  }
});

function searchKeywords(input) {
  const results = [];
  for (const [keyword, details] of Object.entries(keywordToDetails)) {
    if (keyword.includes(input)) {
      results.push(...details); // Push all matching details to results
    }
  }
  return results;
}

function searchDirectLinks(input) {
  return keywordToLinks[input] || []; // Return matching links or an empty array
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

  resultsContainer.style.display = "block"; // Show the results container
}

function hideResults() {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = ""; // Clear previous results
  resultsContainer.style.display = "none"; // Hide the results container
}

function highlightText(text, keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

const keywordToDetails = {
  失智症: [
    {
      title: "失智症文章1",
      url: "post1.html#s2",
      summary: "这是关于失智症的文章1摘要。",
    },
    {
      title: "失智症文章2",
      url: "post2.html#s4",
      summary: "这是关于失智症的文章2摘要。",
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
  // 添加更多详细信息
};

const keywordToLinks = {
  "#失智症": [
    "post1.html#s2",
    "post2.html#s4",
    "post2.html#s6",
    "post3.html#s7",
    "post3.html#s8",
  ],
  "#周全性老年評估": ["post1.html#s1"],
  "#老年憂鬱症": ["post1.html#s1"],
  "#老人自殺": ["post1.html#s1"],
  "#老年認知功能障礙": ["post1.html#s1"],
  "#樂齡健康促進": ["post1.html#s2"],
  "#ARCS動機模式": ["post1.html#s2"],
  "#學習成效": ["post1.html#s2"],
  "#輕度認知障礙": ["post1.html#s3"],
  "#失智症預防": ["post1.html#s3"],
  "#認知運動操": ["post1.html#s3"],
  "#精神行為症狀照護": ["post2.html#s4"],
  "#精神居家治療": ["post2.html#s4"],
  "#生態心理學": ["post2.html#s5"],
  "#園藝治療": ["post2.html#s5"],
  "#輔助治療": ["post2.html#s5"],
  "#失智症長者": ["post2.html#s5"],
  "#福祉效益": ["post2.html#s5"],
  "#戲劇治療": ["post2.html#s6"],
  "#失智症照護": ["post2.html#s6"],
  "#Dementia": ["post2.html#s6"],
  "#Dramatherapy": ["post2.html#s6"],
  "#Dementiacare": ["post2.html#s6"],
  "#中醫藥": ["post3.html#s7"],
  "#成人教育": ["post3.html#s7"],
  "#失智社區服務據點": ["post3.html#s8"],
  "#線上課程": ["post3.html#s8"],
  "#長期照護": ["post3.html#s8"],
  "#日照中心": ["post3.html#s9"],
  "#社會互動": ["post3.html#s9"],
  "#互動合作": ["post3.html#s9"],
  "#Daycarecenter": ["post3.html#s9"],
  "#Socialinteraction": ["post3.html#s9"],
  "#Interactivecooperation": ["post3.html#s9"],
};
