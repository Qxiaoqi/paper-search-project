<template>
  <div class="pl-20 search-results">
    <div class="search-item" v-for="(article, index) in articles" :key="index">
      <div class="d-ib search-checkbox">
        <input type="checkbox" :id="article.paperId" :value="article.paperId" v-model="checkedId">
        <label :for="article.paperId" class="checkbox-custom"></label>
      </div>
      <div class="d-ib search-number">{{ article.elemNum }}.</div>
      <div class="d-ib search-main">
        <h4 class="search-title">{{ article.articleName }}</h4>
        <div class="search-content">
          <div class="content-subtitle">
            <span class="content-subtitle">Authors：{{ article.authors }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Source：{{ article.source }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Times Cited：{{ article.timesCited }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Countries：{{ article.countries }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Addresses：{{ article.addresses }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Institutions：{{ article.institutions }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Publication Date：{{ article.publicationDate }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Accession Number：{{ article.accessionNumber }}</span>
          </div>
          <div class="content-subtitle">
            Research Field：<span class="category-tag">{{ article.researchField }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">DOI：{{ article.doi }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">PMID：{{ article.pmid }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperList",
  data() {
    return {
      // checkedId: "",
      // articles: [
      //   {
      //     paperId: 1000001,
      //     elemNum: 1,
      //     accessionNumber: "WOS:000248036800021",
      //     doi: "0",
      //     pmid: "NA",
      //     articleName: "MODEL EVALUATION GUIDELINES FOR SYSTEMATIC QUANTIFICATION OF ACCURACY IN WATERSHED SIMULATIONS",
      //     authors: "MORIASI, DN;ARNOLD, JG;VAN LIEW, MW;BINGNER, RL;HARMEL, RD;VEITH, TL",
      //     source: "TRANS ASABE 50 (3): 885-900 MAY-JUN 2007",
      //     researchField: "AGRICULTURAL SCIENCES",
      //     timesCited: "2127",
      //     countries: "USA;",
      //     addresses: "USDA ARS, GRAZINGLANDS RES LAB, EL RENO, OK 73036 USA;USDA ARS, GRASSLAND SOIL & WATER RES LAB, TEMPLE, TX 76502 USA;WATER QUAL PLANNING BUR, MONTANA DEPT ENVIRONM QUAL, HELENA, MT",
      //     institutions: "USDA (US DEPT AGR);WATER QUAL PLANNING BUR;",
      //     publicationDate: "2007",
      //   },
      //   {
      //     paperId: 1000002,
      //     elemNum: 2,
      //     accessionNumber: "WOS:000260277200035",
      //     doi: "10.3168/jds.2007-0980",
      //     pmid: "MEDLINE:18946147",
      //     articleName: "EFFICIENT METHODS TO COMPUTE GENOMIC PREDICTIONS",
      //     authors: "VANRADEN, PM",
      //     source: "J DAIRY SCI 91 (11): 4414-4423 NOV 2008",
      //     researchField: "AGRICULTURAL SCIENCES",
      //     timesCited: "1003",
      //     countries: "USA;",
      //     addresses: "USDA ARS, ANIM IMPROVEMENT PROGRAMS LAB, BELTSVILLE, MD 20705 USA",
      //     institutions: "USDA (US DEPT AGR);",
      //     publicationDate: "2008",
      //   },
      //   {
      //     paperId: 1000003,
      //     elemNum: 3,
      //     accessionNumber: "WOS:000249466000012",
      //     doi: "0",
      //     pmid: "NA",
      //     articleName: "THE SOIL AND WATER ASSESSMENT TOOL: HISTORICAL DEVELOPMENT, APPLICATIONS, AND FUTURE RESEARCH DIRECTIONS",
      //     authors: "GASSMAN, PW;REYES, MR;GREEN, CH;ARNOLD, JG",
      //     source: "TRANS ASABE 50 (4): 1211-1250 JUL-AUG 2007",
      //     researchField: "AGRICULTURAL SCIENCES",
      //     timesCited: "888",
      //     countries: "USA;",
      //     addresses: "IOWA STATE UNIV, DEPT ECON, CTR AGR & RURAL DEV, AMES, IA 50011 USA;N CAROLINA AGR & TECH STATE UNIV, BIOL ENGN PROGRAM, DEPT NAT RESOURCES & ENVIRONM DESIGN, SCH AGR & ENVIRONM SCI, GREENSBORO, NC USA;USDA ARS, GRASSLAND SOIL & WATER RES LAB, TEMPLE, TX 76502 USA",
      //     institutions: "USDA (US DEPT AGR);",
      //     publicationDate: "2007",
      //   },
      //   {
      //     paperId: 1000004,
      //     elemNum: 4,
      //     accessionNumber: "WOS:000294942300009",
      //     doi: "10.1016/j.soilbio.2011.04.022",
      //     pmid: "NA",
      //     articleName: "BIOCHAR EFFECTS ON SOIL BIOTA - A REVIEW",
      //     authors: "LEHMANN, J;RILLIG, MC;THIES, J;MASIELLO, CA;HOCKADAY, WC;CROWLEY, D",
      //     source: "SOIL BIOL BIOCHEM 43 (9): 1812-1836 SEP 2011",
      //     researchField: "AGRICULTURAL SCIENCES",
      //     timesCited: "824",
      //     countries: "GERMANY (FED REP GER);USA;",
      //     addresses: "CORNELL UNIV, DEPT CROP & SOIL SCI, ITHACA, NY 14853 USA;FREE UNIV BERLIN, INST BIOL, D-14195 BERLIN, GERMANY;RICE UNIV, DEPT EARTH SCI, HOUSTON, TX 77005 USA;BAYLOR UNIV, DEPT GEOL, WACO, TX 76798 USA;UNIV CALIF RIVERSIDE, DEPT ENVIRONM SCI, RIVERSIDE, CA 92521 USA",
      //     institutions: "USDA (US DEPT AGR);",
      //     publicationDate: "2011",
      //   },
      //   {
      //     paperId: 1000005,
      //     elemNum: 5,
      //     accessionNumber: "WOS:000298887800001",
      //     doi: "0",
      //     pmid: "NA",
      //     articleName: "SISVAR: A COMPUTER STATISTICAL ANALYSIS SYSTEM",
      //     authors: "FERREIRA, DF",
      //     source: "CIENC AGROTEC 35 (6): 1039-1042 NOV-DEC 2011",
      //     researchField: "AGRICULTURAL SCIENCES",
      //     timesCited: "783",
      //     countries: "BRAZIL;",
      //     addresses: "UNIV FED LAVRAS UFLA, DEPT CIENCIAS EXATAS DEX, LAVRAS, MG, BRAZIL",
      //     institutions: "USDA (US DEPT AGR);",
      //     publicationDate: "2011",
      //   }

      // ]
    }
  },
  computed: {
    articles() {
      return this.$store.state.periodical.articleList;
    },
    // 获取当前展示所有文章id数组
    getCheckedArr() {
      return this.$store.state.checkedArticle.checkedArr;
    },
    // 获取checkbox当前绑定的数组
    checkedId: {
      get() {
        return this.$store.state.checkedArticle.checkedId;
      },
      set(val) {
        this.$store.dispatch("getCheckedId", val);
      }
    }
  },
  watch: {
    // 监听文章列表的全选是否发生变化
    checkedId() {
      if (this.checkedId.length == this.getCheckedArr.length) {
        this.$store.dispatch("getChecked", true);
      } else {
        this.$store.dispatch("getChecked", false);
      }
    }
  }

}
</script>


<style lang="less" scoped>
@import "../common/Article.less";
</style>

