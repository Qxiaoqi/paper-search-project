import store from "@/store/index";

/**
 * 获取ESI期刊的方法抽离
 *
 * 传入两个参数，一个是一级目录名，一个是二级目录名
 * 这里两个api接口的传过去的参数不同，但是获取数据后的操作相同
 * 所以用if判断了二级目录
 * 在全期下是一个接口
 * 在当期，当期新增，当期跌出是一个接口
 * @param {*} data
 */

export const delBaselineFun = data => {
  // 从vuex中拿到选中的学科
  let subjectChecked = store.state.conditions.subjectCondition;
  // console.log(subjectChecked);

  if (subjectChecked.length === 0) {
    subjectChecked = [
      {
        id: 1024,
        value: "ALL FIELDS"
      }
    ];
  }
  // console.log(subjectChecked);
  // 百分位阶段
  let percent = ["0.01%", "0.10%", "1.00%", "10.00%", "20.00%", "50.00%"];
  // 要存到vuex中的最终处理后的数据
  let subArr = [];
  // console.log(data);
  // 给学科按字母顺序排序
  subjectChecked = subjectChecked.map(subject => subject.value);
  subjectChecked.sort();
  // console.log(subjectChecked);
  // 按排好序的学科顺序分成不同组
  for (let i = 0; i < subjectChecked.length; i++) {
    // 一次处理，找出学科相同的
    let arrSub = data.filter(item => item.subject === subjectChecked[i]);
    // 用来存储二次处理百分位的结果
    let resPer = [];
    for (let j = 0; j < percent.length; j++) {
      // 二次处理，找出百分位相同的
      let arrPer = arrSub.filter(item => item.percent === percent[j]);
      resPer.push({
        percentName: percent[j],
        data: arrPer
      });
      // console.log(resPer);
    }
    subArr.push({
      name: subjectChecked[i],
      data: resPer
    });
    // console.log(arr);
  }
  console.log(subArr);
  // 处理基准线表头
  let titleArr = ["RESEARCH FIELDS"];

  subArr[0].data[0].data.forEach(item => {
    titleArr.push(item.year);
  });
  console.log(titleArr);
  // 处理后结果存到vuex
  store.dispatch("getBaselineData", subArr);
  store.dispatch("getBaselineTitle", titleArr);
};

export default {
  delBaselineFun
};
