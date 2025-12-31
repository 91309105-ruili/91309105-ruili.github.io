import { Lightbulb, TrendingUp } from 'lucide-react';

const ReflectionContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">企業管理學期總結：OTT 產業觀察</h2>
        <p className="text-muted-foreground leading-relaxed">
          透過本學期對 OTT 串流產業的深入研究，我深刻體會到現代企業經營的核心要素。從 Netflix 的破壞式創新、Disney+ 的 IP 變現策略，到 friDay 影音的在地化耕耘，每個案例都呈現了不同的管理智慧。
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">學習重點：內容為王、使用者體驗</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-theme-green-light border border-theme-green/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-theme-green/10 rounded-lg">
                <Lightbulb className="w-5 h-5 text-theme-green" />
              </div>
              <h4 className="font-semibold text-foreground">差異化策略</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Netflix 以原創內容建立護城河、Disney+ 以頂級 IP 吸引忠實粉絲、friDay 影音以日韓同步跟播服務利基市場。這完美呼應了 Michael Porter 的差異化競爭理論——在同質化市場中，唯有創造獨特價值才能脫穎而出。
            </p>
          </div>
          <div className="bg-theme-green-light border border-theme-green/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-theme-green/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-theme-green" />
              </div>
              <h4 className="font-semibold text-foreground">商業模式轉型</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              從單次購買到訂閱制的轉變，代表企業從追求短期交易轉向經營長期客戶關係。訂閱模式讓企業更重視用戶生命週期價值（LTV），持續優化服務以降低流失率，這是現代 SaaS 商業模式的核心精神。
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-foreground mb-4">延伸思考</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          本學期最大的收穫是理解到大數據分析已成為企業決策的核心。Netflix 的推薦演算法、Disney+ 的用戶行為追蹤、friDay 的收視數據分析，都展現了 data-driven decision making 的重要性。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          這啟發我在未來職涯發展中，不僅要具備管理專業知識，更要培養數據分析能力，才能在數位時代中做出精準的商業判斷。
        </p>
      </section>

      <section className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <p className="text-foreground font-medium leading-relaxed">
          <span className="text-amber-600 dark:text-amber-400 font-bold">總結：</span>
          成功的企業不僅要有好的產品，更要有清晰的市場定位與靈活的應變策略。在快速變遷的商業環境中，唯有持續學習、擁抱變革的企業，才能在競爭中屹立不搖。
        </p>
      </section>
    </div>
  );
};

export default ReflectionContent;
