(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function y(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(r){if(r.ep)return;r.ep=!0;const o=y(r);fetch(r.href,o)}})();const u=[{word:"apple",helpers:["red","fruit","round","five letters","🍎"]},{word:"banana",helpers:["yellow","fruit","long","six letters","🍌"]},{word:"orange",helpers:["orange","fruit","round","six letters","🍊"]},{word:"grape",helpers:["purple","fruit","rounds","five letters","🍇"]},{word:"mango",helpers:["yellow","fruit","juice","five letters","🥭"]},{word:"pear",helpers:["green","fruit","juice","four letters","🍐"]},{word:"pineapple",helpers:["yellow","fruit","juice","ten letters","🍍"]},{word:"strawberry",helpers:["red","fruit","juice","ten letters","🍓"]},{word:"watermelon",helpers:["green","fruit","juice","ten letters","🍉"]},{word:"peach",helpers:["orange","fruit","juice","five letters","🍑"]},{word:"onion",helpers:["white","vegetable","round","five letters","🧅"]},{word:"carrot",helpers:["orange","vegetable","long","six letters","🥕"]},{word:"lettuce",helpers:["green","vegetable","leaf","seven letters","🥬"]},{word:"broccoli",helpers:["green","vegetable","tree","eight letters","🥦"]},{word:"tomato",helpers:["red","vegetable","round","six letters","🍅"]},{word:"cucumber",helpers:["green","vegetable","long","eight letters","🥒"]},{word:"pepper",helpers:["green","vegetable","round","six letters","🫑"]}],l=document.getElementById("word-input"),t=document.querySelector(".attempts");let e=5;a();document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`;function b(){return l.value.trim().toLowerCase()}let v="";u.forEach(s=>{v+=s.helpers[4]+" "});document.getElementById("emoji").innerHTML=v;function a(){switch(e){case 5:n(),t.classList.add("level1");break;case 4:n(),t.classList.add("level2");break;case 3:n(),t.classList.add("level3");break;case 2:n(),t.classList.add("level4");break;case 1:n(),t.classList.add("level5");break}}function n(){t.classList.remove("level1"),t.classList.remove("level2"),t.classList.remove("level3"),t.classList.remove("level4"),t.classList.remove("level5")}const i=u[Math.floor(Math.random()*u.length)],E=document.querySelector(".tips_list"),L=i.helpers;function w(){for(let s=0;s<L.length-1;s++){const c=document.createElement("li");c.textContent=L[s],E.appendChild(c)}}w();var f=document.querySelector(".btn_easy"),m=document.querySelector(".btn_middle"),p=document.querySelector(".btn_hard");f.addEventListener("click",function(){g(),f.classList.add("active"),e=5,a(),document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`,console.log(e)});m.addEventListener("click",function(){g(),m.classList.add("active"),e=3,a(),document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`,console.log(e)});p.addEventListener("click",function(){g(),e=1,p.classList.add("active"),a(),document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`,console.log(e)});function g(){f.classList.remove("active"),m.classList.remove("active"),p.classList.remove("active")}const M=document.getElementById("submit");M.addEventListener("click",q);function q(){if(e>0){const s=b();S(s)==!0&&(s===i.word?(n(),t.innerHTML=`🥰 Congratulations 🥰 you guessed the word : ${i.word} ${i.helpers[4]}`,t.classList.add("success")):(e--,e===0?(n(),t.innerHTML=`😭 You lose 😭 the word is : ${i.word} ${i.helpers[4]}`,t.classList.add("fail")):(document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`,a())))}}l.addEventListener("keyup",()=>{l.classList.remove("focus-error"),l.attributes.placeholder.value="Enter your guess"});function S(s){return s===""?(l.focus(),l.classList.add("focus-error"),l.attributes.placeholder.value="Please enter your guess",!1):!0}l.addEventListener("keypress",function(s){s.key==="Enter"&&(s.preventDefault(),document.getElementById("submit").click())});const H=document.getElementById("reset");H.addEventListener("click",T);function T(){e=5,document.querySelector(".attempts").innerHTML=`You have ${e} left to guess word`,a(),l.value="",document.getElementById("emoji").innerHTML=v,l.focus(),t.classList.remove("fail"),t.classList.remove("success"),i=u[Math.floor(Math.random()*u.length)],w()}
