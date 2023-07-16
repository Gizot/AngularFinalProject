
**WISECAT BLOGG APP**

Bu uygulama temel olarak basit bir Blog sitesi olarak tasarlanmıştır. 

1.User - Post- Category ve Comment olmak üzere 4  ana  modül, 2 bağımsız componentten oluşmaktadır.  oluşmaktadır, bu modüllere ait componentler aşağıdaki gibi düzenlenmiştir.
#### User module : 
*user-create component
*user-list component
#### Post module:
*post-add component
*post-detail component
*post-list component
#### Remark module:
*remark-add component
*remark-detail component
*remark-list component
#### User module:
*user create component
*user-list component
##### Button component
##### Navbar Component
##### Home component

Uygulama basit şekilde kullanıcı ekleme silme, kullanıcının ulaşabileceği post-list, comment-list, category-list sayfalarından ve her bir sayfada butonlarla verilen yönlendirmeler sayesinde gerçekleştirebileceği ekle sil düzenle işlemlerini kapsamaktadır. ayrıca tüm bu ana bileşenlerin detaylarına bakılabilmektedir.
## Dipnot: Eğer bir kullanıcıyı silmek isteyip silemiyorysanız muhttemelen bir gönderisi veya yorumu vardır!

Bu UYGULAMA Angular CLI 16.0.1 ile geliştirilmiştir.

Uygulamayı indirdiğinizde VSC 'da terminal'i açarak "ng-serve komutunu yazarak uygulamayı çalıştırabilirsiniz.

Bu işlemi gerçekleştirdiğinizde uygulama tarayıcınızda http://localhost:4200/ adresine gittiğinizde otomatik olarak görüntülenecektir. 

Uygulama kodlarında yapacağınız herhangi bir değişiklik eşzamanlı olarak tarayıcınızın ilgili sayfasına yansıyacaktır.

## Kısayollar hakkında
* Eğer uygulamayı geliştirmek isterseniz :
modül eklemek için "ng g m name"
component eklemek için "ng g c name" 
servis eklemek için "ng g s name"
interface eklemek için "ng g i name" kodlarını kullanabilirsiniz.
statik dosya eklemek isterseniz ../assest içerisine eklemeniz gerekmektedir.




# BlogAppNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
