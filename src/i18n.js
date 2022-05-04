import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { NativeModules, Platform } from 'react-native';

const deviceLanguage =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage);

const resources = {
    sk_SK: {
        translation: {
            "Welcome to Recipeq!": "Vitajte v Recipeq!",
            "Search in meal categories": "Prehľadávajte kategórie receptov",
            "Go to the meal categories": "Kategórie jedál",
            "Or try for example": "Alebo vyskúšajte napríklad",
            "Beef": "Hovädzie",
            "Breakfast": "Raňajky",
            "Chicken": "Kuracie",
            "Dessert": "Dezerty",
            "Goat": "Kozie",
            "Lamb": "Jahňacina",
            "Miscellaneous": "Rôzne",
            "Pasta": "Cestoviny",
            "Pork": "Bravčové",
            "Seafood": "Morské plody",
            "Side": "Vedľajšie chody",
            "Starter": "Predjedlá",
            "Vegan": "Vegánske",
            "Vegetarian": "Vegetariánske",
            "meals": "",
            "Show me more": "Zobraziť detaily receptu",
            "Ingredients": "Prísady",
            "Instructions": "Inštrukcie",
            "Export recipe to PDF": "Exportovať recept do PDF",
            "Return to Homepage": "Vrátiť sa na domovskú obrazovku",
            "Export": "Exportovať",
            "to PDF": "do PDF",
            "If you want, you can edit the content of the recipe.": "Pokiaľ chcete, môžete upraviť obsah receptu.",
            "Rewrite recipe": "Prepísať recept",
            "If you are satisfied with the recipe, export it to PDF.": "Pokiaľ ste spokojný s receptom, vygenerujte PDF.",
            "Create PDF": "Vytvoriť PDF",
            "PDF was successfully created!": "PDF s receptom bolo úspešne vytvorené!",
            "Please allow us to use device storage.": "Prosím, povoľte aplikácii použiť úložisko.",
            "There was an error while creating PDF.": "Vyskytla sa chyba počas vytvárania PDF.",
            "Recipe name": "Názov receptu",
            "Save changes": "Uložiť zmeny",
            "Home": "Domovská obrazovka",
            "Details": "Detaily",
            "Recipe Detail": "Detaily receptu",
            "Recipes List": "Zoznam receptov",
            "Meal Categories": "Kategórie jedál",
            "Update recipe": "Upraviť recept",
            "View Favourite Recipes": "Zobraziť obľúbené recepty",
            "- PDF was generated in Recipeq. The recipe was extracted from TheMealDB.": "- PDF bolo vygenerované aplikáciou Recipeq. Recept pochádza z databázy TheMealDB.",
            "Honey Yogurt Cheesecake": "Medovo-jogurtový cheesecake",
            "Go to Favourite Recipes": "Zobraziť obľúbené recepty",
            "Favourite Recipes": "Obľúbené recepty",
            "Mark as favourite": "Pridať medzi obľúbené",
            "Remove from favourite": "Odstrániť z obľúbených",
            "Recipe was marked as Favourite!": "Recept bol označený ako obľúbený!",
            "Recipe was removed from Favourite.": "Recept bol odstránený z obľúbených.",

            "Breakfast Potatoes": "Raňajkové zemiaky",
            "3 Medium - Potatoes": "3 stredné zemiaky",
            "1 tbs - Olive Oil": "1 lyžicu olivového oleja",
            "2 strips - Bacon": "2 plátky slaniny",
            "Minced - Garlic Clove": "zomletý strúčik cesnaku",
            "1 tbs - Maple Syrup": "1 lyžica javorového sirupu",
            "Garnish - Parsley": "petržlen na ozdobenie",
            "Pinch - Salt": "štípka soli",
            "Pinch - Pepper": "štípka mletého čierneho korenia",
            "To taste - Allspice": "rôzne korenie podľa chuti",
            "3 Medium - Potatoes, 1 tbs - Olive Oil, 2 strips - Bacon, Minced - Garlic Clove, 1 tbs - Maple Syrup, Garnish - Parsley, Pinch - Salt, Pinch - Pepper, To taste - Allspice, ":
                "3 stredné zemiaky, 1 lyžicu olivového oleja, 2 plátky slaniny, zomletý strúčik cesnaku, 1 lyžica javorového sirupu, petržlen na ozdobenie, štípka soli, štípka mletého čierneho korenia, rôzne korenie podľa chuti",
            "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop!\r\nWash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water.\r\nIn the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly.\r\nOnce the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed.\r\nCook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil.\r\nChop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.\r\nOnce the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed.\r\nLet the garlic cook until fragrant, about one minute.\r\nJust before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect.\r\nServe in a warm bowl with a sunny side up egg!":
                "Predtým ako niečo urobíme, zmrazíme plátky slaniny. Počas prípravy jedla sa nám budú oveľa ľahšie krájať!\n" +
                "Zemiaky umyjeme a nakrájame na stredné kocky. Aby sme zabránili akémukoľvek zhnednutiu, vložíme už nakrájané zemiaky do misky naplnenej vodou.\n" +
                "Medzitým na stredne vysokej teplote rozohrejeme na veľkej panvici 1 - 2 lyžice oleja. Nakloníme panvicu tak, aby sa olej rovnomerne rozložil.\n" +
                "Akonáhle je olej rozpálený, zemiaky scedíme a pridáme do panvice. Podľa potreby dochutíme soľou a korením.\n" +
                "Varíme 10 minút za častého miešania kým zemiaky nezhnednú. V prípade potreby pridáme ešte lyžicu oleja.\n" +
                "Nasekáme slaninu a pridáme k zemiakom. Slanina sa začne škvariť. Slanina bude chrumkavá asi za 5-6 minút.\n" +
                "Akonáhle je slanina uvarená, znížime teplotu na stredne nízku a pridáme popučený cesnak. Okoreníme ešte raz. Pridáme sušenú alebo čerstvú petržlenovú vňať a podľa potreby regulujeme teplo.\n" +
                "Cesnak necháme povariť, kým nebude voňavý (asi jednu minútu).\n" +
                "Tesne pred podávaním pokvapkáme javorovým sirupom a premiešame. Zemiaky necháme povariť ešte ďalšiu minútu, čo im dodá skaramelizovaný efekt.\n" +
                "Podávame v teplej miske s vajíčkom na vrchu!",

            "English Breakfast": "Anglické raňajky",
            "2 - Sausages": "2 klobásky",
            "3 - Bacon": "3 plátky slaniny",
            "2 - Mushrooms": "2 huby",
            "2 - Tomatoes": "2 paradajky",
            "1 Slice - Black Pudding": "jeden plátok jaternice",
            "2 - Eggs": "2 vajíčka",
            "1 Slice - Bread": "jeden plátok chleba",
            "2 - Sausages, 3 - Bacon, 2 - Mushrooms, 2 - Tomatoes, 1 Slice - Black Pudding, 2 - Eggs, 1 Slice - Bread, ":
                "2 klobásky, 3 plátky slaniny, 2 huby, 2 paradajky, jeden plátok jaternice, 2 vajíčka, jeden plátok chleba",
            "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.\r\nCook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.\r\nSnip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.\r\nFor the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.\r\nFor the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.\r\nFor the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.\r\nFor 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.\r\nFor the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.\r\nOnce all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.":
            "Plochý grilovací plech rozohrejte na miernom ohni na 2 krúžky / plamene, ak sa to hodí, a opatrne ho potrite ľahkým olivovým olejom.\n" +
                "Klobásy najskôr uvarte. Klobásy pridáme na rozpálený grilovací tanier / najchladnejšiu časť, ak existuje, a necháme pomaly variť asi 15-20 minút, občas otočíme, kým nie sú zlaté. Po prvých 10 minútach\n" +
                "s, pred začatím prípravy ďalších surovín zvýšte teplotu na strednú teplotu. Ak bojujete o miesto, klobásy úplne uvarte a zohrejte na plechu v rúre.\n" +
                "Do mastného okraja slaniny zaštipnite niekoľko malých rezov. Slaninu položte priamo na grilovaciu dosku a smažte ju z každej strany 2 až 4 minúty alebo až kým nedosiahnete požadovanú chrumkavosť. Rovnako ako klobásy, aj\n" +
                "okedovanú slaninu môžeme na rúre piecť na tanieri.\n" +
                "U húb odstráňte špinu pomocou štetca na pečivo a úroveň húb orežte hubovou doskou. Dochutíme soľou, korením a pokvapkáme trochou olivového oleja. Položte stopku hore na dosku grilu\n" +
                "te a varte 1 - 2 minúty, potom otočte a varte ďalšie 3 - 4 minúty. Počas varenia huby príliš nehýbte, pretože tak dôjde k uvoľneniu prírodných štiav, vďaka čomu budú mokré.\n" +
                "Pokiaľ ide o paradajky, nakrájajte ich na stred alebo na polovice pozdĺžne, ak používate slivkové paradajky, a malým ostrým nožom odstráňte zelené „oko“. Dochutíme soľou, korením a pokvapkáme trochou o\n" +
                "živý olej. Položte reznou stranou nadol na grilovaciu platňu a povarte ju bez pohybu 2 minúty. Jemne prevrátime a opäť okoreníme. Varte ďalšie 2 - 3 minúty, kým nezmäknú, ale stále držia svoj tvar.\n" +
                "Na čierny puding nakrájajte čierny puding na 3-4 plátky a zbavte ho šupky. Položte na grilovaciu dosku a povarte z každej strany 1½-2 minúty, kým nie sú mierne chrumkavé.\n" +
                "Pre „správny“ vyprážaný chlieb je najlepšie pripraviť ho na samostatnej panvici. Ideálne je použiť chlieb starý pár dní. Rozohrejte panvicu na stredný oheň a základňu zalejte olejom. Pridajte chlieb a povarte ho 2-3\n" +
                "minúty z každej strany, kým nebudú chrumkavé a zlaté. Ak je panvica príliš suchá, prilejte trochu oleja. Pre bohatšiu chuť pridajte po otočení plátku gombík masla.\n" +
                "Pokiaľ ide o praženicu, rozbite vajíčko priamo do panvice so smaženým chlebom a nechajte 30 sekúnd stáť. Pridajte dobrý gombík masla a keď je roztopené, vajce zľahka rozšľahajte / rozpečte. Pripravte si jedlo\n" +
                "červené štádium, okoreníme a jemne odstránime plátkom ryby.\n" +
                "Akonáhle sú všetky ingrediencie uvarené, naservírujte ich na teplé taniere a ihneď si pochutnajte na dobrom lisu z paradajkového kečupu alebo hnedej omáčky.",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: deviceLanguage,

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;