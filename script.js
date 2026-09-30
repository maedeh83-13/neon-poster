let tg=window.Telegram.WebApp;
tg.ready();
tg.expand();
tg.setHeaderColor('#000000')

const share={
    'kanoon':{link:'https://t.me/iumskanoon'},
}
const farhangi=document.querySelector('.share-btn');
if(farhangi){
    farhangi.addEventListener('click', ()=>{
        window.Telegram.WebApp.openTelegramLink('https://t.me/iumskanoon');
    });
}
const kanoonData={
    'helal':{link:'https://t.me/helal_iran'},
    'hiva':{link:'https://t.me/kaiums'},
    'mahdavi':{link:'https://t.me/IUMS_Mahdaviat'},
    'hodhod':{link:'https://t.me/hodhod_iums'},
    'maham':{link:'https://t.me/mahamchariity'},
    'nama':{link:'https://t.me/Namaiums'},
    'saba':{link:'https://t.me/saba_musicgroup'},
    'mahor':{link:'https://t.me/mahoor_iums'},
    'shabahang':{link:'https://t.me/shabahangiums'},
    'bazi':{link:'https://t.me/iranunigameclub'},
    'poya':{link:'https://t.me/zehn_poya'},
    'ayande':{link:'https://t.me/ayande_rooshan'},
    'samar':{link:'https://t.me/Samar_iums'},
    'karafarini':{link:'https://t.me/SUCCESS_IUMS'},
    'mava':{link:'https://t.me/maava_iums'},
    'resane':{link:'https://t.me/iumsresaneh'},


}
const allcard=document.querySelectorAll('.clubs-card')
allcard.forEach(card=>{
    card.addEventListener('click',()=>{
        if(window.Telegram && window.Telegram.WebApp){
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        }
        createSpark(e.pageX, e.pageY)
        const info=kanoonData[card.id];
        if(info){
            window.Telegram.WebApp.openTelegramLink(info.link);

        }else{
            console.log("این کارت هنوز تنظیم نشده است")
        }
    })
})
function createSpark(x,y){
    const spark=document.createElement('div');
    spark.className='spark';
    spark.style.left=`${x}px` ;
    spark.style.top=`${y}px` ;
    document.body.appendChild(spark);
    spark.addEventListener.apply('animationed',()=>{
        spark.remove();
    });
}
