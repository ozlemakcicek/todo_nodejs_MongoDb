# nodejs paketlerinden bazilari;

- nodemon
- express
- body-parser
- mongoose
- bcrypt
- jsonwebtoken
- .env

# bu paketleri kullanmadan da yazabilirsin ama cok zahmetli olur.

# Veri tabaninda mongodb de collectionlar var. mesela Users Collection icin; username, password, name, surname, createdAt gibi baliklari mongodb ile dolduracvagiz

# 1- npm init -y ile klasorumuz icine packetjson i getirelim.

# 2- kullanacagimiz paketleri tek bir komutla yan yana yazarak indirebiliriz. npm i nodemon express body-parser seklinde ilk olarak bu ucunu indirelim.

# 3- packet.jsondaki ayarlamalari yapalim.script kisminda start = node app.js, dev = nodemon app.js ile ayarlamalari yapalim. Üste ES6 yi kullanmak icin type=module yazalim. ve kontrol etmek icin bir app.js dosyasi olusturup console a biseyler yazdiralim.

# 4- Ama aslinda klasor yapilarini biz ana klasor icinde src diye bir klasor acariz ve orda yapariz islemleri. Ve app.js i oraya tasiyalim.Ve packet.json da da app.js yolunu duzeltelim

# 5- Artik Serverimizi olusturabiliirz.app.js icine express, body-parseri import etmeliyiz. body-parser kullanici tarafindan yani body tarafindan sifrelenerek gelen verileri okuyabilmemizi saglar.yani frontenbd den gelen sifreli verileri backend tarafinda goremeyiz kullanmazsk

# 6- PORT belirleyelim. expressin ozelliklerini kullanabilmek icin bir degiskene atayalim expressi. ve listen ile PORT ve bir fonksiyon yazarak serveri dinleyelim.Ama bu butun kodlarin en sonunda olacak. npm run dev ile de serveri ayaga kaldiralim.

# 7- body-parseri da kullanalim.dokumantasyonundan bakip yazabilirsin.use li kisimlari getirip paste yapalim

# 8- PORT numarasi, veri tabani adresi , özel sifrelem istedigimiz dosyalari saklamak icin src ile ayni hizada ana klasorun icine .env dosyasi olusturup, terminalde npm i dotenv yazip kurulumunu yapalim. ve icerisine gizli tutmak istedigimiz, mesela burda PORT numarasini gizlemek istiyoruz onu yazip kullanacagimiz yerde karsilamamiz lazim. YAzarken ; , =in yanina bosluk falan birakmadan dumduz yazilir. import _ as dotenv from "dotenv" seklinde import ederiz.ilk dotenv yi baska isimde verebilirsin. _ dotenv icindeki herseyi cek demek ama bunu * olarak kullanamayacagim icin as dotenv diyerek *a bi isim verdik. ayarlamalari yapip sayfamda .env yi kullanabilmek icin dotenv.config() demeliyiz importlarin yanina. Ve artik PORTa bunu atayalim.process.env.PORT seklinde yazilir.burdaki PORT bizim .env de verdigimiz isim

# 9- simdi routers klasoru olusturup icerisine router olusturalim. yine expressi buraya da import edelim.ve express icindeki Routeri da bir degiskene atayarak özelliklerini kullanabileleim. ve baska yerlerde de kullanabilmek icin en sona export default yapalim. Istekleri burda atiyoruz.Mesela bir get istegi atalim.iki tane parametre istyr.1- yol 2- bir fonksiyon ve bu da req ve res diye iki tane parametre istiyor.Bunlar kullanicidan giden istek ve veri tabanindan giden cevap seklinde. ve res.send ile yazdiralim. Ve simdi bunu app.js de import edip kullanalim ki, ana klasor bu router sayfasini kullansin.kullanmak icin yine app.use icine yol(sonuna .js eklemeyi unutmayalim) ve islemi nerden cekecekse ki importta verdigimiz isim olacak bu onlari yaziyoruz

# postmande localhost:3000 yazip routerda yazdigimiz get istegini atabiliirz.

# 10- Data mizi olusturmamiz gerekir.bunun icinde kolaylik saglasin diye mongoose diye bir paket var. install edelim.dokumantasyonundan bakabiliriz nasil yapildigina da. once veri tabanindaki modellemeyii yapalim.yine src icine models klasoru acip icine de collection dosyasini olusturalim. Dosyayi Buyuk harfle olusturmak guzel. Önce mongoose i import edelim.icerisne mongoose ile bir schema olusturacagiz. new keywordu kullanilir ve mongoose un Schema fonksiyonunu kullaniyoruz ve bunun icine hangi fieldlerin olmasini istyrsan onlari yaziyorsun obje formatinda.type lari belirlenmeli ve required olup olmayacagi yazilir.olusturulma tarihi icin ise required degil kullnaicidan alinmali bunu da default:Date.now() ile yapariz. Bunu artik modellememiz lazim.once veri tababnindaki ismi icin bir degiskene atiyoruz.yine mongoose in model fonksiyonunu kullaniyorz.icerisine iki parametre aliyor.1- databasedeki collectionin ismi, 2- hangi schemayi collectiona cevirecek onun adi. Ve export edelim.

# 11- modeli olusturduk servera baglandi ama bir DAtabase e baglanmadi henuz.Bunun icin mongodb compassi aciyoruz ve veri tabanina baglantiyi sagliyoruz.veri tabani yolunu yine .env dosyasina yaziyoruz. ayni PORT gibi isim veriyoruz ve Compass daki ilk acilan localimizin adresini alip yapistiriyoruz ve sonuna da olusturmak istedigimiz database ismini yaziyoruz ve boylece baglanti saglanmis oluyor.Devaminda ise yine bikac parametre aliyor.

# 12- simdi .env de tanimaladigimiz database adresini app.js e cekelim.ayni PORT daki gibi islemleri yapiyoruz. ve mongoose i import edip, mongoose in connect fonksiyonunun icine de adresi atadigimiz degisken adini yazacagiz ve .then .catch ile de olumlu olumsuz durumlarini belirtelim.
# mongoDb normalde schema da olmayan verinin de yazilmasina ve database de gozukmesine olanak saglardi ama mongoose dan dolayi olmayani database de gostermez.fakat 200 OK durum kodunu da gosterir.

********** REGISTER ISLEMI(CREATE)

# 13- artik gercek bir kayit yapip baglanti saglayabilirz.postman den bir istek atmaliiyz ki compassda daha once isim verdigimiz ve .env de MongoURL in sonuna verdigimiz isimle database gelsin.Fakat bunun icin ilk once routes da bir post islemi yapmaliyiz.ve app.js de yolu da /users yapalim. yani userlarla islem yaptigimiz icin adresi o sekilde belirtelim ve routes da da post isleminde mesela /register yapalim.artik postmande aratirken localhost:3000 adresimizin sonuna /users/register demeliyiz. yani base adresimiz users ve nereye istek atacaksak onun adrsi olarak da register yaziyoruz. ve postmande modele yazdigimiz yapidaki createdAt haric digerlerine bir value atiyoruz. post isleminde ise service imizi yazmaliyiz.request ile sorguyu yapalim.body ile verileri cekecegiz.Ve kaydimizi yapabiliriz.try catch blogu icinde yazalim.catch de hatayi yazdirtalim.try da ise olumlu yanit kismini yazacagiz.

# 14-bunun icin; gelen verileri sayfamizda kaydetmek icin once userschema yi post islemi yaptigimiz routes sayfasina import edelim.sondaki .js yazmayi unutma. ve gelen verileri kaydetmek icin bu Users modeline.create() fonksiyonunu yazalim.bunun icine ise body ile cektigimiz veriyi verecegiz.boylece gidip collection icine kaydini yapacak.burda donen promise cevabini almakj icinbunu bir degsikene atayalim ve res.json ile de yazdiralim.postmande adrsin sonlarini /users/register diyerek duzelt ve post istegini yapalim.Ama bos gelir bu sekilde.bunun sebebi javascriptin calisma mantigi olan asynchron yapi ile alakali.istedigimiz seyleri sira ile almak icin synchron yapiya sokmaliyiz bunu async await ile.fonksiyonun basinba async,await ise nereyi bekletmek istiyorsak oraya yazariz.mongo compass da da bakalim.database ve collectioni olusturur ve postmande post yaptigimiz verinin geldigini goruyoruz.

# 15- veri tabani modelinde olmayan bir veriyi yazarsak bunu mongo.db nin esnekliginden kaynaklanan bir özellikle database yapisinda olmasa bile ekleyebilirdi ve postmande 200 OK status kodu(defaultu budur) verir ama bize bunu geri dondurmez.aslinda hata status kodu vermeliydi.bunu hocaya sor

# 16- eger databasede tanimli ama biz istek atarken eksik bir veri gonderirsek, catch icerisinde res.json arasina status(istedigin hata kodunu yaz) seklinde yazariz ve boylece hata kodunu dondurur.

# 17- birde distructur yaparak post isleminde bastan belirleyebiliriz body ye gidecek olanlari.burda iki satir bir kod yaziyoruz.ustte direkt req.body ye gelmesi gereken verileri distructor ile atayip.sonrada bir degiskene atayalim bunlari yine.

####  18- buraya kadar ne yaptik? paketleri yukledik, serveri ayaga kaldirdik, routes a basit bir get istegi attikki cevabin gelip gelmedigini gormus olduk. cevabi gordukten sonra veri tabanimizin modelini olusturduk.hangi modelin hangi yapida olacagini, özelliklerini belirledik.export default ile diger sayfalarda kullanima actik. database i olusturduktan sonra app.js de mongoose in connect fonksiyonu ile db ye baglantiyi sagladik.En nihayetinde register nislemi yaparak databaseimize basarili bir sekilde gercek bir kayit yaptik create fonksiyonu ile.  distructor özelligi ile de frontend tarafindan baska veriler gelirse kullanicidan, buna engel olmus olduk.boylece distructor yapisina ne yazdiysak onlar gelecek sadece


****************************************
+ 2. DERS
# 19-bcrypt paketi(sifreleme paketidir.) install edelim. passwordlari mesela gizlemek isteriz. cryptolama islemini modelimizde yapacagiz. servera istek geldiginde sunu kaydet diye, o kayit islemi olmadan once cryptolama yapilsin sonra kayit yapilsin isteriz. import et modele. simdi kodu yazalim.veritabanina kayit(save) olmadan once(pre) islem yap diyecegiz.bir fonksiyon ister pre. fonksiyonu disarida yazip burda atamasini yapalim.nasil yazilacagi da yine dokumantasyonunda var.orda tek tek yazip degiskene atamis biz tek satirda yazdik.ESM kismina bak. aciklamasini ise soyle yapabilirz; fonksiyonumuza sifreleyecegimiz password gelecek.return kisminda ise bcrypt.hashSync fonksiyonunu yaziyoruz.iceriisnde ise 3 tane parametresi var.1- sifreleyecegin sey, 2- hangi yontemle sifreleyeceksin.bcrypt.gentSaltSync(10) default degeri 10. 3- fonksiyon(sifreleme basarisizsa err, basarili ise hash) ve bu fonksiyonun icerisinde if kontrolu yapalim.err varsa throw ile err firlat. hata yoksa hash kismina pass i ata diyoruz. Ve artik bu fonksiyonu if kontrolu icinde atayabiliriz pre nin icine. eger bu yukaridaki password un ici dolu ise, bu passwordu hashlenmis olan pasworda dondur diyoruz.boylece shemanin icinde yaparak, modele atadik. once sifreledik ve bundan sonra(next)artik kayit islemi yapabilir.next diye bir callback fonksiyonu yaziyoruz ve sifreledikten sonra digerki adima gec demek bu. 
** serveri tekrar calistirip post islemi yaparsak passwordun sifreli geldigini gorecegiz.

--- password icin validation islemi
# 20- simdi kullanicidan gelen password ile sifrelenmis passwordu karsilastirsin.bir validation islemi yapalim. modellere disardan bir method eklenebiliyor .methods ile.ve bir isim yaz.bunu da function a esitle.bu fonksiyon bir parametre alacak.bu kullanicidan gelen data olack.sonra return ile kiyaslamayi yapalim.bcrypt in compare methodu var yani karsilastirma.icerisinde kullanicidan gelen data ve sifrelenmis password olacak.

*** LOGIN ISLEMI(CREATE)
# 21-  Ve bunu routes kisminda login yapilirken karsilastirmasini yazalim. yine post islemi olacak ve yola /login yazacagiz.

# 22- simdi login istegini olusturalim.önce kullanici varmi yokmu bakalim. yine distructor ile body den gelecek sorguda istedigin verileri yaz. veri tabani ile islem yaptigimiz icin butun fonksiyonlarimiz async await ile yazilmali. burda bu kullanici varmi yokmu sorgulayalim. Kullnaici varsa getirir yoksa hata dondurur. findOne methodu ile yaziyoruz ve mongodb ye ait fonksiyonlari calistirmak icin exec() fonksiyonunu sonuna ekliyoruz. ve res.json ile bu datayi yazdiralim.eger kullanici varsa dondurur, yoksa null der response olarak.ya da kendimiz bir mesaj ve status hata kodu yazabiliriz if icinde yoksa diyerek ve return diyelimki asagiya dogru kod devam etmesin.

# 23- simdi elimizde verimiz varsa, girilen passwordun gecerli olup olmadigini kontrole tabi tutalim.isValidate diyerek.girilen verilerden password datasini alalim.sonra bu gecerli degilse su hatayi ver diye yazalim return ile beraber.gecerli ise zaten asagiya gececek buraya hic girmeyecek.ustte username ile ilgili kontrolu yapmistik burd ada password ile ilgili olani yaptik. hata yoksa datayi dondurecek.

# 24- kullaniciya database deki butun verileri gondermek istemezsem eger,rotes icerisinde bir obje olusturup icerisinde data nin nelerini gondermek istioyrsan onlari yazarsin.ve res.json icine butun datayi degilde bu yeni olusturdugun objeyi yazdr. 

# 25- cok fazla service yazarsak bu gozu yoran bir durum olur.bunu daha kolay okunabilir hale getirmek icin; her istekdeki fonksiyonu bir degiskene atayip, router.post kisminda o degsikenin adini 2.parametreye veririz. hatta bunu modul yapisi ile baska sayfada yapip burda sadece routerlandirmayi yapariz.Bunun icin src altina service dosyasi olustur ve service islemlerini tasi.importlardan da model yapisini tasi service dosyasina. export et register ve login fonksiyonlarini ve router sayfasinda da import et. postmande de register ve login yap calisip calismadigina bak.


***** READ ISLEMI

# 26- veri tababnindaki verileri id ye gore getirirz.basic adresin sonuna id yazilir ve get islemi yapilir postmande ama once kodlari yazalim. Routes da router yi yazalim.get methodu olacak ve params ile id yi yazalim / sonuna./:id seklinde.ve icine fonksiyonu yazalim mesela find olsun bu fonksiyonun adi.ve service da bu fonksiyonu olusturup export edip tekrar routes da karsilayalim. Service de try catch blogu icinde hata mesaji ve status kodu yazalim.try icinde de bulduralim kullaniciyi.yine veri tabani ile islem yaptigimiz icin async await i kullanalim ve bir degiskene atayalim.once id icin paramsli sorguyu yapalim sonra da mongodb nin findOne methodunu kullanarak Users collection imizdan gelen bu yukaridaki id veri tabanindaki id ile eslesiyormu yu yazalim ve exec ile de mongodb nin findOne methodunun kullanmasina izin verelim. veri tabaninda id nasil tutuluyorsa oyle yaz. burda _id seklinde mesela. ve ayrica basarili status kodunu yazalim.

# 27- butun kullanicilari ceken bir senaryo yazalim.bunu findAll ile cekecegiz ve herhangibir kriteri olmadigi icin id de olmayacak.ayni islemleri routes ve service de yaz.

**** UPDATE ISLEMI(PATCH:parca kismi gunceller - PUT:butun veriyi gunceller)

# 28- update islemini ise patch istegi ile yapiyoruz.ayni sekilde routes da yolunu belirt, service de fonksiyonu yaz ve export et, routes da karsila ve patch icine yaz.bir tane veriyi guncelleyeceksek collectiondan, Users.updateOne diyoruz. mongodb den hatirladigimiza gore updateOne iki tane parametre alir ve ikiside bir obje.1- kiyaslama 2- degistirecegi deger.Kiyaslamayi frontend den gelen id ye gore olacak, o nedenle once butun kullanici bilgilerini isteyip, bir degsikene atayarak alalim. body ile gondermistik, yine body ile alalim. ve veritabanindaki id ile frontend tarafindan gelen id yi kiyaslayacak. Degistirecegi degeri ise;$set ile yapar ve frontend tarafindan gelen degeri update yapacak.   Postmande ise base adrwsin sonuna routesda yazdigimiz gibi /update yaziyoruz ve body kismindan veriler gelecek bize o yuzden istegi PATCH secip body yi ayarliyoruz.ve veri tabanindan guncellemek istedidgimiz veriyi bodyye tasiyip guncelleyelim.id nin _ sini de sil. ve send yaptigimizda acknowledged:true seklinde doner sonuc guncelledi ise.


***** DELETE islemi (DELETE)

# 29- routerda yola params seklinde id yapiyoruz.cunku silmeyi de id ye gore yapacak.fonksiyonu remove diye belirleyip karsiladik.service de de bu fonksiyonu olusturalim ve export edelim. id yi paramsla al ve degiskene ata. deleteOne icinde de yine veritabanindaki id ile frontendden gelen id yi kiyasla ayni get islemi gibi Postman de ise delete istegini secip, adresin sonuna id nosunu yazmaliyiz.  "acknowledged": true, "deletedCount": 1 seklinde donerse silmistir


***** aslinda router kisminda verilen get, put, patch,delete ismi degil aslinda onemli olan. onemli olan service de yazdigimiz http request kodu. ama tabiki ne yaptigimizi bilme adina uyumlu yazmak lazim.



************** 3.DERS

***** Jsonwebtoken(jwb) middelware araya kod yazma demek.

# 30- middelware frontendden gelen istegin servere gitmeden araya konulan kod parcaciklari demek.kendi olusturacagimiz bir fonksiyon olacak ve bu fonksiyona girdikten sonra login olma islemi basarili bir sekilde saglanacak.yoksa login islemi gerceklesmesin seklinde oluyor senaryo. basarili bir sekilde login olan kullanicilar butun verileri ceksin aksi halde cekemesin diyelim. Jsonwebtoken paketi kullanilir. kullanici tarafindan body, querystring veya params ile gelen http requestler ile backend arasina araya koydugumuz fonksiyonu kullanarak backend de islem yapiyoruz.jwt paketi ise, istedigimiz bilgileri vererek kendisi farkli sifreli bir kimlik olusturuyor.kullanicinin bir kimlige sahip olmasini istedigimiz durumlarda jwb yi kullaniriz.


# tarayicinin console kisminda Application kisminda bellekler var.burdakilerden istedigine token i kaydedersin ve frontend tarafindaki kisi burda token varmi yokmu diye kontrol edebilir ve surekli veri tabanina istek atmaktan kacinmis olursun.

# kullnaici basarili bir sekilde sisteme girince bana bir token versin ve ben bu token i tekrardan frontend tarafina gondereyim


# 31- install et once jsonwebtoken paketini.ve service kisminda import et. https://jwt.io/sitesinden bakabilirsin gidisata.sign diye bir imzalama methodu var.bu kullanicinin verdigi bilgiyi ve kendine ait sifreleme bilgisini ver sonra bunu sifreleyip bir token verir diyor. bu sifreli token i ise kimsenin gormemesi icin .env ye kaydederiz. simdi service de sign i kullanarak alalim bu sifreli tokeni.iki parametre istiyor sign.1- token etmek istedigin sey(burda ustte tanimladigimiz user i sifrelemek istyrz), 2-hangi sifreyi kullandin .env de onu.burda process.env ile yazariz env dosyasindaki sifrelenen degisken adini VE BUNU DA BIR DEGISKENE ATA. bunlarin hepsi login fonksiyonu icinde olacak.ve sonuctada res.json ile bu tokenladigimiz kullaniciyi ve tokeni yazdirmak isteriz.postmande ise login yolunda username ve passwordu girip post yaparsan sana kullaniciyi da tokeni da dondurur. asagidaki sekilde.
--- {
    "user": {
        "id": "6603713b6e949e7ffed8d805",
        "username": "esad",
        "name": "esad",
        "surname": "akc"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDM3MTNiNmU5NDllN2ZmZWQ4ZDgwNSIsInVzZXJuYW1lIjoiZXNhZCIsIm5hbWUiOiJlc2FkIiwic3VybmFtZSI6ImFrYyIsImlhdCI6MTcxMTg4MDA0Mn0.1ikFwRClavDDPEX53xA6wAw5ShyKsQxsok_NvguPpi8"
}

# simdi bu tokeni kopyalayip kendi sitesinden butun alana yapistirisan userini yan tarafta verir. https://jwt.io/ sitesinden. boylece tokenli verimizi bize geri vermis olur. boylece bunu storagelere veya cookies lere kaydedersek, orda bu token varmi yokmu diye kontrol edilince, yani sayfa refresh edilince verileri database den cekmeye gerek yok. ikincisi basarili bir sekilde login olunca, token uretecek, tokeni kaydedecegiz ama basarisiz olunca, browserda database adresinin sonuna findAll yazinca hata vermesi lazim ki verileri cekemezsin demeli. yoksa herkes verileri cekerdi login olan veya olmayan bu dogru degil.

# token i objenin disinda ayri bir sekilde vermis.bunu da obje icine surnaem altina yazmak istersek sprit operatoru ile yapariz. yani kodda user in onune ... koymaliyiz. ve token a da key atariz.

--- {
    "id": "6603713b6e949e7ffed8d805",
    "username": "esad",
    "name": "esad",
    "surname": "akc",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDM3MTNiNmU5NDllN2ZmZWQ4ZDgwNSIsInVzZXJuYW1lIjoiZXNhZCIsIm5hbWUiOiJlc2FkIiwic3VybmFtZSI6ImFrYyIsImlhdCI6MTcxMTg4MDg5MX0.kt69P_Y07QjNp8vOi9cy_0DqMgf359yyP0DtOxa8hcM"
}
   