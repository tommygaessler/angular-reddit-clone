(function() {

  'use strict'

  const app = angular.module('reddit-clone');

  app.controller('redditController', function() {









    this.posts = [
      {
        title: 'Apple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png',
        votes: 0,
        author: 'Steve Jobs',
        description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
        date_posted: 'fake date',
        total_comments: 1,
        comments: [
          {
            author: 'Tommy',
            comment: 'I love apple!'
          }
        ]
      }
    ];
  });

}());
