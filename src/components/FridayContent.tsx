const FridayContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">企業簡介</h3>
        <p className="text-muted-foreground leading-relaxed">
          friDay 影音是由台灣遠傳電信經營的本土 OTT 串流平台，主打日韓劇、本土內容與同日跟播服務。面對國際巨頭的競爭壓力，friDay 影音選擇深耕利基市場，以差異化策略在台灣串流市場中佔有一席之地。
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">經營模式特色</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-theme-pink bg-theme-pink-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">利基市場定位：哈日哈韓族群</h4>
            <p className="text-muted-foreground text-sm">
              精準鎖定台灣龐大的日韓劇迷群體，提供同日跟播、獨家首播等服務，滿足粉絲「追劇不等待」的需求。
            </p>
          </div>
          <div className="border-l-4 border-theme-pink bg-theme-pink-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">電信生態圈整合</h4>
            <p className="text-muted-foreground text-sm">
              結合遠傳 5G 資費方案，將串流服務綁定電信資費，有效降低用戶獲取成本（CAC），創造電信與內容的雙贏模式。
            </p>
          </div>
          <div className="border-l-4 border-theme-pink bg-theme-pink-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">支持本土原創</h4>
            <p className="text-muted-foreground text-sm">
              積極採購與投資台灣原創戲劇、電影，扶植本地影視產業，建立與國際平台的差異化優勢。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">結論</h3>
        <p className="text-muted-foreground leading-relaxed">
          friDay 影音展現了差異化策略與生態圈整合的成功實踐。在 Netflix、Disney+ 等國際巨頭環伺下，friDay 影音透過精準的市場定位、電信資源整合與本土內容耕耘，在台灣 OTT 市場中建立穩固地位，為本土企業在全球化競爭中的生存之道提供了寶貴範例。
        </p>
      </section>
    </div>
  );
};

export default FridayContent;
