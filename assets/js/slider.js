(function(){let images_list=[{"url":"https://html-generator.com/uploads/images/2021/12/21/2145902SI5V431M.jpg","name":"2145902SI5V431M.jpg","link":"https://xopbot-gg.glitch.me/services/api/home"},{"url":"https://attackofthefanboy.com/wp-content/uploads/2021/12/Fortnite-Chapter-3-Season-1.jpg","name":"","link":"https://www.youtube.com/c/fortnite"},{"url":"https://th.bing.com/th/id/R.5404dcae0acf8209290dfc68a8a240da?rik=kCOAiUD7F2PkuQ&pid=ImgRaw&r=0","name":"","link":"https://www.youtube.com/c/pubg"},{"url":"https://staticg.sportskeeda.com/editor/2020/11/f19cc-16049220550451-800.jpg","name":"","link":"https://www.youtube.com/c/1v1LOL/featured"},{"url":"https://imagenessupertrending.canalrcn.com/ImgSuperTrending/codigos-free-fire-23-de-junio.jpg?0z2bIqYODN8YO.SBJfb4YYQma3NOkY1Y","name":"","link":"https://www.youtube.com/channel/UC_vVy4OI86F0amXqFN_zTMg"},{"url":"https://c.nau.ch/i/oq2Gp/1024/roblox.jpg","name":"","link":"https://www.youtube.com/c/roblox"},{"url":"https://th.bing.com/th/id/OIP.F9PJxYL6NcungtOuxlk29wHaEK?pid=ImgDet&rs=1","name":"","link":"https://www.youtube.com/c/minecraft"},{"url":"https://th.bing.com/th/id/OIP.ZpYDUYL5PCN_tcjPPIN-xwHaEK?pid=ImgDet&rs=1","name":"","link":"https://www.youtube.com/c/discord"},{"url":"https://th.bing.com/th/id/OIP.Qtx3CyqqsSIE4LZwOjWt4AHaDv?w=315&h=177&c=7&r=0&o=5&pid=1.7","name":"","link":"https://www.rockstargames.com/GTAOnline/"},{"url":"https://th.bing.com/th/id/R.f6893f9190b8430a48405abdee3eab11?rik=UMMz1RXwu9bSTA&pid=ImgRaw&r=0","name":"","link":"https://www.rockstargames.com/games/sanandreas"}];let slider_id=document.querySelector("#ad-slider");let dots_div="";let images_div="";for(let i=0;i<images_list.length;i++){let href=(images_list[i].link==""?"":' href="'+images_list[i].link+'"');images_div+='<a'+href+' class="hcg-slides animated"'+(i===0?' style="display:block"':'')+'>'+'<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+'</a>';dots_div+='<span class="hcg-slide-dot'+(i===0?' dot-active':'')+'" data-id="'+i+'"></span>';}slider_id.querySelector(".hcg-slider-body").innerHTML=images_div;slider_id.querySelector(".hcg-slide-dot-control").innerHTML=dots_div;let slide_index=0;let images=slider_id.querySelectorAll(".hcg-slides");let dots=slider_id.querySelectorAll(".hcg-slide-dot");function showSlides(){if(slide_index>images.length-1){slide_index=0;}if(slide_index<0){slide_index=images.length-1;}for(let i=0;i<images.length;i++){images[i].style.display="none";dots[i].classList.remove("dot-active");if(i==slide_index){images[i].style.display="block";dots[i].classList.add("dot-active");}}}function dot_click(event){slide_index=event.target.dataset.id;showSlides();}for(let i=0;i<dots.length;i++){dots[i].addEventListener("click",dot_click,false);}setInterval(function(){slide_index++;showSlides();},3500);})();