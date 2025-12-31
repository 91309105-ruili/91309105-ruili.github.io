const DisneyContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">企業簡介</h3>
        <p className="text-muted-foreground leading-relaxed">
          Disney+ 於 2019 年正式推出，依托迪士尼集團百年品牌積累，整合旗下迪士尼動畫、皮克斯、漫威、星際大戰及國家地理等頂級 IP 內容。作為傳統媒體巨頭進軍串流市場的代表，Disney+ 展現了品牌資產在數位時代的強大變現能力。
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">管理策略分析</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-theme-blue bg-theme-blue-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">IP 變現能力</h4>
            <p className="text-muted-foreground text-sm">
              迪士尼擁有全球最具價值的娛樂 IP 組合，從經典動畫到漫威超級英雄，每個 IP 都能延伸至電影、電視、主題樂園、周邊商品等多元變現渠道。
            </p>
          </div>
          <div className="border-l-4 border-theme-blue bg-theme-blue-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">垂直整合策略</h4>
            <p className="text-muted-foreground text-sm">
              從內容製作、發行到終端呈現，迪士尼掌控完整價值鏈，確保內容品質與品牌一致性，同時最大化利潤空間。
            </p>
          </div>
          <div className="border-l-4 border-theme-blue bg-theme-blue-light p-4 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-2">定價策略與 Bundle 組合</h4>
            <p className="text-muted-foreground text-sm">
              透過 Disney+、Hulu、ESPN+ 的組合方案，提供消費者更高性價比選擇，同時提升用戶生命週期價值（LTV）與降低流失率。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">結論</h3>
        <p className="text-muted-foreground leading-relaxed">
          Disney+ 代表傳統媒體巨頭如何利用既有品牌資產切入數位串流市場，與 Netflix 形成正面競爭。其成功關鍵在於無可取代的 IP 內容庫、強大的品牌忠誠度，以及跨平台整合的生態系優勢。這場串流大戰中，Disney+ 證明了「內容為王」的永恆真理。
        </p>
      </section>
    </div>
  );
};

export default DisneyContent;
