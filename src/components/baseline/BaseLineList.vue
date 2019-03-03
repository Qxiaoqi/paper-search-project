<template>
  <div class="baseline-results">
    <table class="baseline-table">
      <thead>
        <tr>
          <th v-for="title in baselineTitle">{{ title }}</th>
          <!-- <th>RESEARCH FIELDS</th>
          <th>2008</th>
          <th>2009</th>
          <th>2010</th>
          <th>2011</th>
          <th>2012</th>
          <th>2013</th>
          <th>2014</th>
          <th>2015</th>
          <th>2016</th>
          <th>2017</th>
          <th>2018</th>
          <th>ALL YEARS</th> -->
        </tr>
      </thead>
      <tbody v-for="data in baselineData">
        <tr class="baseline-title">
          <td :colspan="baselineTitle.length">{{ data.name }}</td>
        </tr>
        <tr v-for="itemData in data.data">
          <td>{{ itemData.percentName }}</td>
          <td v-for="item in itemData.data">{{ item.value }}</td>
          <!-- <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td> -->
        </tr>
        <!-- <tr>
          <td>0.10%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr>
        <tr>
          <td>1.00%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr>
        <tr>
          <td>10.00%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr>
        <tr>
          <td>20.00%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr>
        <tr>
          <td>50.00%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="baseline-title">
          <td colspan="13">AGRICULTURAL SCIENCES</td>
        </tr>
        <tr>
          <td>0.01%</td>
          <td>1931</td>
          <td>1958</td>
          <td>1668</td>
          <td>1368</td>
          <td>1253</td>
          <td>916</td>
          <td>737</td>
          <td>503</td>
          <td>299</td>
          <td>109</td>
          <td>23</td>
          <td>1162</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import getBaseline from "../common/getBaseline";

export default {
  name: "BaseLineList",
  created() {
    this.$api.search
      .searchBaselineAll()
      .then(response => {
        console.log(response);
        let data = response.data.data;
        getBaseline.delBaselineFun(data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  computed: {
    baselineTitle() {
      return this.$store.state.baselineRes.baselineTitle;
    },
    baselineData() {
      return this.$store.state.baselineRes.baselineData;
    }
  }
};
</script>


<style lang="less" scoped>
.baseline-results {
  padding: 20px;
}

.baseline-results img {
  width: 100%;
}

.baseline-table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid @border-light;
}

.baseline-table thead {
  border: none;
  background-color: @header-blue;
  color: #fff;
}

.baseline-title {
  background-color: @border-light;
}

.baseline-table tr {
  border: 1px solid @border-light;
}

.baseline-table th,
td {
  padding: 12px 0 12px 12px;
}

    
</style>
