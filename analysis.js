// ==========================================================================
// 📖 《念奴娇·赤壁怀古》深度文本赏析数据库 (analysis.js) - 马来西亚古诗词黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="古典诗词省略成分补全">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全词白话译文（含倒装还原与省略补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（上阕）</strong>浩荡的长江向东奔流而去，滔滔巨浪淘尽了千百年来无数杰出的英雄人物。在那旧日营垒的西边，人们说那就是" + U_TAG("三国") + "时" + U_TAG("周郎") + "（周瑜）大破曹军的" + U_TAG("赤壁") + "。陡峭不平的石壁直插云霄，汹涌澎湃的巨浪拍击着江岸，翻卷起千万堆雪白的浪花。壮丽的山河宛如一幅图画，在那个时代曾经涌现出多少英雄豪杰！<br>" +
        "<strong>（下阕）</strong>远远地回想" + U_TAG("周公瑾") + "当年，绝色美女" + U_TAG("小乔") + "刚刚嫁给他，他威武雄俊、意气风发。手摇羽扇、头戴青丝纶巾，在从容谈笑之间，强大的曹军战船便被烧得灰飞烟灭。" + OMISSION_TAG("主语", "我") + "如今心神游历于当年的古战场，应当自笑我太多愁善感（执着功名）了，以致过早地长出了花白的头发。人生在世恍如一场虚幻的梦境，姑且举起一杯酒，洒向江面以祭奠这永恒的江上明月吧！" +
        "</span><br><br>" +
        "<strong>【创作背景与文体常识（课本第29–30页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《念奴娇·赤壁怀古》写于宋神宗元丰五年（1082年）七月，当时47岁的" + U_TAG("苏轼") + "因“乌台诗案”被贬为黄州团练副使（有职无权的闲官）已逾两年。词人游览黄州城外的赤鼻矶，借音同假托为三国赤壁古战场，创作了这首<strong>北宋豪放词派的巅峰代表作</strong>（后人誉之为“古今绝唱”，并以苏轼词需“关西大汉，铜琵琶，铁绰板，唱‘大江东去’”与柳永婉约词相对比）。全词融<strong>写景、咏史、抒情</strong>于一炉，借壮丽江山与年少建功的周瑜，抒发自己功业未成、早生华发的感慨，最终在“一尊还酹江月”中归于旷达超脱。</span>",

    paragraphs: {
        1: "<strong>【上阕赏析：大江东去，赤壁惊涛——壮丽山河烘托千古豪杰】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 上阕第 1–2 句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[大江][东]去，浪[淘]尽、千古[风流人物]。[故垒]西边人道是，" + U_TAG("三国") + U_TAG("周郎") + U_TAG("赤壁") + "。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[长江]✓[向东]✓奔流而去，滔滔巨浪[冲刷]✓尽了千百年来无数[杰出的英雄人物]✓。在[旧时营垒]✓的西边，人们说那就是" + U_TAG("三国") + "时" + U_TAG("周郎") + "破曹的" + U_TAG("赤壁") + "。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("大江", "专指长江", "泛指大河") +
                       ANCIENT_MODERN_TAG("风流人物", "建功立业的杰出英雄", "风度翩翩或贪恋风月之人") +
                       GRAMMAR_TAG("起笔艺术", "将万里长江（空间）与千古历史（时间）融为一体，气象雄浑") +
                       GRAMMAR_TAG("假托借景", "“人道是”三字极为严谨，既点明此处仅是传闻中的赤壁，又顺势借以怀古") +
                   "</div>" +
               "</div>" +

               // 上阕第 3–4 句卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[乱石穿空]，[惊涛拍岸]，卷起[千堆雪]。江山如画，[一时]多少[豪杰]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[陡峭不平的石壁直插天空]✓，[汹涌的巨浪拍击着江岸]✓，翻卷起[千万堆雪白的浪花]✓。山河美丽得像图画一样，[那一个时代]✓涌现出多少[英雄豪杰]✓！" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       GRAMMAR_TAG("课本核心考点（炼字与修辞）", "“穿”化静为动显山势险峻；“拍”赋声感显水势猛烈；“千堆雪”借喻白色浪花（对偶＋夸张＋借喻）") +
                       GRAMMAR_TAG("承上启下", "“江山如画，一时多少豪杰”总束上阕写景，自然引出下阕第一主角周瑜") +
                   "</div>" +
               "</div>" +

           "</div>",

        2: "<strong>【下阕赏析：遥想公瑾，早生华发——怀古伤己与酹月旷达】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 下阕第 1–2 句卡片（周瑜形象）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "遥想" + U_TAG("公瑾") + "当年，" + U_TAG("小乔") + "[初]嫁了，[雄姿英发]。[羽扇纶巾]谈笑间，[强虏][灰飞烟灭]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "远远回想" + U_TAG("周公瑾") + "当年，美女" + U_TAG("小乔") + "[刚刚]✓嫁给他，他[风姿威武、才情卓越不凡]✓。[手摇羽扇、头戴青丝头巾]✓，在说说笑笑之间，[强大的曹军及其战船]✓就[烧得像灰飞散、如烟熄灭了]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       GRAMMAR_TAG("破音字必考", "羽扇纶(guān)巾（汉末魏晋名士装束，切勿误读为 lún）") +
                       GRAMMAR_TAG("课本原题（周瑜形象）", "① 美人衬英雄（小乔初嫁 → 年少得意）；② 儒雅从容、指挥若定（羽扇纶巾谈笑间 → 破曹立功）") +
                   "</div>" +
               "</div>" +

               // 下阕第 3–4 句卡片（怀古伤己与旷达收束）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[故国][神游]，[多情]应笑，我早生[华发]。人间如梦，一[尊][还][酹]江月。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "我") + "[心神游历]✓于[当年的赤壁古战场]✓，应当自笑我太[多愁善感（执着功业）]✓了，以致过早长出了[花白的头发]✓。人世恍如一场梦，姑且举起一[杯酒]✓，[还是]✓[洒酒祭奠]✓这江上的明月吧！" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("故国", "旧地，指赤壁古战场", "祖国、故乡") +
                       ANCIENT_MODERN_TAG("多情", "怀古伤己、执着功业的情怀", "重男女儿女之情") +
                       ANCIENT_MODERN_TAG("尊", "“樽”的本字，酒器、酒杯", "尊敬、尊长") +
                       GRAMMAR_TAG("两大诗家语倒装句", "① 故国神游 ＝ 神游故国 ； ② 多情应笑我 ＝ 应笑我多情") +
                       GRAMMAR_TAG("课本阅读指引（主旨升华）", "对比周瑜（34岁破曹）与自己（47岁贬黄州早生华发），最终从怅恨中振起，洒酒祭月，展现旷达超脱的胸怀") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
