var e=document.querySelector(".field"),l=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),t=document.querySelector(".remove-column");function o(){var o=e.rows.length,c=e.rows[0].cells.length;l.disabled=10===o,n.disabled=2===o,r.disabled=10===c,t.disabled=2===c}l.addEventListener("click",function(){for(var l=e.insertRow(-1),n=e.rows[0].cells.length,r=0;r<n;r++)l.insertCell(-1);o()}),n.addEventListener("click",function(){e.rows.length>2&&(e.deleteRow(-1),o())}),r.addEventListener("click",function(){for(var l=e.rows,n=l[0].cells.length,r=0;r<l.length;r++)l[r].insertCell(n);o()}),t.addEventListener("click",function(){var l=e.rows,n=l[0].cells.length-1;if(n>=1){for(var r=0;r<l.length;r++)l[r].deleteCell(n);o()}}),o();
//# sourceMappingURL=index.6d891913.js.map
