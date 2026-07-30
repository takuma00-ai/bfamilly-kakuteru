const content = document.getElementById("content");

const search = document.getElementById("search");

search.addEventListener("input",function(){

    console.log(search.value);

    const result = cocktails.filter(function(cocktail){
        return cocktail.name.includes(search.value);
    });


    let html = "";

    for(let i = 0; i < result.length; i++){
        html += `
        <div class="cocktail-card" id="card${i}">
            <h2>${result[i].name}</h2>
        </div>
        `;
    }

    content.innerHTML = html ;
    for (let i = 0; i < result.length; i++) {
    document.getElementById(`card${i}`).addEventListener("click", function () {
        result[i].action();
    });
}

});

const cocktails = [
    {
        name:"モヒート",
        action:showMojito
    },
    {
        name:"ブルーハワイ",
        action:showBlueHawaii
    },
    {
        name:"ピニャコラーダ",
        action:showPinaColada
    },
    {
        name:"ラムコーク",
        action:showRumCoke
    },
    {
        name:"ラムジンジャー",
        action:showRumCoke
    },
    {
        name:"カシスオレンジ",
        action:showCassisOrange
    },
    {
        name:"カシスソーダ",
        action:showCassisSoda
    },
    {
        name:"カシスパイン",
        action:showCassisPine
    },
    {
        name:"カシスグレープフルーツ",
        action:showCassisGrape
    },
    {
        name:"ジントニック",
        action:showGinTonic
    },
    {
        name:"ジンバック",
        action:showGinBack
    },
    {
        name:"ジンリッキー",
        action:showGinRicky
    },
    {
        name:"マティーニ",
        action:showMartini
    },
    {
        name:"ウォッカトニック",
        action:showVodkaTonic
    },
    {
        name:"モスコミュール",
        action:showMoscowMule
    },
    {
        name:"ブルドック",
        action:showBloodyMary
    },
    {
        name:"スクリュードライバー",
        action:showScrewdriver
    },
    {
        name:"Sex on the BEACH",
        action:showSexOnTheBeach
    },
    {
        name:"カンパリオレンジ",
        action:showCampariOrange
    },
    {
        name:"カンパリソーダ",
        action:showCampariSoda
    },
    {
        name:"カンパリトニック",
        action:showCampariSoda
    },
    {
        name:"カンパリトニック",
        action:showCampariTonic
    },
    {
        name:"スプモーニー",
        action:showSupumoni
    },
    {
        name:'カルアミルク',
        action:showKahluaMilk
    }
]


function back(){
    content.innerHTML = '';
}

function showRum(){

    content.innerHTML = `
    <div class="cocktail" id="mojito">
        🍸 モヒート
    </div>

    <div class="cocktail" id="blue-hawaii">
        🍸 ブルーハワイ
    </div>

    <div class="cocktail" id="pina-colada">
        🍸 ピニャコラーダ
    </div>

    <div class="cocktail" id="rum-coke">
        🍸 ラムコーク
    </div>

    <div class="cocktail" id="rum-ginger">
        🍸 ラムジンジャー
    </div>

    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");

    backButton.onclick = function(){
        back();
    };

    const mojitoButton = document.getElementById("mojito");
    mojitoButton.onclick = function(){
        showMojito();
    };

    const blueHawaiiButton = document.getElementById("blue-hawaii");
    blueHawaiiButton.onclick = function(){
        showBlueHawaii();
    }
    
    const pinaColadaButton = document.getElementById("pina-colada");
    pinaColadaButton.onclick = function(){
        showPinaColada();
    }

    const rumCokeButton = document.getElementById("rum-coke");
    rumCokeButton.onclick = function(){
        showRumCoke();
    }

    const rumGingerButton = document.getElementById("rum-ginger");
    rumGingerButton.onclick = function(){
        showRumGinger();
    }

} 

function showMojito(){
    content.innerHTML = `
    <h2>🍸 モヒート</h2>
        <p>ホワイトラム 45ml</p>
        <p>トニックウォーター 適量</p>
        <p>ライム 1/4</p>
        <p>ミント 1枚</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showRum();
    }
}
function showBlueHawaii(){
    content.innerHTML = `
    <h2>🍸 ブルーハワイ</h2>
        <p>ホワイトラム 30ml</p>
        <p>ブルーキュラソー 15ml</p>
        <p>パイナップルジュース 30ml</p>
        <p>レモンジュース 15ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showRum();
    }
}
function showPinaColada(){
    content.innerHTML = `
    <h2>🍸 ピニャコラーダ</h2>
        <p>ホワイトラム 30ml</p>
        <p>パイナップルジュース 80ml</p>
        <p>ココナッツミルク 30ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showRum();
    }
}
function showRumCoke(){
    content.innerHTML = `
    <h2>🍸 ラムコーク</h2>
        <p>ホワイトラム 30ml-45ml</p>
        <p>コーラ 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showRum();
    }
}
function showRumGinger(){
    content.innerHTML = `
    <h2>🍸 ラムジンジャー</h2>
        <p>ホワイトラム 30-45ml</p>
        <p>ジンジャーエール 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showRum();
    }
}

const rumButton = document.getElementById("rum");

rumButton.onclick = function(){
    showRum();
}


function showCassis(){
        content.innerHTML = `
    <div class="cocktail" id="cassis-orange">
        🍸 カシスオレンジ
    </div>

    <div class="cocktail" id="cassis-soda">
        🍸 カシスソーダ
    </div>

    <div class="cocktail" id="cassis-pine">
        🍸 カシスパイン
    </div>

    <div class="cocktail" id="cassis-grape">
        🍸 カシスグレープフルーツ
    </div>
    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        back();
    };

    const cassisOrangeButton = document.getElementById("cassis-orange");
    cassisOrangeButton.onclick = function(){
        showCassisOrange();
    }

    const cassisSodaButton = document.getElementById("cassis-soda");
    cassisSodaButton.onclick = function(){
        showCassisSoda();
    }

    const cassisPineButton = document.getElementById("cassis-pine");
    cassisPineButton.onclick = function(){
        showCassisPine();
    }

    const cassisGrapeButton = document.getElementById("cassis-grape");
    cassisGrapeButton.onclick = function(){
        showCassisGrape();
    }
}

function showCassisOrange(){
    content.innerHTML = `
    <h2>🍸 カシスオレンジ</h2>
        <p>カシス 30ml</p>
        <p>オレンジジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCassis();
    }
}
function showCassisSoda(){
    content.innerHTML = `
    <h2>🍸 カシスソーダ</h2>
        <p>カシス 30ml</p>
        <p>トニックウォーター（炭酸水) 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCassis();
    }
}
function showCassisPine(){
    content.innerHTML = `
    <h2>🍸 カシスパイン</h2>
        <p>カシス 30-45ml</p>
        <p>パイナップルジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCassis();
    }
}
function showCassisGrape(){
    content.innerHTML = `
    <h2>🍸 カシスグレープフルーツ</h2>
        <p>カシス 30-45ml</p>
        <p>グレープフルーツジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCassis();
    }
}

const cassisButton = document.getElementById("cassis");

cassisButton.onclick = function(){
    showCassis();
}


function showGin(){
    content.innerHTML = `
    <div class="cocktail" id="gin-tonic">
        🍸 ジントニック
    </div>

    <div class="cocktail" id="gin-back">
        🍸 ジンバック
    </div>

    <div class="cocktail" id="gin-ricky">
        🍸 ジンリッキー
    </div>

    <div class="cocktail" id="martini">
        🍸 マティーニ
    </div>

    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        back();
    };

    const ginTonicButton = document.getElementById("gin-tonic");
    ginTonicButton.onclick = function(){
        showGinTonic();
    }
    const ginBackButton = document.getElementById("gin-back");
    ginBackButton.onclick = function(){
        showGinBack();
    }
    const ginRickyButton = document.getElementById("gin-ricky");
    ginRickyButton.onclick = function(){
        showGinRicky();
    }
    const martiniButton = document.getElementById("martini");
    martiniButton.onclick = function(){
        showMartini();
    }

}

function showGinTonic(){
    content.innerHTML = `
    <h2>🍸 ジントニック</h2>
        <p>ジン 30ml-45ml</p>
        <p>トニックウォーター 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showGin();
    }
}
function showGinBack(){
    content.innerHTML = `
    <h2>🍸 ジンバック</h2>
        <p>ジン 30-45ml</p>
        <p>レモンジュース 15-30ml</p>
        <p>ジンジャーエール 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showGin();
    }
}
function showGinRicky(){
    content.innerHTML = `
    <h2>🍸 ジンリッキー</h2>
        <p>ジン 45ml</p>
        <p>トニックウォーター（炭酸水) 適量</p>
        <p>ライム 1/2個</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showGin();
    }
}
function showMartini(){
    content.innerHTML = `
    <h2>🍸 マティーニ</h2>
        <p>ジン 45-60ml</p>
        <p>ベルモット 10-15ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showGin();
    }
}

const ginButton = document.getElementById("gin");

ginButton.onclick = function(){
    showGin();
}


function showVodka(){
    content.innerHTML = `
    <div class="cocktail" id="vodka-tonic">
        🍸 ウォッカトニック
    </div>

    <div class="cocktail" id="moscow-mule">
        🍸 モスコミュール
    </div>

    <div class="cocktail" id="bloody-mary">
        🍸 ブルドック
    </div>

    <div class="cocktail" id="screwdriver">
        🍸 スクリュードライバー
    </div>

    <div class="cocktail" id="sex-on-the-beach">
        🍸 Sex on the Beach
    </div>
    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        back();
    };
    const vodkaTonicButton = document.getElementById("vodka-tonic");
    vodkaTonicButton.onclick = function(){
        showVodkaTonic();
    }
    const moscowMuleButton = document.getElementById("moscow-mule");
    moscowMuleButton.onclick = function(){
        showMoscowMule();
    }
    const bloodyMaryButton = document.getElementById("bloody-mary");
    bloodyMaryButton.onclick = function(){
        showBloodyMary();
    }
    const screwdriverButton = document.getElementById("screwdriver");
    screwdriverButton.onclick = function(){
        showScrewdriver();
    }
    const sexOnTheBeachButton = document.getElementById("sex-on-the-beach");
    sexOnTheBeachButton.onclick = function(){
        showSexOnTheBeach();
    }
}

function showVodkaTonic(){
    content.innerHTML = `
    <h2>🍸 ウォッカトニック</h2>
        <p>ウォッカ 30-45ml</p>
        <p>トニックウォーター（炭酸水) 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showVodka();
    }
}
function showMoscowMule(){
    content.innerHTML = `
    <h2>🍸 モスコミュール</h2>
        <p>ウォッカ 45ml</p>
        <p>ジンジャーエール 90ml</p>
        <p>ライムがあれぱ軽く絞る</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showVodka();
    }
}
function showBloodyMary(){
    content.innerHTML = `
    <h2>🍸 ブルドック</h2>
        <p>ウォッカ 30-45ml</p>
        <p>グレープフルーツジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showVodka();
    }
}
function showScrewdriver(){
    content.innerHTML = `
    <h2>🍸 スクリュードライバー</h2>
        <p>ウォッカ 45ml</p>
        <p>オレンジジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showVodka();
    }
}
function showSexOnTheBeach(){
    content.innerHTML = `
    <h2>🍸 Sex on the Beach</h2>
        <p>ウォッカ 15ml</p>
        <p>メロン・リキュール 20ml</p>
        <p>フランボワーズ 10ml</p>
        <p>パイナップルジュース 80ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showVodka();
    }
}

const vodkaButton = document.getElementById("vodka");

vodkaButton.onclick = function(){
    showVodka();
}


function showCampari(){
    content.innerHTML = `
    <div class="cocktail" id="campari-orange">
        🍸 カンパリオレンジ
    </div>

    <div class="cocktail" id="campari-soda">
        🍸 カンパリソーダ
    </div>

    <div class="cocktail" id="campari-tonic">
        🍸 カンパリトニック
    </div>

    <div class="cocktail" id="supumoni">
        🍸 スプモーニー
    </div>
    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        back();
    };
    const campariOrangeButton = document.getElementById("campari-orange");
    campariOrangeButton.onclick = function(){
        showCampariOrange();
    }
    const campariSodaButton = document.getElementById("campari-soda");
    campariSodaButton.onclick = function(){
        showCampariSoda();
    }
    const campariTonicButton = document.getElementById("campari-tonic");
    campariTonicButton.onclick = function(){
        showCampariTonic();
    }
    const supumoniButton = document.getElementById("supumoni");
    supumoniButton.onclick = function(){
        showSupumoni();
    }
}

function showCampariOrange(){
    content.innerHTML = `
    <h2>🍸 カンパリオレンジ</h2>
        <p>カンパリ 45ml</p>
        <p>オレンジジュース 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCampari();
    }
}
function showCampariSoda(){
    content.innerHTML = `
    <h2>🍸 カンパリソーダ</h2>
        <p>カンパリ 40-45ml</p>
        <p>トニックウォーター（炭酸水) 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCampari();
    }
}
function showCampariTonic(){
    content.innerHTML = `
    <h2>🍸 カンパリトニック</h2>
        <p>カンパリ 30ml</p>
        <p>トニックウォーター 90ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCampari();
    }
}
function showSupumoni(){
    content.innerHTML = `
    <h2>🍸 スプモーニー</h2>
        <p>カンパリ 20-30ml</p>
        <p>グレープフルーツジュース 30-45ml</p>
        <p>トニックウォーター（炭酸水) 適量</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showCampari();
    }
}

const campariButton = document.getElementById("campari");

campariButton.onclick = function(){
    showCampari();
}


function showOther(){
    content.innerHTML = `
    <div class="cocktail" id="kahlua-milk">
        🍸 カルアミルク
    </div>

    <div class="cocktail" id="matcha-milk">
        🍸 抹茶ミルク
    </div>

    <div class="cocktail">
        🍸 -マリブ系-
    </div>

    <div class="cocktail">
        🍸 -パッソア系-
    </div>
    <button id="back">← 戻る</button>
    `;

    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        back();
    };
    const kahluaMilkButton = document.getElementById("kahlua-milk");
    kahluaMilkButton.onclick = function(){
        showKahluaMilk();
    }
    const matchaMilkButton = document.getElementById("matcha-milk");
    matchaMilkButton.onclick = function(){
        showMatchaMilk();
    }
}

function showKahluaMilk(){
    content.innerHTML = `
    <h2>🍸 カルアミルク</h2>
        <p>カルーア 30ml</p>
        <p>牛乳 90-120ml</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showOther();
    }
}
function showMatchaMilk(){
    content.innerHTML = `
    <h2>🍸 抹茶ミルク</h2>
        <p>-- 30ml</p>
        <p>---</p>
        <p>---</p>
        <p>---</p>
    <button id="back">← 戻る</button>
    `;
    const backButton = document.getElementById("back");
    backButton.onclick = function(){
        showOther();
    }
}

const otherButton = document.getElementById("other");

otherButton.onclick = function(){
    showOther()
}
