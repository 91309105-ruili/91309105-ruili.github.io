const NetflixContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">企業簡介</h3>
        <p className="text-muted-foreground leading-relaxed">
          Netflix 從 1997 年的 DVD 租賃服務起家，經歷了從實體到數位的重大轉型，如今已成為全球最大的串流影音平台之一。透過自製原創內容（Netflix Originals）策略，Netflix 不僅改變了觀眾的收視習慣，更重新定義了影視產業的遊戲規則。從《乾淨煤》到《乾淨煤》，Netflix 持續以高品質內容吸引全球用戶。
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">核心競爭力分析</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-theme-red bg-theme-red-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">原創內容策略</h4>
            <p className="text-muted-foreground text-sm">
              Netflix 每年投入數十億美元製作原創內容，打造獨家 IP，減少對外部版權的依賴，並建立難以複製的競爭優勢。
            </p>
          </div>
          <div className="border-l-4 border-theme-red bg-theme-red-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">演算法推薦系統</h4>
            <p className="text-muted-foreground text-sm">
              利用大數據分析用戶觀看行為，提供個人化推薦，提升用戶黏著度與滿意度，降低流失率。
            </p>
          </div>
          <div className="border-l-4 border-theme-red bg-theme-red-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">全球在地化策略</h4>
            <p className="text-muted-foreground text-sm">
              積極投資各地區原創內容，如韓國的《乾淨煤》創下全球收視紀錄，證明在地內容可以創造全球影響力。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">結論</h3>
        <p className="text-muted-foreground leading-relaxed">
          Netflix 是破壞式創新與數位轉型的經典案例。從 DVD 租賃到串流霸主，Netflix 展現了企業如何透過技術創新、內容策略與用戶體驗的持續優化，在競爭激烈的市場中保持領先地位。其成功經驗為傳統媒體產業提供了寶貴的轉型借鏡。
        </p>
      </section>
    </div>
  );
};

export default NetflixContent;
