$(document).ready(function(){
    $('.tour_video').on('ended',function(){
        $('.tags').fadeIn(500);
        $('.img_dot_4').fadeIn(500);
    });
    
    // hover_event
    $('.img_dot_4').mouseenter(function(){
        $('.img_dot_4').css({'height':'350px','width':'350px','left':'352px','bottom':'387px'});
        $('.tag_nightmk').css({'bottom':'230px','left':'230px'});
        $('.tag_bao').css({'bottom':'290px','right':'20px'});
        $('.tag_pineapple').css({'bottom':'270px','right':'375px'});
        $('.tag_redtea').css({'bottom':'250px','left':'70px'});
    });

    // click_event
    $('.tags').click(function(){
        $('.title').slideDown(800);
        $('.content').slideDown(800);
    })
    // waterfall
    $('#tag_waterfall').click(function(){
        $('#title').html('撒固兒瀑布');
        $('#content').html(`
        ：比較冷門，所以篇幅較長～<br>
        通往撒固兒步道的是一條山林小徑，小徑兩旁盡是綠意，偶爾有幾戶矮房，<br>
        整條路清幽的只聽得到我們的聲音。<br>
        一抵達停車場，會有兩條路線，分別是「佐倉步道」和「撒固兒步道」，<br>
        一開始甚至走錯成佐倉步道，還興奮的在入口處拍了照片，<br>
        一進入卻和網路上介紹的不一樣，走了10分鐘才發現，因為已經喘不過氣…<br>
        總之，還是回到了撒固兒步道…（進入正題）<br>
        一開始迎接我們的是一座木橋，再來一路都是舒服緩坡的森林步道，<br>
        不論是樓梯還是斜坡，都很適合漫步其中，在路上還遇到猴群，為了安全還是保持一段距離...<br>
        只要570公尺就抵達撒固兒瀑布，難得來到這裡，就在這邊休憩了1.5個小時，水裡有小魚、<br>
        水面上有蜻蜓蝴蝶，太陽穿過樹葉，也打在瀑布激起的小水滴，真滴舒服ㄚ～<br>
        如果不在瀑布駐足，來回這悠閒的步道也只需要30分鐘哦！<br>
        也不用擔心找不到吃的，下山後還有小吃、飲料店可以吃午餐～
        `);
    });
    // 7
    $('#tag_7').click(function(){
        $('#title').html('七星潭');
        $('#content').html(`
        不用多說，大家都推薦這個地方，海灘都是由特別的石頭組成，不用怕腳沾沙子，<br>
        來這邊一定得踏踏浪，然後坐在海邊吹吹海風曬曬太陽，腳一下子就乾了。<br>
        不時會聽到旁邊基地的戰鬥機起飛的音爆聲，所以別被嚇到了～<br>
        必做事項：踏浪、打水瓢、疊石頭、曬太陽
        `);
    });
    // nightmk
    $('#tag_nightmk').click(function(){
        $('#title').html('東大門夜市');
        $('#content').html(`
        關於這個大家也寫了很多文章，所以這邊我推薦的是海鮮，便宜又大碗，<br>
        一份烤小蝦7隻100、烤小生蠔10顆100，超適合小資情侶來這邊享用，<br>
        帶回民宿看電影更是超級無敵享受～
        `);
    });
    // redtea
    $('#tag_redtea').click(function(){
        $('#title').html('廟口紅茶');
        $('#content').html(`
        喜歡薏仁的不要錯過，我超喜歡他們的薏仁湯，一杯裡面有整整一半都是薏仁，<br>
        多到一個大杯就把你餵飽，用湯匙吃真的超大滿足！！！<br>
        另外，喜歡台式馬卡龍的也可以嘗試他們家的，只是有些偏貴…
        `);
    });
    // bao
    $('#tag_bao').click(function(){
        $('#title').html('公正包子');
        $('#content').html(`
        大家想嘗試的話盡量提早來，覺得必吃的話那就要犧牲一點睡到自然醒的時間，<br>
        因為只要一錯過7：30這個黃金時間，那可是會開始大排長龍，旁邊臨停汽機車會湧現的～
        `);
    });
    // starbucks
    $('#tag_starbucks').click(function(){
        $('#title').html('貨櫃星巴克');
        $('#content').html(`
            就是一個拍照打卡景點，經常大排長龍，我們就是去朝聖，<br>
            然後參觀一下裡面的格局……就移動到旁邊的洄瀾灣開心農場ㄌ～
        `);
    });
    // farm
    $('#tag_farm').click(function(){
        $('#title').html('台開心農場');
        $('#content').html(`
        真的是一個很棒的環境，有鵝、有孔雀、有馬，還有梅花鹿……，重點是還免費！！！<br>
        有一大片草原、一大片湖畔，走遠一些還能看海哦～<br>
        如果懶得走路，外面也有電動車的租用，下雨還有雨刷ㄏㄏ
        `);
    });
    // pineapple
    $('#tag_pineapple').click(function(){
        $('#title').html('四維先生鳳梨冰');
        $('#content').html(`
        清爽的鳳梨，加上碎冰，再加上超愛鳳梨的ㄍㄟㄍㄟ…<br>
        爆幹喜歡啊我的天！！！<br>
        而且一杯只要35<br>
        直接買了再去一趟七星潭～
        `);
    });

});