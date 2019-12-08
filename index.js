// Bir uygulama geliştirmek isyitoruz bu uygulama brden çok pakete ihyiaç duyabilir.
// npm init diyerek package.json ı npm oluşturmasını sağlarız

// npm run yilmaz yazdık package.json için de yılmazı arar ordakı kodu termınalde çalıştırır.

// Mesela projemizde birden çok npm modul var. Biz package-lock.json silsek bile terminale npm install yazarsak projede kullanılan tum modullerı bize indirir. Package.json daki dependencies amacı budur.

// Yani aslında biz projeyi github'a atacaksak node moduls u atmaya gerek yok.

// Mesela bir module sadece geliştirme ortamında ihtiyaç var. O zaman şu şekilde indirebiliriz. npm install webpack-cli --save-dev

// Buda package.json da devDependencies bölümünde tutulur.
console.log("Bu benim uygulamam");