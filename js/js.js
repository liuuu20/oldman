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
  "陳清惠高淑真胡夢鯨2019樂齡健康促進課程規畫之研究以預防失智症教學策略為例長庚科技學刊第三十期1高齡人口罹患失智症已快速攀升樂齡學習已是高齡者適應老年階段的重要途徑如何應用教學策略來落實課程目標是樂齡學習教師需具備的關鍵能力本研究以焦點團體訪談法探討預防失智症之樂齡健康促進課程規劃和運ARCS動機模式來激勵學員學習動機及學習成效研究結果為一課程規劃需激發學員學習動機二課程內容需與生活世界連結並具備實用性三課程教學策略需建立學員信心為原則四學習成效需學員感到自我滿意研究結果可提供未來樂齡健康促進課程規劃與實施之參考謝孟臻鍾若男2024改善一位中度失智症合併精神行為症狀之居家照護經驗彰化護理31卷1期本文描述一名中度失智症女性合併精神行為症狀個案的精神科居家照護經驗照護期間為2021年10月13日至12月22日筆者藉由家訪電訪會談及運用身體情緒智能社會及靈性五大層面評估收集資料確立有思考過程改變感覺知覺改變焦慮等問題因個案合併有精神行為症狀讓照顧者壓力倍增也影響全家的生活品質筆者運用精神科居家照護模式運用關懷友善態度與個案建立治療性人際關係定期家訪及電訪引導個案說出症狀干擾時內心感受並共同討論精神症狀干擾時處理技巧運用客制化家庭支持系統聯結失智症共照中心及家庭照顧中心等資源協助個案及家屬找到彼此適切的相處方式提供個別性精神行為症狀的照護知識及技巧持續增進個案與疾病共存並減少精神行為症狀干擾的能力筆者建議照護期間需將照顧者身心健康納入治療計畫定期評估照護能力及協助其紓壓以幫助全家適應艱辛的照顧過程盧怡欣郭玟伶趙素絹林麗味2020戲劇治療於失智症照護之應用澄清醫護管理雜誌3全世界失智症者的盛行率隨著人口老化而倍增許多研究證實非藥物治療可降低患者精神行為狀態及提升生活品質戲劇治療為失智症非藥物治療方法之一其是透過劇場與心理治療結合而成運用演戲的歷程促成行為改變與心理發展許多國外研究發現戲劇治療對於失智症照護有正向之成效然而國內本土之應用上仍未有文獻探討因此本文將論述國外戲劇治療於失智症照護之應用現況以及分析戲劇治療在失智症照護應用上所遭遇的困難包含戲劇治療執行者戲劇治療應用方式戲劇治療步驟與教案內容戲劇治療研究等方面並提出相關建議以供台灣未來應用推展或研究戲劇治療於失智症照護之參考吳瀚德2021中醫藥介入失智症預防保健之課程方案設計成人教育理論的應用中醫內科醫學雜誌19卷1期高齡教育為成人教育的一環成人教育鼓勵成人自我導向學習的精神可用於高齡教育方案規劃中唯高齡者有其特殊的學習特性與學習需求尤其失智症的高齡者與照護者假如對於健康促進用藥安全飲食觀念運動等日常生活中的知識能瞭解更多的話對於健康促進是相當有幫助的中醫藥源遠流長可應用於失智症的照護因此藉由課程方案設計的方式以期提升高齡者的健康素養林紹蘋林藍萍黃秋華林金定2022長者參與失智社區服務據點線上課程之經驗與感受初探臺灣老人保健學刊18卷1/2期5新型冠狀病毒COVID19全球大規模流行因應疫情社區推動安全社交距離導致失智社區服務據點的運作產生深遠影響部分失智社區服務據點於防疫期間利用數位科技將實體課程改為線上課程透過線上課程的參與營造失智者的虛擬互動情境以增加其社會互動然而具體可性行與永續性值得評估因此本此研究將探討失智者參與失智社區服務據點線上課程之經驗與感受本研究採用質性研究之深度訪談為資料收集方式採半結構式訪談的方式收集4位失智者及5位失智症家屬共9位個案為研究個案為達到訪談資料收集之完整性研究者在徵得受訪者同意後將使用手機及錄音筆等錄音設備於訪談過程中全程錄音後續將錄音內容逐步轉為文字資料在進行系統化及概念化之質性資料彙整與分類研究結果分析受訪者針對線上課程是否有其存在之必要性大多數失智症受訪者表示較喜歡實體課程但因疫情無法外出才會參與選擇線上課程這是不得已的選項若以喜好來選擇能看見真實完整人的實體課程才是他們的最愛而具體成效方面受訪對象對於線上課程參與後的感覺大多是正向的態度覺得有上課可以做運動做手作品同時動手又動腦分析失智者對於線上課程的喜愛程度較低於實體課程原因有一是失智者本身個性就喜歡外出喜愛熱鬧另一方面是上課設備受到限制使用手機上課手機螢幕小看不清楚老師的動作或無法有臨場感本研究建議為提升失智症家庭參加線上課程除了選擇使用普及率高簡單易操作的視訊軟體外建議編撰簡易線上課程操作手冊讓失智者或其家屬可以按照操作手冊上的步驟順利進入線上課程以提升參與成效廖婷詒黃子瑄林瑾容紀家明賴筱婷邱怡玟2024日間照顧中心長者社會互動促進專案安泰醫護雜誌30卷1期114背景本單位為收治失能失智混合型日照中心長者們不同程度認知差異致使工作人員帶領活動時較少促進長者彼此間互動也缺乏長者活動後的真實反饋即使活動參與率可達七成但也發現長者對活動的參與多僅於場邊觀看或自行完成活動任務以致同儕間互動機會減少目的期能透過方案之互動合作設計規劃提升長者相互接觸分享及交流的機會以增進社會互動與認知刺激工作人員也針對長者於活動中的表現給予立即性回饋以延緩衰弱失能及失智的進程方法透過參考文獻查證擬定對策等增加互動互助合作活動方案例如認知項目合作指認日常用品分類與適用性美術項目你貼我剪幾何圖形體能項目抗力球你拋我接活動等並依長者認知程度個性活動難易程度分組進行提高長者之間的社會互動行為結果調整互動課程比例由原來48提升至58促進長者的主動行為原來5969提升至64被動行為原來3373降低至29且同儕間相互認識彼此機會增加從原本只認識13人漸增至57人結論藉由互動互助合作的團體活動方案帶領可促進長者與他人之間的社會互動林夢珊楊明磊2019從生態心理學觀點初探園藝治療於失智症長者之運用福祉科技與服務管理學刊7卷3期252261本文目的在於藉由認識園藝治療的理論基礎生態心理學和操作步驟理解園藝活動如何經由植物的媒介對失智症長者產生生理心理治療的交互影響與作用進而改善生活品質增進福祉效益透過介紹園藝治療的中外演進了解園藝治療在台灣的現況發展以及園藝治療師的認證藉由相關案例研究之探討說明應用與治療效益及累積的醫療實證本文結論在於期許園藝治療師與各領域專業工作者發揮創意結合自身優勢累積實務經驗以更寬廣的視野在生活各層面與平台推動此綠色照護GreenCare持續透過植物與自然的力量來幫助更多人尋回健康高湘涵王牧羣及林志學周全性老年評估個案報告84歲女性憂鬱症合併自殺台灣老年醫學暨老年學會雜誌16期12021年2月1日4361台灣的老化指數於民國108年9月已達到1176265歲以上人口占14歲以下人口之百分比指數越高代表高老齡化情況越嚴重於2018年台灣已進入高齡社會65歲以上人口突破14%1老年人的生理心理與社會問題於臨床照護上都需要被關注而老年憂鬱因為診斷不易很容易被忽視尤其在照顧急性病房的患者時往往只專注於急性問題而忽略心理社會問題的評估有憂鬱症狀的老年人比例為816%2而且老年憂鬱症常會與慢性疾病認知功能障礙及失能有關3也會增加死亡率及對生活品質產生負面的影響4本文之個案為一位84歲的女性過去病史有高血壓及高血脂症輕度失智及憂鬱症此次被家人發現意識嗜睡而來急診診斷為吸入性肺炎及BenzodiazepineBZD藥物過量入院後除了使用抗生素針對其感染問題治療外並施以老人周全性評估經由會談後了解個案是因自殺意圖而服用過量的BZD進一步了解其社交網絡家庭支持系統及其因為生理性問題所導致的挫敗感及無價值感經由介入後個案不只於住院中完成感染治療療程也能在出院後利用相關資源在社區中得到妥善的照護對個案整體的照顧更加全面也期望能藉由此次的評估由多方面控制其憂鬱症狀減少與憂鬱症相關的老年病症候群此個案的臨床發現與先前文獻相符合顯示老年憂鬱與其他老年病症候群包含老人衰弱認知功能障礙及心血管疾病具有雙向關係57而其不典型的症狀則需要臨床醫師的細心與耐心評估唯有清楚了解老年病症候群的特性並妥善安排後續處置才能在高齡社會中共同創造年長者及其照顧者的福祉陳錫晚陳瑛治2019認知運動操對失智症預防之應用長期照護雜誌6174隨著壽命的延長罹患失智症的機率隨之提高根據國際失智症協會ADI的推估2017年全球有1000萬名失智症患者失智症的醫療與照護負擔與日俱增因此如何發現失智症的早期症狀並針對高風險群對象採取預防介入措施是首要之務目前用來預防失智症的主要方式以非藥物療法為主非藥物療法的種類繁多包含運動認知訓練音樂治療懷舊療法等本文介紹的認知運動操是由日本國立長壽醫療研究中心為了維持並提升輕度認知障礙患者的認知功能所開發的失智預防方法認知運動操cognicise是cognition認知作業如文字計算接龍和exercise運動所組成的複合式運動其主要特徵是身體與大腦同時並用而非偏重某一項目最重要的是認知運動操經研究證實能有效提升輕度認知障礙者的認知功能達到延緩及預防失智症的效果本文除介紹認知運動操的發展內容與種類外並說明認知運動操的實施方式及操作原則以作為實務運用之參考":
    [
      {
        title:
          "陳清惠, 高淑真, 胡夢鯨. (2019). 樂齡健康促進課程規畫之研究──以預防失智症教學策略為例. 長庚科技學刊, 第三十期,1",
        url: "post1.html#s2",
        summary:
          "高齡人口罹患失智症已快速攀升，樂齡學習已是高齡者適應老年階段的重要途徑，如何應用教學策略來落實課程目標是樂齡學習教師需具備的關鍵能力。本研究以焦點團體訪談法探討預防失智症之樂齡健康促進課程規劃和運ARCS動機模式來激勵學員學習動機及學習成效。研究結果為：（一）課程規劃需激發學員學習動機；（二）課程內容需與生活世界連結並具備實用性；（三）課程教學策略需建立學員信心為原則；（四）學習成效需學員感到自我滿意。研究結果可提供未來樂齡健康促進課程規劃與實施之參考。",
      },
      {
        title:
          "謝孟臻、鍾若男 (2024) 。改善一位中度失智症合併精神行為症狀之居家照護經驗。彰化護理，31卷1期，",
        url: "post2.html#s4",
        summary:
          "本文描述一名中度失智症女性合併精神 行為症狀個案的精神科居家照護經驗。照護 期間為 2021 年 10 月 13 日至 12 月 22 日，筆 者藉由家訪、電訪、會談及運用身體、情緒、 智能、社會及靈性五大層面評估收集資料。確 立有思考過程改變、感覺知覺改變、焦慮等問 題。因個案合併有精神行為症狀，讓照顧者壓 力倍增也影響全家的生活品質。筆者運用精 神科居家照護模式，運用關懷友善態度與個 案建立治療性人際關係，定期家訪及電訪，引 導個案說出症狀干擾時內心感受，並共同討 論精神症狀干擾時處理技巧。運用客制化家 庭支持系統，聯結失智症共照中心及家庭照 顧中心等資源，協助個案及家屬找到彼此適 切的相處方式。提供個別性精神行為症狀的 照護知識及技巧，持續增進個案與疾病共存 並減少精神行為症狀干擾的能力。筆者建議 照護期間需將照顧者身心健康納入治療計畫， 定期評估照護能力及協助其紓壓，以幫助全家適應艱辛的照顧過程。",
      },
      {
        title:
          "盧怡欣、郭玟伶、趙素絹、林麗味 (2020) 。戲劇治療於失智症照護之應用。澄清醫護管理雜誌3",
        url: "post2.html#s6",
        summary:
          "全世界失智症者的盛行率隨著人口老化而倍增，許多研究證實非藥物治療，可降低患者精神行為狀態及提升生活品質。戲劇治療為失智症非藥物治療方法之一，其是透過劇場與心理治療結合而成，運用演戲的歷程，促成行為改變與心理發展。許多國外研究發現，戲劇治療對於失智症照護有正向之成效，然而國內本土之應用上仍未有文獻探討。因此，本文將論述國外戲劇治療於失智症照護之應用現況，以及分析戲劇治療在失智症照護應用上所遭遇的困難，包含：戲劇治療執行者、戲劇治療應用方式、戲劇治療步驟與教案內容、戲劇治療研究等方面，並提出相關建議，以供台灣未來應用、推展或研究戲劇治療於失智症照護之參考。",
      },
      {
        title:
          "吳瀚德 (2021) 。中醫藥介入失智症預防保健之課程方案設計--成人教育理論的應用。中醫內科醫學雜誌，19卷1期",
        url: "post3.html#s7",
        summary:
          "高齡教育為成人教育的一環，成人教育鼓勵成人自我導向學習的精神可用於高齡教育 方案規劃中，唯高齡者有其特殊的學習特性與學習需求，尤其失智症的高齡者與照護者， 假如對於健康促進、用藥安全、飲食觀念、運動等日常生活中的知識能瞭解更多的話，對 於健康促進是相當有幫助的。中醫藥源遠流長，可應用於失智症的照護，因此藉由課程方 案設計的方式，以期提升高齡者的健康素養。",
      },
      {
        title:
          "林紹蘋、林藍萍、黃秋華、林金定 (2022) 。長者參與失智社區服務據點線上課程之經驗與感受初探。臺灣老人保健學刊，18卷1/2期5",
        url: "post3.html#s8",
        summary:
          "新型冠狀病毒（COVID-19）全球大規模流行，因應疫情社區推動「安全社交距離」，導致失智社區服務據點的運作產生深遠影響。部分失智社區服務據點於防疫期間，利用數位科技將實體課程改為線上課程，透過線上課程的參與，營造失智者的虛擬互動情境，以增加其社會互動，然而具體可性行與永續性值得評估，因此本此研究將探討失智者參與失智社區服務據點線上課程之經驗與感受。本研究採用質性研究之深度訪談為資料收集方式，採半結構式訪談的方式收集4位失智者及5位失智症家屬共9位個案為研究個案。為達到訪談資料收集之完整性，研究者在徵得受訪者同意後，將使用手機及錄音筆等錄音設備，於訪談過程中全程錄音，後續將錄音內容逐步轉為文字資料，在進行系統化及概念化之質性資料彙整與分類。研究結果分析受訪者針對線上課程是否有其存在之必要性？大多數失智症受訪者表示較喜歡實體課程，但因疫情無法外出，才會參與選擇線上課程，這是不得已的選項，若以喜好來選擇，能看見真實、完整人的實體課程，才是他們的最愛。而具體成效方面，受訪對象對於線上課程參與後的感覺，大多是正向的態度，覺得有上課，可以做運動、做手作品，同時動手又動腦。分析失智者對於線上課程的喜愛程度較低於實體課程，原因有二：一是失智者本身個性就喜歡外出、喜愛熱鬧；另一方面是上課設備受到限制，使用手機上課，手機螢幕小看不清楚老師的動作，或無法有臨場感。本研究建議為提升失智症家庭參加線上課程，除了選擇使用普及率高、簡單易操作的視訊軟體外，建議編撰簡易線上課程操作手冊，讓失智者或其家屬可以按照操作手冊上的步驟，順利進入線上課程，以提升參與成效。",
      },
      {
        title:
          "廖婷詒、黃子瑄、林瑾容、紀家明、賴筱婷、邱怡玟 (2024) 。日間照顧中心長者社會互動促進專案。安泰醫護雜誌，30卷1期，1-14。",
        url: "post3.html#s9",
        summary:
          "背景：本單位為收治失能、失智混合型日照中心，長者們不同程度認知差異致使工作人員帶領活動時，較少促進長者彼此間互動，也缺乏長者活動後的真實反饋，即使活動參與率可達七成，但也發現長者對活動的參與多僅於場邊觀看，或自行完成活動任務，以致同儕間互動機會減少。目的：期能透過方案之互動合作設計規劃，提升長者相互接觸、分享及交流的機會，以增進社會互動與認知刺激，工作人員也針對長者於活動中的表現給予立即性回饋，以延緩衰弱、失能及失智的進程。方法：透過參考文獻查證、擬定對策等，增加「互動/互助合作」活動方案，例如:認知項目-合作指認日常用品分類與適用性；美術項目-你貼我剪幾何圖形；體能項目-抗力球你拋我接活動等，並依長者認知程度、個性、活動難易程度分組進行，提高長者之間的社會互動行為。結果：調整互動課程比例由原來 48%提升至 58%，促進長者的「主動行為」原來 59.69%提升至 64%、「被動行為」原來 33.73%降低至 29%，且同儕間相互認識彼此機會增加，從原本只認識 1-3 人，漸增至 5-7 人。結論：藉由互動/互助合作的團體活動方案帶領，可促進長者與他人之間的社會互動。",
      },
      {
        title:
          "林夢珊、楊明磊 (2019) 。從生態心理學觀點初探園藝治療於失智症長者之運用。福祉科技與服務管理學刊，7卷3期，252-261。",
        url: "post2.html#s5",
        summary:
          "本文目的在於藉由認識園藝治療的理論基礎（生態心理學）和操作步驟，理解園藝活動如何經由植物的媒介，對失智症長者產生生理、心理治療的交互影響與作用，進而改善生活品質，增進福祉效益。透過介紹園藝治療的中外演進，了解園藝治療在台灣的現況、發展，以及園藝治療師的認證。藉由相關案例研究之探討，說明應用與治療效益及累積的醫療實證。本文結論在於期許園藝治療師與各領域專業工作者發揮創意，結合自身優勢，累積實務經驗，以更寬廣的視野，在生活各層面與平台推動此綠色照護(Green Care)，持續透過植物與自然的力量來幫助更多人尋回健康。",
      },
      {
        title:
          "高湘涵, 王牧羣及林志學. 「周全性老年評估個案報告：84歲女性憂鬱症合併自殺」. 台灣老年醫學暨老年學會雜誌 16, 期 1 (2021年2月1日): 43–61.",
        url: "post1.html#s1",
        summary:
          "台灣的老化指數於民國108年9月已達到117.62 (65歲以上人口占14歲以下人口之百分比，指數越高，代表高老齡化情況越嚴重)，於2018年台灣已進入「高齡社會」，65歲以上人口突破14% 1。老年人的生理、心理與社會問題於臨床照護上都需要被關注。而老年憂鬱因為診斷不易很容易被忽視，尤其在照顧急性病房的患者時，往往只專注於急性問題而忽略心理社會問題的評估。有憂鬱症狀的老年人比例為8-16% 2，而且老年憂鬱症常會與慢性疾病、認知功能障礙及失能有關3，也會增加死亡率及對生活品質產生負面的影響4。本文之個案為一位84歲的女性，過去病史有高血壓及高血脂症、輕度失智及憂鬱症，此次被家人發現意識嗜睡而來急診，診斷為吸入性肺炎及Benzodiazepine (BZD)藥物過量。入院後，除了使用抗生素針對其感染問題治療外，並施以老人周全性評估，經由會談後，了解個案是因自殺意圖而服用過量的BZD，進一步了解其社交網絡、家庭支持系統及其因為生理性問題所導致的挫敗感及無價值感。經由介入後，個案不只於住院中完成感染治療療程，也能在出院後利用相關資源在社區中得到妥善的照護，對個案整體的照顧更加全面，也期望能藉由此次的評估，由多方面控制其憂鬱症狀，減少與憂鬱症相關的老年病症候群。此個案的臨床發現與先前文獻相符合，顯示老年憂鬱與其他老年病症候群(包含老人衰弱、認知功能障礙及心血管疾病)具有雙向關係5-7，而其不典型的症狀，則需要臨床醫師的細心與耐心評估，唯有清楚了解老年病症候群的特性並妥善安排後續處置，才能在高齡社會中，共同創造年長者及其照顧者的福祉。",
      },
      {
        title:
          "陳錫晚、陳瑛治 (2019) 。認知運動操對失智症預防之應用。長期照護雜誌，61-74。",
        url: "post1.html#s3",
        summary:
          "隨著壽命的延長，罹患失智症的機率隨之提高。根據國際失智症協會（ADI）的推估，2017 年全球有 1,000 萬名失智症患者，失智症的醫療與照護負擔與日俱增。因此，如何發現失智症的早期症狀，並針對高風險群對象採取預防介入措施是首要之務。目前用來預防失智症的主要方式以非藥物療法為主，非藥物療法的種類繁多，包含運動、認知訓練、音樂治療、懷舊療法...等等。本文介紹的認知運動操是由日本國立長壽醫療研究中心為了維持並提升輕度認知障礙患者的認知功能所開發的失智預防方法。「認知運動操（cogni-cise）」是 cognition（認知）作業（如：文字、計算、接龍）和 exercise（運動）所組成的複合式運動。其主要特徵是身體與大腦同時並用，而非偏重某一項目。最重要的是認知運動操經研究證實能有效提升輕度認知障礙者的認知功能，達到延緩及預防失智症的效果。本文除介紹認知運動操的發展、內容與種類外，並說明認知運動操的實施方式及操作原則，以作為實務運用之參考。",
      },
    ],
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
  "#身體檢查": ["post1.html#s1"],
  "#神經學檢查": ["post1.html#s1"],
  "#實驗室檢查": ["post1.html#s1"],
  "#影像學檢查": ["post1.html#s1"],

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
