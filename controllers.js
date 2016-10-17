(function() {

  'use strict'

  const app = angular.module('reddit-clone');

  app.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });

  app.controller('redditController', function() {

    this.sort = '-votes';

    this.post = function() {
      this.posts.push({
        title: this.title,
        image: this.image,
        votes: 0,
        author: this.author,
        description: this.description,
        date_posted: new Date(),
        total_comments: 0,
        comments: []
      });
    }

    this.postComment = function(post) {

      post.comments.push({
        author: this.name,
        comment: this.comment
      });

      this.name = '';
      this.comment = '';
    }

    this.upVote = function(post) {
      post.votes++;
    }

    this.downVote = function(post) {
      post.votes--;
    }







    this.posts = [
      {
        title: 'Apple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png',
        votes: 0,
        author: 'Steve Jobs',
        description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
        date_posted: new Date(),
        total_comments: 1,
        comments: [
          {
            author: 'Tommy',
            comment: 'I love apple!'
          }
        ]
      },
      {
        title: 'AAA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png',
        votes: 0,
        author: 'bob blah la',
        description: 'lorum',
        date_posted: new Date(),
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
