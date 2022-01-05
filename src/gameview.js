const Game = require("./game.js");


function GameView(ctx, canvas, game, flagctx) {
    this.game = game
    this.drawing = ctx 
    this.canvas = canvas
    this.flag = flagctx 
    this.angle = 0
}

GameView.prototype.appear = function() {
    this.scoredisplay()
    let dir = this.game.directions[0]
    dir.display(this.drawing)
}

GameView.prototype.disappear = function() {
    let dir = this.game.directions[0]
    dir.discard(this.drawing)
    this.game.directions.shift()
}

GameView.prototype.dir = function() {
    for (i = 0; i < this.game.directions.length; i++) {
        setTimeout(this.appear.bind(this), 3000+(3000*i))
        setTimeout(this.disappear.bind(this), 6000+(3000*i))
    }
}

GameView.prototype.keydown = function() {
    window.addEventListener("keydown", check.bind(this), false);
}
// GameView.prototype.keyup = function() {
//     window.addEventListener("keyup", base.bind(this), false);
// }
    
// function check(key) {
//     if (key.keyCode == "38") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/uzgN8D1jDKvrTUdyEHF24ejb-ZfcZrsTr2gQB2HgAXllyoyj9_RaQPL1vwhQq61McUggMVMSujtcmvbJCRRZMdpHaYL-FEAEeTsqe4wcQW7SWL9n1CVIOTw73U4gzA5_XuXFe9yMkWd-c2f7G3piOtT5aHxk9E4wpOpDXYfIkcqSkUzIcihovrvWAtpi8lP-9EIGigjA2TCNrHHxS8XOMAjzSPc59669ZUeAhDEI7eWJLhXmqOxzIr0Kwl5Fs6Tokadjqi_9XMcbfXJCSLaVhmdWLipj9Iz3c7e0dlKAxGIZuPCQVsjwQrNpsMY-YMSIlBu6St0fpuZwKeI7TT_HIaRWLxSJYurd72N6dhRBnsn4F7qlPKDqjSBUdjpT7k-QHnaXi91H0nPS0RX9FC8B05ndrzX-4iiPB7wKZ0z7N6kD4EbJqXEOvt_A-xJqZWp0ctbRsiX1rptHCABDaibh6ZAp1v6jjY-82BvT4r-EYHJ44-egbqWoljxHbsT48jVJGzAu1EbcfJc-9oilRhSk1Y0ywDVn3orwT93vQC7yp4xF0zkLEC82gpkkLyKCbYGL-9VwSZ4PjrvcaA4T-nLy_Yv6NyFIsU--gkbDFnqwdYKutvFmvC7Siosoj9Uf9xpMUgLtbT5daFDMhUrQvchFYXTgvW4e3O0gxhj0tWR9ZiiNUPq-9BHAMHs9gqtpu4qTNY3vlgZZbZf8dxTTpxF3QJA=s943-no?authuser=0')"
//         if (northCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "39") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/-hGIkqXg10laJGJp5WCesac0Rxg7dNTOBrzSxEY4d_PDSqn1GBMNCr8BrdAU9WzEeRhGraYZIINUjRj_tfqdgbLKOPhGBaC_Cni0ZNLhtRCXuxoasGX-qCqQM0xZj66K4sMntCdMrzS6aZE97cQUbC5qDR0UtNwduYJIrKhtapQIZ5AJCzaM4gWjveuZ9pB0yoQcG8Qy-Q59zFbUDU2NrzoaAX6BTjBOGT78ed4zbUXGsZ9rwPtPpqsCg7nivrYFoqQuFqBzuEnKl-LS48-5j2B7mx3DdTvLUyOmWMM4oBKIYaEFYtB92O3WFcmDc2PPfehQSYaJvl4g0sfNDxR0oEKdTBp1XewsFicEO38y2hElnOfTT0QXRNqEGP8hKFQUZNlSfYiQO-lG9UDICcB7_Lv61NkA_F2V58f1ut6sLCCuti4UyBVhJ3mdq_oeoHTTGyll4lN1tr0TYwMbnKFj7sp7d0xI7aqcqHvw_dOBDim-Nfus-YzyOZtbVNxSWIpHGpiaCOGodxqFTI5UVdXJqhhHV23dTgeHye0dlkszpwCoEBTc75uYedKTpVRHiZ7vB5S8UB74HD68Xjrz7v3bNJUXqmDJ3Xx987VM8sRVKnwVO1Slj_1KMHecdOCfvf_jwPWYGSFU-NchoLPByOkhhxkdZBS_noTIEdrDQwhg0-wOWkDbbzYHXZl3MqhQcgnEzBoH4Rcm8B6h-09bBOT6LrM=s943-no?authuser=0')"
//         if (eastCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "40") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/jStMUmRZjtE4gHpvijeHYwgFxbUquxBvEBloJpKJ4JAhEhposiFKXPyqfbMhRcvx-yeNeFBj5PfXawawroHUti_gwLEhx93pIzzNdOkJC3wGedw1rQ1rAK1pjNn5K0fQwJPyq_4g07gT7wtyVVqaNO01Q7yqswhtnbyhPHM2ElVezZT10oHQXEe4QlO-jYHdd1UAS6fxAQsNql9IvOOkaMrmEDwQEIHHVRmZP0nTjRdpShf9ci-kQJcXjwdWR0xXfwlADINz7S527TpjZaSsY0clkk2ghETgKiRdROF9OuXgjeUR_EmdWP7UDMjJkF6eOBjsOmLhW-MPv4yqi5OAvpwoF4Kwe1MfXoK4efqPkBsV_Z6R7B5Gjm6UH-A5LGy79qvqaRiilPQB2EYvw9peKyQ-GK2IJZhAXQUKbFTIBoMkN1MtAma07w7_63R895TzG1kEtESJBgLlLilKZhy4Eo_1hT6x9DpDHMRxRDNpNgBfo544iaPaAOrETDYJC10cxkLFeaSDS5GLbPHwK-C2H-BtWBR7Q8mnQhQ3eBqzIHJ5OYs-ElYFihz7SXP79FKznRymUl4uvtU3hKZvTIKp7asgMPnPo64mkWS_eDbkqTAudYhQP5NIx4YXZpNOTyPE0qD-5pSS32usGwUtZc0_gO2tWF22RM-qIMlChFMHBpPS-9-gSJ5lFPSXopptnQzxzOfjDhSuyiVogns8atk9zDI=s943-no?authuser=0')"
//         if (southCheck(this.game.directions[0])) this.game.score += 1
//     } else if (key.keyCode == "37") {
//         this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/23qnqTfkcFOK87-NbuI9EPUldeDULBAaL01ZWNwBW087S9yV4ag50USQSMkMXp9TwyWYcipXAY3vhB6P3aFcziGHGnS-RKYTUSXTmjK5YQpsxxPK7VW8z5_mPm3SZ_iXn3JqAk_p4oBbtqby5hAd92nwlBdrG5_eSoxuHkuTSAmK15DPUuzO54lyYtGlQQokYzxW0HuK9Sfyz89p46MgtEKHJpvKCxgQ1DqspYArEBcchjiMLS0z-_EmWc4Hxrhcj9tJ6ZKPTSKTZ_oUoNxDzRLR345F0II7jnveBkokK_T5_2y32HyWr6rx8u4a59PWwyabWWwckrDphg4wt9H2cX_wHE_CchgKCNByCeoZ-OCauTUVenAXwlbde8-UOsZjGhSTQdlAuQgulMgw7ksBw2X58JIHqBcy30repQaVV5j8Sg6vGGbeR74KstIptIyX_oSIV1miS5KCMyz12tgoFQFYEe2CJfTEuQ5-7VDxlIJZRzHSV9XKyUrW8BL_D7vUtS4rEDK7wvS9Fl2LYtPwPg3yMhixYAdRpNWtOLNDQRi3VKB-CMBSHxA5C-UlqL_-AJ6213Td8Q6ZIIOP7BhzZFRF82wk19o193FdQycsmJcjKnG9y7_Bv13k22Orjsyxxi_fNVL798EiPROsvZPZPEwDYiAq9F6OxgFby_CZQuyo0xBpg7d2nVCYhWx-Ex1H_PRnLMh3k1WpQE_R5Dym5a4=s943-no?authuser=0')"
//         if (westCheck(this.game.directions[0])) this.game.score += 1
//     }   
// }

function check(key) {
    if (key.keyCode == "38") {
        northFlag.call(this)
        if (northCheck(this.game.directions[0])) this.game.score += 1
    } else if (key.keyCode == "39") {
        eastFlag.call(this)
        if (eastCheck(this.game.directions[0])) this.game.score += 1
    } else if (key.keyCode == "40") {
        southFlag.call(this)
        if (southCheck(this.game.directions[0])) this.game.score += 1
    } else if (key.keyCode == "37") {
        westFlag.call(this)
        if (westCheck(this.game.directions[0])) this.game.score += 1
    }   
}

// function base() {
//     this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/mVI93u-k-EJG5WGHP_1MYGBuOAcTFOD4rB9rT2B7gnlWKeXqYugPO9izhNj4jPFf7I11WvchL4iY4zBm5Lz2MhEkk1nFbCAYNRMrt2ph2iZZ0ZTRS_4jQlEcK-2aq6yMZkCdKNNgkSRsjfOX84oZ1-YUBJNvJ6t6VejTm_9Q_e1NSX9eDNHl2ALDE14AB9boIyKzHSQTdv7Ht1dV1myJ_C_Ip94756u-7bw2aMzmJ7XZ7k0WaKHIc5opQTKISI9c2qN_WUsDjGn7PxEuGl5iY9i8N1QRMlI-TQU_j9x_cDS_LlAFtvWeg1-K8elbbr6dZI0PtWFafIqX_8niQRhCNzfgE_rzCQZceNKB9QSYOD_3P1HZONHYMR44xHTdhs1KDBUWslOf2YAlbQcMcVzxYeAKopc2AKF689lbkBxJLjEBpwmZCU_me43_5vlCIVE_CfXTVknpUU0ee-tyepnnWABBYUUTiHINKzKybcyWcqOzecZDyEeE9Xr8g3ueP-H-l3TP_0622NzxTuAC-0BvH_ZpRfiKYKE_kaCTwFv5XIXS5Aw0AbPEhEzjYYr4LQ23yIe6ht2HNDK-1R8h5Io002S45uxrzisP25oUFaAH4jPu7nMjEwsAtMAqZyXue3-XRODSFeOzJPUzVwinnbXB-gIF5F7okeLSOsYLTjlfGBeE1bvTd3I4DSdNMNqgaQIZdQnwTnArXUxk8TU7_SPG3EY=s943-no?authuser=0')"
// }

// function base() {
//     this.flag.clearRect(-50,-50, 100, 100)
//     this.flag.setTransform(1,0,0,1,0,0)
//     this.flag.translate(50,50)
//     this.flag.rotate(0 * (Math.PI / 180));
//     this.flag.beginPath();
//     this.flag.moveTo(0,0);
//     this.flag.lineTo(50,-50);
//     this.flag.lineWidth = 6
//     this.flag.strokeStyle = "red"
//     this.flag.stroke();
// }

function northCheck(directioncheck) {
    if (directioncheck.direction === "North" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "South" && directioncheck.color === "blue") return true 
} 

function eastCheck(directioncheck) {
    if (directioncheck.direction === "East" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "West" && directioncheck.color === "blue") return true 
} 

function southCheck(directioncheck) {
    if (directioncheck.direction === "South" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "North" && directioncheck.color === "blue") return true 
} 

function westCheck(directioncheck) {
    if (directioncheck.direction === "West" && directioncheck.color === "red") return true 
    if (directioncheck.direction === "East" && directioncheck.color === "blue") return true 
} 

let stop
function northFlag() {
    // if (stop > 9) {
    //     cancelAnimationFrame(9)
    //     this.flag.clearRect(-50,-50, 100, 100)
    //     this.flag.setTransform(1,0,0,1,0,0)
    //     this.flag.translate(50,50)
    //     this.flag.rotate(0 * (Math.PI / 180));
    //     this.flag.beginPath();
    //     this.flag.moveTo(0,0);
    //     this.flag.lineTo(50,-50);
    //     this.flag.lineWidth = 6
    //     this.flag.strokeStyle = "red"
    //     this.flag.stroke();
    //     console.log(stop)
    //     stop = 0
    //     console.log(stop)
    //     return
    // } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(-this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    stop = requestAnimationFrame(northFlag.bind(this))
    if (stop > 9) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        console.log(stop)
        stop = 0
        console.log(stop)
        return
    } 
    // console.log(stop)
}
    
 
function eastFlag() {
    // if (stop > 9) {
    //     cancelAnimationFrame(9)
    //     this.flag.clearRect(-50,-50, 100, 100)
    //     this.flag.setTransform(1,0,0,1,0,0)
    //     this.flag.translate(50,50)
    //     this.flag.rotate(0 * (Math.PI / 180));
    //     this.flag.beginPath();
    //     this.flag.moveTo(0,0);
    //     this.flag.lineTo(50,-50);
    //     this.flag.lineWidth = 6
    //     this.flag.strokeStyle = "red"
    //     this.flag.stroke();
    //     stop = 0
    //     return
    // } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    stop = requestAnimationFrame(eastFlag.bind(this))
    if (stop > 9) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        stop = 0
        return
    } 
}

function southFlag() {
    // if (stop > 27) {
    //     cancelAnimationFrame(9)
    //     this.flag.clearRect(-50,-50, 100, 100)
    //     this.flag.setTransform(1,0,0,1,0,0)
    //     this.flag.translate(50,50)
    //     this.flag.rotate(0 * (Math.PI / 180));
    //     this.flag.beginPath();
    //     this.flag.moveTo(0,0);
    //     this.flag.lineTo(50,-50);
    //     this.flag.lineWidth = 6
    //     this.flag.strokeStyle = "red"
    //     this.flag.stroke();
    //     stop = 0
    //     return
    // } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    stop = requestAnimationFrame(southFlag.bind(this))
    if (stop > 27) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        stop = 0
        return
    } 
}
    
function westFlag() {
    // if (stop > 45) {
    //     cancelAnimationFrame(9)
    //     this.flag.clearRect(-50,-50, 100, 100)
    //     this.flag.setTransform(1,0,0,1,0,0)
    //     this.flag.translate(50,50)
    //     this.flag.rotate(0 * (Math.PI / 180));
    //     this.flag.beginPath();
    //     this.flag.moveTo(0,0);
    //     this.flag.lineTo(50,-50);
    //     this.flag.lineWidth = 6
    //     this.flag.strokeStyle = "red"
    //     this.flag.stroke();
    //     stop = 0
    //     return
    // } 
    this.flag.clearRect(-50,-50, 100, 100)
    this.flag.setTransform(1,0,0,1,0,0)
    this.flag.translate(50,50)
    this.flag.rotate(this.angle * (Math.PI / 180));
    this.flag.beginPath();
    this.flag.moveTo(0,0);
    this.flag.lineTo(50,-50);
    this.flag.lineWidth = 6
    this.flag.strokeStyle = "red"
    this.flag.stroke();
    this.angle += 5
    stop = requestAnimationFrame(westFlag.bind(this))
    if (stop > 45) {
        cancelAnimationFrame(9)
        this.flag.clearRect(-50,-50, 100, 100)
        this.flag.setTransform(1,0,0,1,0,0)
        this.flag.translate(50,50)
        this.flag.rotate(0 * (Math.PI / 180));
        this.flag.beginPath();
        this.flag.moveTo(0,0);
        this.flag.lineTo(50,-50);
        this.flag.lineWidth = 6
        this.flag.strokeStyle = "red"
        this.flag.stroke();
        stop = 0
        return
    } 
}
    
GameView.prototype.instructions = function() {
    this.drawing.font = "30px Arial";
    this.drawing.fillStyle = "black"
    this.drawing.textAlign = "center"
    this.drawing.fillText("Instructions:", 300, 35)
    this.drawing.fillText("Ahoy pirates, today we need your help.", 300, 75)
    this.drawing.fillText("We need to get Oak Island today.", 300, 105)
    this.drawing.fillText("Our fellow pirate ancestors had hid", 300, 135)
    this.drawing.fillText("Marie Antoinette's Jewels on this island!", 300, 165)
    this.drawing.fillText("My directions will appear to you on the", 300, 195)
    this.drawing.fillText("screen and I need you to press", 300, 225)
    this.drawing.fillText("the corresponding keyboard buttons.", 300, 255)
    this.drawing.fillStyle = "red"
    this.drawing.fillText("(My directions will appear in red).", 300, 285)
    this.drawing.fillStyle = "black"
    this.drawing.fillText("However, the other ships also know where", 300, 315)
    this.drawing.fillText("our ancestoral treasure is hidden.", 300, 345)
    this.drawing.fillText("They will try to confuse you by yelling", 300, 375)
    this.drawing.fillText("out the wrong direction ARRGH.", 300, 405)
    this.drawing.fillStyle = "blue"
    this.drawing.fillText("(Their directions will appear in blue)", 300, 435)
    this.drawing.fillStyle = "black"
    this.drawing.fillText("So when you see their directions I need", 300, 465)
    this.drawing.fillText("you to travel in the exact opposite", 300, 495)
    this.drawing.fillText("direction using the keyboard.", 300, 525)
    this.drawing.fillText("Good luck Matey!", 300, 555)
}

GameView.prototype.scoredisplay = function() {
    this.drawing.font = "30px Arial";
    this.drawing.fillStyle = "black"
    this.drawing.textAlign = "center"
    this.drawing.fillText(this.game.score, 50, 25)    
}


GameView.prototype.click = function() {
    window.addEventListener("click", start.bind(this), false);
}

function start() {
    this.canvas.style.backgroundImage = "url('https://lh3.googleusercontent.com/mVI93u-k-EJG5WGHP_1MYGBuOAcTFOD4rB9rT2B7gnlWKeXqYugPO9izhNj4jPFf7I11WvchL4iY4zBm5Lz2MhEkk1nFbCAYNRMrt2ph2iZZ0ZTRS_4jQlEcK-2aq6yMZkCdKNNgkSRsjfOX84oZ1-YUBJNvJ6t6VejTm_9Q_e1NSX9eDNHl2ALDE14AB9boIyKzHSQTdv7Ht1dV1myJ_C_Ip94756u-7bw2aMzmJ7XZ7k0WaKHIc5opQTKISI9c2qN_WUsDjGn7PxEuGl5iY9i8N1QRMlI-TQU_j9x_cDS_LlAFtvWeg1-K8elbbr6dZI0PtWFafIqX_8niQRhCNzfgE_rzCQZceNKB9QSYOD_3P1HZONHYMR44xHTdhs1KDBUWslOf2YAlbQcMcVzxYeAKopc2AKF689lbkBxJLjEBpwmZCU_me43_5vlCIVE_CfXTVknpUU0ee-tyepnnWABBYUUTiHINKzKybcyWcqOzecZDyEeE9Xr8g3ueP-H-l3TP_0622NzxTuAC-0BvH_ZpRfiKYKE_kaCTwFv5XIXS5Aw0AbPEhEzjYYr4LQ23yIe6ht2HNDK-1R8h5Io002S45uxrzisP25oUFaAH4jPu7nMjEwsAtMAqZyXue3-XRODSFeOzJPUzVwinnbXB-gIF5F7okeLSOsYLTjlfGBeE1bvTd3I4DSdNMNqgaQIZdQnwTnArXUxk8TU7_SPG3EY=s943-no?authuser=0')"
    this.game.addDirections()
    this.dir()
    this.keydown()
}


module.exports = GameView;