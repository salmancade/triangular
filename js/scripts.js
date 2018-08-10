var A=parseInt(prompt("enter the value of AB"));
var B=parseInt(prompt("enter the value of BC"));
var C=parseInt(prompt("enter the value of CA"));

  if (A===B && B===C && C===A) {
    alert("you have Equilateral triangle");
  }else if (A===B || B===C || C===A) {
    alert("you have isosceles triangle");
  }else if (A>=B || B>=C || C<=B){
    alert("you have scalene triangle");
  }else {
    alert("no triangle formed");
  }
