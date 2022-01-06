!function(){var t={998:function(t){function i(t,i){this.direction=t,this.color=i}i.prototype.display=function(t){t.font="30px Arial",t.fillStyle=this.color,t.textAlign="center",t.fillText(this.direction,300,75)},i.prototype.discard=function(t){t.clearRect(0,0,600,600)},t.exports=i},851:function(t,e,s){var a=s(998),r={DIRECTIONS:["North","South","East","West"],NUM_DIRS:5,DIM_X:600,DIM_Y:600,COLOR:["red","blue"]};function n(){this.directions=[],this.addDirections(),this.score=0,this.played=!1}n.prototype.addDirections=function(){for(i=0;i<r.NUM_DIRS;i++){var t=new a(this.randomdirectiongenerator(),this.randomtypegenerator());this.directions.push(t)}},n.prototype.randomdirectiongenerator=function(){var t=Math.floor(4*Math.random());return r.DIRECTIONS[t]},n.prototype.randomtypegenerator=function(){var t=Math.floor(2*Math.random());return r.COLOR[t]},n.prototype.end=function(){},t.exports=n},348:function(t,e,s){function a(t,i,e,s,a){this.game=e,this.drawing=t,this.canvas=i,this.flag=s,this.angle=0,this.score=a,this.flagcounter=0}function r(t){var i;"38"==t.keyCode?(o.call(this),"North"===(i=this.game.directions[0]).direction&&"red"===i.color||"South"===i.direction&&"blue"===i.color?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"39"==t.keyCode?(h.call(this),function(t){return"East"===t.direction&&"red"===t.color||("West"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"40"==t.keyCode?(g.call(this),function(t){return"South"===t.direction&&"red"===t.color||("North"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"37"==t.keyCode&&(d.call(this),function(t){return"West"===t.direction&&"red"===t.color||("East"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay()))}s(851),a.prototype.appear=function(){this.game.directions[0].display(this.drawing)},a.prototype.disappear=function(){this.game.directions[0].discard(this.drawing),this.game.directions.shift()},a.prototype.dir=function(){for(i=0;i<this.game.directions.length;i++)setTimeout(this.appear.bind(this),4e3+4e3*i),setTimeout(this.disappear.bind(this),7e3+4e3*i),this.flagcounter+=1},a.prototype.keydown=function(){window.addEventListener("keydown",r.bind(this),!1)};var n=0;function o(){if(n>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(n=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),console.log(this.angle),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,n+=1,stop=requestAnimationFrame(o.bind(this))}var l=0;function h(){if(l>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(l=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,l+=1,stop=requestAnimationFrame(h.bind(this))}var c=0;function g(){if(c>27)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),c=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,c+=1,stop=requestAnimationFrame(g.bind(this))}var f=0;function d(){if(f>16)return cancelAnimationFrame(16),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),f=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,f+=1,stop=requestAnimationFrame(d.bind(this))}function u(){this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')",this.keydown(),this.dir(),setTimeout(this.end.bind(this),4e3*this.game.directions.length+5e3)}a.prototype.instructions=function(){this.drawing.font="30px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Instructions:",300,120),this.drawing.fillText("Ahoy pirates, We need to get Oak Island",300,150),this.drawing.fillText("today to recover Marie Antoinette's Jewels.",300,180),this.drawing.fillStyle="red",this.drawing.fillText("When directions appear to you in",300,220),this.drawing.fillText("red text press the corresponding ",300,255),this.drawing.fillText("keyboard buttons as many times as you can.",300,285),this.drawing.fillStyle="blue",this.drawing.fillText("However, other pirate ships will try to confuse",300,345),this.drawing.fillText("you by showing you the wrong direction",300,375),this.drawing.fillText("ARRGH. Travel in the opposite direction",300,405),this.drawing.fillText("as fast as you can.",300,435),this.drawing.fillStyle="black",this.drawing.fillText("Click on the screen to start.",300,555),this.drawing.fillText("Good luck Matey!",300,585)},a.prototype.scoredisplay=function(){this.score.clearRect(0,0,150,50),this.score.font="25px Arial",this.score.fillStyle="black",this.score.textAlign="center",this.score.fillText("Score: ".concat(this.game.score),75,30)},a.prototype.click=function(){this.canvas.addEventListener("click",u.bind(this))},a.prototype.end=function(){this.game.score>50?(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Great Job Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100)):(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="white",this.drawing.textAlign="center",this.drawing.fillText("Yikes Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100))},t.exports=a},642:function(t,e,s){var a=s(998),r={DIRECTIONS:["North","South","East","West"],NUM_DIRS:5,DIM_X:600,DIM_Y:600,COLOR:["red","blue"]};function n(){this.directions=[],this.addDirections(),this.score=0,this.played=!1}n.prototype.addDirections=function(){for(i=0;i<r.NUM_DIRS;i++){var t=new a(this.randomdirectiongenerator(),this.randomtypegenerator());this.directions.push(t)}},n.prototype.randomdirectiongenerator=function(){var t=Math.floor(4*Math.random());return r.DIRECTIONS[t]},n.prototype.randomtypegenerator=function(){var t=Math.floor(2*Math.random());return r.COLOR[t]},n.prototype.end=function(){},t.exports=n},43:function(t,e,s){function a(t,i,e,s,a){this.game=e,this.drawing=t,this.canvas=i,this.flag=s,this.angle=0,this.score=a,this.flagcounter=0}function r(t){var i;"38"==t.keyCode?(o.call(this),"North"===(i=this.game.directions[0]).direction&&"red"===i.color||"South"===i.direction&&"blue"===i.color?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"39"==t.keyCode?(h.call(this),function(t){return"East"===t.direction&&"red"===t.color||("West"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"40"==t.keyCode?(g.call(this),function(t){return"South"===t.direction&&"red"===t.color||("North"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"37"==t.keyCode&&(d.call(this),function(t){return"West"===t.direction&&"red"===t.color||("East"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay()))}s(642),a.prototype.appear=function(){this.game.directions[0].display(this.drawing)},a.prototype.disappear=function(){this.game.directions[0].discard(this.drawing),this.game.directions.shift()},a.prototype.dir=function(){for(i=0;i<this.game.directions.length;i++)setTimeout(this.appear.bind(this),3e3+3e3*i+1e3),setTimeout(this.disappear.bind(this),6e3+3e3*i),this.flagcounter+=1},a.prototype.keydown=function(){window.addEventListener("keydown",r.bind(this),!1)};var n=0;function o(){if(n>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(n=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),console.log(this.angle),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,n+=1,stop=requestAnimationFrame(o.bind(this))}var l=0;function h(){if(l>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(l=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,l+=1,stop=requestAnimationFrame(h.bind(this))}var c=0;function g(){if(c>27)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),c=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,c+=1,stop=requestAnimationFrame(g.bind(this))}var f=0;function d(){if(f>16)return cancelAnimationFrame(16),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),f=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,f+=1,stop=requestAnimationFrame(d.bind(this))}function u(){this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')",this.keydown(),this.dir(),setTimeout(this.end.bind(this),3e3*this.game.directions.length+4e3)}a.prototype.instructions=function(){this.drawing.font="30px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Instructions:",300,120),this.drawing.fillText("Ahoy pirates, We need to get Oak Island",300,150),this.drawing.fillText("today to recover Marie Antoinette's Jewels.",300,180),this.drawing.fillStyle="red",this.drawing.fillText("When directions appear to you in",300,220),this.drawing.fillText("red text press the corresponding ",300,255),this.drawing.fillText("keyboard buttons as many times as you can.",300,285),this.drawing.fillStyle="blue",this.drawing.fillText("However, other pirate ships will try to confuse",300,345),this.drawing.fillText("you by showing you the wrong direction",300,375),this.drawing.fillText("ARRGH. Travel in the opposite direction",300,405),this.drawing.fillText("as fast as you can.",300,435),this.drawing.fillStyle="black",this.drawing.fillText("Click on the screen to start.",300,555),this.drawing.fillText("Good luck Matey!",300,585)},a.prototype.scoredisplay=function(){this.score.clearRect(0,0,150,50),this.score.font="25px Arial",this.score.fillStyle="black",this.score.textAlign="center",this.score.fillText("Score: ".concat(this.game.score),75,30)},a.prototype.click=function(){this.canvas.addEventListener("click",u.bind(this))},a.prototype.end=function(){this.game.score>3?(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Great Job Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100)):(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="white",this.drawing.textAlign="center",this.drawing.fillText("Yikes Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100))},t.exports=a},508:function(t,e,s){var a=s(998),r={DIRECTIONS:["North","South","East","West"],NUM_DIRS:15,DIM_X:600,DIM_Y:600,COLOR:["red","blue"]};function n(){this.directions=[],this.addDirections(),this.score=0,this.played=!1}n.prototype.addDirections=function(){for(i=0;i<r.NUM_DIRS;i++){var t=new a(this.randomdirectiongenerator(),this.randomtypegenerator());this.directions.push(t)}},n.prototype.randomdirectiongenerator=function(){var t=Math.floor(4*Math.random());return r.DIRECTIONS[t]},n.prototype.randomtypegenerator=function(){var t=Math.floor(2*Math.random());return r.COLOR[t]},n.prototype.end=function(){},t.exports=n},362:function(t,e,s){function a(t,i,e,s,a){this.game=e,this.drawing=t,this.canvas=i,this.flag=s,this.angle=0,this.score=a,this.flagcounter=0}function r(t){var i;"38"==t.keyCode?(o.call(this),"North"===(i=this.game.directions[0]).direction&&"red"===i.color||"South"===i.direction&&"blue"===i.color?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"39"==t.keyCode?(h.call(this),function(t){return"East"===t.direction&&"red"===t.color||("West"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"40"==t.keyCode?(g.call(this),function(t){return"South"===t.direction&&"red"===t.color||("North"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"37"==t.keyCode&&(d.call(this),function(t){return"West"===t.direction&&"red"===t.color||("East"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay()))}s(851),a.prototype.appear=function(){this.game.directions[0].display(this.drawing)},a.prototype.disappear=function(){this.game.directions[0].discard(this.drawing),this.game.directions.shift()},a.prototype.dir=function(){for(i=0;i<this.game.directions.length;i++)setTimeout(this.appear.bind(this),4e3+2e3*i),setTimeout(this.disappear.bind(this),5e3+2e3*i),this.flagcounter+=1},a.prototype.keydown=function(){window.addEventListener("keydown",r.bind(this),!1)};var n=0;function o(){if(n>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(n=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),console.log(this.angle),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,n+=1,stop=requestAnimationFrame(o.bind(this))}var l=0;function h(){if(l>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(l=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,l+=1,stop=requestAnimationFrame(h.bind(this))}var c=0;function g(){if(c>27)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),c=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,c+=1,stop=requestAnimationFrame(g.bind(this))}var f=0;function d(){if(f>16)return cancelAnimationFrame(16),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),f=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,f+=1,stop=requestAnimationFrame(d.bind(this))}function u(){this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')",this.keydown(),this.dir(),setTimeout(this.end.bind(this),2e3*this.game.directions.length+5e3)}a.prototype.instructions=function(){this.drawing.font="30px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Instructions:",300,120),this.drawing.fillText("Ahoy pirates, We need to get Oak Island",300,150),this.drawing.fillText("today to recover Marie Antoinette's Jewels.",300,180),this.drawing.fillStyle="red",this.drawing.fillText("When directions appear to you in",300,220),this.drawing.fillText("red text press the corresponding ",300,255),this.drawing.fillText("keyboard buttons as many times as you can.",300,285),this.drawing.fillStyle="blue",this.drawing.fillText("However, other pirate ships will try to confuse",300,345),this.drawing.fillText("you by showing you the wrong direction",300,375),this.drawing.fillText("ARRGH. Travel in the opposite direction",300,405),this.drawing.fillText("as fast as you can.",300,435),this.drawing.fillStyle="black",this.drawing.fillText("Click on the screen to start.",300,555),this.drawing.fillText("Good luck Matey!",300,585)},a.prototype.scoredisplay=function(){this.score.clearRect(0,0,150,50),this.score.font="25px Arial",this.score.fillStyle="black",this.score.textAlign="center",this.score.fillText("Score: ".concat(this.game.score),75,30)},a.prototype.click=function(){this.canvas.addEventListener("click",u.bind(this))},a.prototype.end=function(){this.game.score>20?(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Great Job Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100)):(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="white",this.drawing.textAlign="center",this.drawing.fillText("Yikes Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100))},t.exports=a},408:function(t,e,s){var a=s(998),r={DIRECTIONS:["North","South","East","West"],NUM_DIRS:10,DIM_X:600,DIM_Y:600,COLOR:["red","blue"]};function n(){this.directions=[],this.addDirections(),this.score=0,this.played=!1}n.prototype.addDirections=function(){for(i=0;i<r.NUM_DIRS;i++){var t=new a(this.randomdirectiongenerator(),this.randomtypegenerator());this.directions.push(t)}},n.prototype.randomdirectiongenerator=function(){var t=Math.floor(4*Math.random());return r.DIRECTIONS[t]},n.prototype.randomtypegenerator=function(){var t=Math.floor(2*Math.random());return r.COLOR[t]},n.prototype.end=function(){},t.exports=n},965:function(t,e,s){function a(t,i,e,s,a){this.game=e,this.drawing=t,this.canvas=i,this.flag=s,this.angle=0,this.score=a,this.flagcounter=0}function r(t){var i;"38"==t.keyCode?(o.call(this),"North"===(i=this.game.directions[0]).direction&&"red"===i.color||"South"===i.direction&&"blue"===i.color?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"39"==t.keyCode?(h.call(this),function(t){return"East"===t.direction&&"red"===t.color||("West"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"40"==t.keyCode?(g.call(this),function(t){return"South"===t.direction&&"red"===t.color||("North"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay())):"37"==t.keyCode&&(d.call(this),function(t){return"West"===t.direction&&"red"===t.color||("East"===t.direction&&"blue"===t.color||void 0)}(this.game.directions[0])?(this.game.score+=1,this.scoredisplay()):(this.game.score-=1,this.scoredisplay()))}s(408),a.prototype.appear=function(){this.game.directions[0].display(this.drawing)},a.prototype.disappear=function(){this.game.directions[0].discard(this.drawing),this.game.directions.shift()},a.prototype.dir=function(){for(i=0;i<this.game.directions.length;i++)setTimeout(this.appear.bind(this),3e3+3e3*i+1e3),setTimeout(this.disappear.bind(this),6e3+3e3*i),this.flagcounter+=1},a.prototype.keydown=function(){window.addEventListener("keydown",r.bind(this),!1)};var n=0;function o(){if(n>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(n=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),console.log(this.angle),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,n+=1,stop=requestAnimationFrame(o.bind(this))}var l=0;function h(){if(l>9)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle=0,void(l=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,l+=1,stop=requestAnimationFrame(h.bind(this))}var c=0;function g(){if(c>27)return cancelAnimationFrame(9),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),c=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,c+=1,stop=requestAnimationFrame(g.bind(this))}var f=0;function d(){if(f>16)return cancelAnimationFrame(16),this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(Math.PI/180*0),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),f=0,void(this.angle=0);this.flag.clearRect(-50,-50,100,100),this.flag.setTransform(1,0,0,1,0,0),this.flag.translate(50,50),this.flag.rotate(-this.angle*(Math.PI/180)),this.flag.beginPath(),this.flag.moveTo(0,0),this.flag.lineTo(50,-50),this.flag.lineWidth=6,this.flag.strokeStyle="red",this.flag.stroke(),this.angle+=5,f+=1,stop=requestAnimationFrame(d.bind(this))}function u(){this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/53-JL9ShR7ceYc9cT956glP2qzyk0sQQa6MOK_k0Jf-_EuoQBOesZdpdFwL7x1igX0aqxundcT32B1m2HTRtRKqKUvUBQsT8JhmXyH_3hHgPbsYWpBORS1JY55lEKbG7SKg8VJKqQLSYS6Hz1ERPejl4ZcJncalAEoABaJx43EpZPPeSmcW_h-qEjZER9KFfPxzTdQZ2DYXv0Q2fIa_b7FNXiMIXiFNA2mNlOvlttf6k4BSPirm69YAO2JvsnnbuRtEHcTqvM27QPRMP_Y5MXijPDGe6cLlaBSLm6Ny6WwmhD2mzQuxpO_N9PZRHmypZ5l5K5-RIurnk3zz54QMDuvU0Amo5ouEr6IIwxFEtSQ13Npd65Nv2JRjgWQ0rqvICQDbgI6m5wR4eNr6qFIH4uG_Lgj39YdUnom3lIqXM7eqO-IXZWMGU9sjB5tVVSwXfyGwZQNvZlSikOtGlzzgIa_6G2UMeKB5ICCX7uKRGnLWUWaqC3e_-TLhdAfcnER-pfcG6Q0sKd7CivQ7nQpunz5R2U4YbgLj25pF5ysRHcrjw71qZcHphAyW6xl_OcLPfMWaC3ZdS4FEBYU2tVq6_d9o-6OQSkb47JciqwfHF1tjHAyD4KTK5S5xesHa3c8hJeY8Ua4ujpdGkt3HiIqmu-VykxuAZDjJd6jRX0tLQ_ChrBNlQhQiFdBEcQj62L7MekP8_t2nehvk46u5rj6ZMJ18=s328-no?authuser=0')",this.keydown(),this.dir(),setTimeout(this.end.bind(this),3e3*this.game.directions.length+4e3)}a.prototype.instructions=function(){this.drawing.font="30px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Instructions:",300,120),this.drawing.fillText("Ahoy pirates, We need to get Oak Island",300,150),this.drawing.fillText("today to recover Marie Antoinette's Jewels.",300,180),this.drawing.fillStyle="red",this.drawing.fillText("When directions appear to you in",300,220),this.drawing.fillText("red text press the corresponding ",300,255),this.drawing.fillText("keyboard buttons as many times as you can.",300,285),this.drawing.fillStyle="blue",this.drawing.fillText("However, other pirate ships will try to confuse",300,345),this.drawing.fillText("you by showing you the wrong direction",300,375),this.drawing.fillText("ARRGH. Travel in the opposite direction",300,405),this.drawing.fillText("as fast as you can.",300,435),this.drawing.fillStyle="black",this.drawing.fillText("Click on the screen to start.",300,555),this.drawing.fillText("Good luck Matey!",300,585)},a.prototype.scoredisplay=function(){this.score.clearRect(0,0,150,50),this.score.font="25px Arial",this.score.fillStyle="black",this.score.textAlign="center",this.score.fillText("Score: ".concat(this.game.score),75,30)},a.prototype.click=function(){this.canvas.addEventListener("click",u.bind(this))},a.prototype.end=function(){this.game.score>55?(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Ru5f8Q7Sku8IoRoSUtaf8znc1MAo4iOaP6rW1FM3TxdYzClcUC9GHwOOYYChSlWSrUCZ1wOF0bn1l4jG_Qi7d0Yhj4N8tnU4n1Ltu4Qed92gDXGncrVmakU4LIeRmn2HANMxgNSr36UQLOUqkw3Ahf3wS39sX4gRre2ZqPiBgNaSDoY8lkdiJMY4599C3A1VUd_Q3u_u_mzZlH50t6FB9BHTGqO4bCvBlBhsJaukgwGdhV0mEv1RR2UxhSnVxZjYZ80VEqUJswd5T1LDVNRkY2QbGiip7xveFVMbax8jDcLqgWfDOXuQZtfaltXkE6JnfR_ebMhLnBa9v_ZxiHl4QPE5Ef3MLpgv1o0m9G8HEIYMuyh4OyZ7SWR_f9lfMqzZqELmXsrk58cZa0GJdbX_Vyeh1xtS6zIly2MfOFC6KhnHIxk1HMZVkcL-p5rtLMZ5eIb2v2dTzNq_eFXig1ETD331f0oLl6bTgxjiBTlDrnrRZwPhJ6T5JPsUP91LW20cBGmmXQVIHwoQlEE17NhfgRTrOvF38dXzlkOHyI3cb7VhQNd-fFCUHq7ZYIfkNfAziiOwBVPLB9zbunliRH9royQaYDrC_cYJoJS_eH1RcztqZJuoDZdi86ufDzf_3dbl6Iaw7jNHcd7BpIlaIHEwaa_nR2myS41rJ6ZUDHAdzq2_dMWRZEbjagX3zY91ZUTMGx5rwoT0tXKbCFH1n6wC0GM=w900-h675-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="black",this.drawing.textAlign="center",this.drawing.fillText("Great Job Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100)):(this.drawing.clearRect(0,0,600,600),this.canvas.style.backgroundImage="url('https://lh3.googleusercontent.com/Bhr84A3Yp_4FdfDZoHKs5W6NSHIb2S5J5eGzqb_5RqdVISDMJjP_ZWXIMylKSkp_qfPy0OoLNoeQwRr5xTnZWQRexl1zrXpHYTLaa7u5gjEn1Ymdzkdo-Jmd4UEnGYUEPYA5zIdVssFJ3gyF2CGJIfh9nd2zwgxwr6UuKN6OP3SMPv9Oq78pNndHsK0KBWmyB6CzERYGKW8OOYyOJrUjRh85T4rHJK08sWkDogLGP0en-KBG7qY3ruCkAwK9LjhY_Lz6n5kkslMDN25NOzy90vj0JruqDbeQ9zSROEBUtC6X22a6l0V7qm6yZxYeRhhgJPw8t6PTe3KfO0ShRRDjQZ2ap1iBk_cBHglWclfAGSP3pkqmfI-ZkZMxJIv7D6LR8ZhPu4vkmDKwuN3h0_zMWTt3EEuoJubWA7IfM2flvqEMjWBNfJKKjfCD68AoeCKU4b-xsKRRKPu3mDL6hIhIbArlifuZieUE3jHwionKJiJWupHyP42rcDv6DoITaTcn6p25ImB_WpGIm2oa3nc8z-i3sTOqnObFV6Eo7ocfKH06Fk0pgAU_a5Duqoxxtamfjakso9t7wr_EVSIOYmXgtt7G2Thzpmd1a4KJPguyhw4OzB_vhCqL38uXfXqCFePqVj1Ah5H2hFdhnY-3k8D-hB0_Tc3K0yvr8lffIy0U2rjlOGnPwINaBx4BoqZYLeb4K4SkmxsM5mAQGdN-WgAQrnQ=w510-h339-no?authuser=0')",this.drawing.font="25px Arial",this.drawing.fillStyle="white",this.drawing.textAlign="center",this.drawing.fillText("Yikes Matey! Score: ".concat(this.game.score),300,100),this.flag.clearRect(-50,-50,100,100))},t.exports=a}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}!function(){"use strict";s(998),s(642),s(43);var t=s(851),i=s(348),e=s(408),a=s(965),r=s(508),n=s(362);document.addEventListener("DOMContentLoaded",(function(s){var o=document.getElementById("game-canvas");console.log(o);var l=o.getContext("2d"),h=document.getElementById("flag").getContext("2d"),c=document.getElementById("score").getContext("2d"),g=document.getElementById("easy"),f=document.getElementById("medium"),d=document.getElementById("hard");g.addEventListener("click",(function(){var e=new t,s=new i(l,o,e,h,c);s.instructions(),s.click()})),f.addEventListener("click",(function(){var t=new e,i=new a(l,o,t,h,c);i.instructions(),i.click()})),d.addEventListener("click",(function(){var t=new r,i=new n(l,o,t,h,c);i.instructions(),i.click()}))}))}()}();
//# sourceMappingURL=main.js.map