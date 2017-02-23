### Pivotal Tracker
[Pivotal](https://www.pivotaltracker.com/n/projects/1968195)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install ionic framework
```
npm install -g cordova ionic
```

### Installing

Fork and clone down the repository to your computer.

run in your terminal:

```
$ npm install && bower install.
```

## Running the application in browser

```
$ ionic serve --lab
```

## Upload to Ionic view application

Download _Ionic View_ from [Google Play](https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en) or [App Store](https://itunes.apple.com/us/app/ionic-view/id849930087?mt=8).

Sign in with credentials.

Go to your computers terminal and run:
```
$ ionic upload
```

Follow instructions in the terminal and your app will be uploaded to your ionic view application on your mobile device.

## How to add/delete/edit occupations

To add a new occupation you will need to navigate to ```www/js/services.js``` and add a new occupation to the  occupations: array in the default storage. Don't forget `,` after the previous hash `{}`. Fill in all necessary information needed.

This is the template: 
```
{
  id: null,             
  title: null,
  image: null,
  ingress: null,
  arbetsuppgifter: null,
  arbetsplatser: null,
  arbetstider: null, 
  inriktningar: null,
  loen: null,        
  rating: '★★★☆☆',   
  google: null,
  path_steps: null
 },
```

This is an example how it can look like (Note that 'inriktningar' is an array and is being displayed as bulletpoints)
```
    {
      id: 2,
      title: 'sjuksköterska',
      image: 'Sjuksköterska.png',
      ingress: 'Sjuksköterskornas arbetsuppgifter och arbetsplatser varierar...',
      arbetsuppgifter: 'Som sjuksköterska arbetar du med omvårdnad.....',
      arbetsplatser: 'Sjuksköterskor kan arbeta inom landsting...',
      arbetstider: null,
      inriktningar: ['Barnsjuksköterska', 'Akutsjuksköterska', 'Ambulanssjuksköterska'],
      loen: null,
      rating: '★★★★☆',
      google: 'https://www.google.se/#q=vad+g%C3%B6r+sjuksk%C3%B6terska%3F&*?',
      path_steps: 'Nurse(transparent).png'
    },
```
To add a new image, add the file to www/img folder in project and include just the name (as seen above) in the occupation object in the services.js file.

### Deleting Occupations
Delete the whole occupation hash `{ }`, or information inside hash `{ }` that is not necessary.

### Editing Occupations
Edit in occupation hash `{ }` by replacing information with other information.


## Built With
* [AngularJS](https://angularjs.org) - Framework for JavaScript
* [Ionic Framework](http://ionicframework.com) - Built with the mobile application framework Ionic
* [ionic-ion-tinder-cards-2](https://github.com/loringdodge/ionic-ion-tinder-cards-2) - Used for implementing the tinder cards functionality		    
* [ng-Storage](https://github.com/gsklee/ngStorage) - Used for saving data in local storage, including occupations as default.		    

## License		  
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
