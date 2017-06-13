## SaySomething

This Simple node.js app allows a user to receive a compliment or criticism either written or with an emoji.

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

#### Node Modules
- npm `npm init`
- winston `npm install winston`
- mocha `npm install mocha --save-dev`
- chai `npm install chai --save-dev`
- sinon `npm install sinon --save-dev`
- nock `npm install nock --save-dev`

#### Usage
Fork this repo to your local machine, install Node and the listed node modules

  > ###### To Run - dockerized
  > * To run locally, ``sh run.sh "draw nice Tina"``
  > * To stop, `sh run.sh stop`

  > ###### To Run - npm stand alone
  > * To run locally, ``npm start write grumpy Tina``
  > * To stop, `npm stop`
  > * To test, `npm test`

##### Authors Note:
I wrote this simple app for use in the tutorials. It is supposed to be fun and not intended to offend anyone in anyway.
Please do not run this code and use the grumpy say_type if there is any chance you may be offended.

##### Contributing
This is an open source, your contributions are welcomed and encouraged.

- Fork this repository
- Add or update code (see Style-Guide)
- Add working tests
- Squash all working commits to a branch
- Submit a Pull Request of that branch

##### Style-Guide
Please follow this simple style-guide for all code contributions:

* Indent using spaces.
* camelCase all callables.
* Use semi-colons.
* Place a space after a conditional or function name, and its conditions/arguments. `function (...) {...}`
* Make sure to include comments
