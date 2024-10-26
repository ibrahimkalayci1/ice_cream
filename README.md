# Kütüphaneler

-json-server
-bootstrap
-axios@^0.27.2
-@testing-library/user-event@14.0

# selector   seçici
-test içerisind jsx elementlerini çağırmaya yarayan methodlardır
-screen nesnesi ile kullanlr

# HTML ELEMENTLERİNİN  ROLLERİ
-her html elementinin kendini temsil eden bir rolü vardır. bu rol ismi bazen etiket ismi ile aynı (button un rolü buton) bazen de faarklı olur

# MATCHERS KONTROLCÜLER
-expect komutu ile birlikte kullanılan ve bir element veya  değişken üzerindeki beklentimizi kontrol eden metodlardr. rengi kırmızı, checkbox tikli, buton aktif

# TEST GELİŞTİRME SÜRECİ

## TDD (TEST DRİVEN DEVELOPMENT)
-önce tesler yazılır sonra işlevler /bileşenler kodlanır
-red to green
-Artısı testler yük olarak gelmez test yazmak geliştirme sürecinin bir parçası oluyor. testleri yazareknen dinamik yapının bir algoritmasını oluşturdgmz için işlevi daha hızlı kodluyrz

## BDD (BEHAVİOUR DRİVEN DEVELOPMENT)
-önce işlev/bileşen kodlanr sonra testler yapılır

## FİRE EVENT
-rtl içerisinde gelen olay tetiklemek için kullandgmz method.
- gercek kullanıcıdan uzak tepkiler verdiği için yerini UserEvent a bıraktı.
-Tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden gerçekleştği için testlerde tutarsızlıklara ve beklenmedik sonuçlara sebep olablyr

# UserEvent
fire event in gelişmiş versiyonu
tetikledgmz olaylar fire event gibi doğrudan tetiklenmesinin yerine gercek bir kullanıcı simule ederek belirli birvgecikmeden sonra tetklnr
kullanmı için user event kütüphanesi kurulmaldr
async calstgı için async await ile kullanlr

## mock 

- unit testlerde "mock" kullanımı, bir fonksiyonun veya nesnenin  belirli bir kısmını izole ederek test etmeye yarar. Özellikle dış bağımlılıkları olan fonksiyonları test etmek için kullanılır. Bu sayede gerçek sistem bileşenlerine bağımlı olmadan sadece test edilmek istenen kodun doğru çalışıp çalışmadığı kontrol edilir.

-dışa bağımlılıkları izole ederiz

-fonksiyonlar çgrldımı kontrolu yapmamızı sağlar

-fonksiyonlara gönderilen parametreleri kontrol edebilir

## 100% test coverage# ice_cream
