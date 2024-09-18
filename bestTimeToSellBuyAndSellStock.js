//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
//Best Time To Buy And Sell Stock
function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice; 
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//idea
// cho 2 mang duyet qua neu mang sau - mang truoc ra result <= 0
// output = 0

// so sau tru so truoc = max result thi chon lam max profit
