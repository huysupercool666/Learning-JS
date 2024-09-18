//Link de: https://leetcode.com/problems/valid-palindrome/
//Valid Palindmore
function isPalindrome(s) {
  let convertStringToArray = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  for (let i = 0; i < convertStringToArray.length; i++) {
    if (
      convertStringToArray[i] !==
      convertStringToArray[convertStringToArray.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

//idea 
//chuyen chu hoa ve chu thuong, xoa cac ky tu khong phai chu hoac so
//tra ve true neu no la valid palindrome, false, chuoi string trong la valid palindrome