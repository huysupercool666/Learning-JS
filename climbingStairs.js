//Link de: https://leetcode.com/problems/climbing-stairs/description/
//Climbing Stairs
function climbStairs(n) {
    if (n === 1) return 1; 
    if (n === 2) return 2; 
    let first = 1;
    let second = 2; 
    let third = 0;      

    for (let i = 3; i <= n; i++) {
        third = first + second; 
        first = second;         
        second = third;
    }

    return third;
};

console.log(climbStairs(3));