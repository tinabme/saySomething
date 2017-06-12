## SaySomething

This Simple node.js app allows a user to receive a compliment or criticism either written or with an emoji.

##### dockerized
To run locally, ``sh run.sh "draw nice Tina"``
To stop, `sh run.sh stop`

##### npm stand alone
To run locally, ``npm start write grumpy Tina``
To stop, `npm stop`
To test, `npm test`


#### Required parameters
  - print_mode: How you would like the compliment to criticism presented (write/draw)
  - say_type: The type of compliment or criticism (nice/grumpy)
  - say_name: The name of the person that will be complimented or criticised

```js
{
  print_mode: draw,
  say_type: nice,
  say_name: tina
}
```

##### To Note:
I wrote this simple app for use in the tutorials. It is supposed to be fun and not intended to offend anyone in anyway.
Please do not run this code and use the grumpy say_type if there is any chance you may be offended.

