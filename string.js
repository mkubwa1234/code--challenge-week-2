function swapCase(str) {
    return str.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }
  
  console.log(swapCase("The Quick Brown Fox")); // Output: tHE qUICK bROWN fOX