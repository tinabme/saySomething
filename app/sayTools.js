const validate  = require('../util/validation');
const logger = require('../util/log');

const grumpyDraw  = [' ╯‵Д′)╯彡┻━┻ ', ' 凸(`д´)凸 ', ' ┌∩┐(◕_◕)┌∩┐ ', ' ᕦ(ò_óˇ)ᕤ ', '（ಠ益ಠ´) ', ' (ง •̀_•́)ง ', ' (⋋▂⋌) ', ' (ง •̀_•́)ง ', ' ╯‵Д′)╯彡┻━┻ ',' ╯‵Д′)╯彡┻━┻ ', ' 凸(`д´)凸 ', ' ┌∩┐(◕_◕)┌∩┐ ', ' ᕦ(ò_óˇ)ᕤ ', '（ಠ益ಠ´) ', ' (ง •̀_•́)ง ', ' (⋋▂⋌) ', ' (ง •̀_•́)ง ', ' ╯‵Д′)╯彡┻━┻ '];
const niceDraw    = [' (▰˘◡˘▰) ', ' ✌.ʕʘ‿ʘʔ.✌ ', ' ((≡^⚲͜^≡)) ', ' ヽ(•‿•)ノ ', ' ヽ(ヅ)ノ ', ' ლ(╹◡╹ლ) ', ' (๑‵●‿●‵๑) ', ' ლ(╹◡╹ლ) ', ' ✌.ʕʘ‿ʘʔ.✌ ', ' (▰˘◡˘▰) ', ' ✌.ʕʘ‿ʘʔ.✌ ', ' ((≡^⚲͜^≡)) ', ' (˶◕‿◕˶✿) ', ' ヽ(ヅ)ノ ', ' ლ(╹◡╹ლ) ', ' (๑‵●‿●‵๑) ', ' ლ(╹◡╹ლ) ', ' ✌.ʕʘ‿ʘʔ.✌ '];
const grumpyWrite = [
  'If ignorance is bliss, then you ___ must be the happiest person on earth.',
  '___, I am jealous of all the people that havent met you!',
  'Calling you an idiot ___,  would be an insult to all stupid people.',
  'How many times do I have to flush before you go away? Go Away ___!',
  '___ are you always this stupid or is today a special occasion?',
  'You have the face of a saint ___ ... Saint Bernard, that is,',
  '___, if I told you that I have a piece of dirt in my eye, would you move?',
  'You so dumb ___, you think Cheerios are doughnut seeds.',
  'Keep talking ___, someday youll say something intelligent!',
  'If ignorance is bliss, then you ___ must be the happiest person on earth.',
  '___, I am jealous of all the people that havent met you!',
  'Calling you an idiot ___,  would be an insult to all stupid people.',
  'How many times do I have to flush before you go away? Go Away ___!',
  '___ are you always this stupid or is today a special occasion?',
  'You have the face of a saint ___ ... Saint Bernard, that is,',
  '___, if I told you that I have a piece of dirt in my eye, would you move?',
  'You so dumb ___, you think Cheerios are doughnut seeds.',
  'Keep talking ___, someday youll say something intelligent!'];
const niceWrite   = [
  '___ I bet you make babies smile.',
  'You are like sunshine on a rainy day ___.',
  'Everything would be better if more people were like you!',
  'You know that thing you dont like about yourself ___, is what makes you so interesting.',
  'You ___, could survive a Zombie apocalypse.',
  '___ you bring out the best in the rest of us.',
  'Youre smarter than Google and Mary Poppins combined, ___.',
  '___ ,you are not someone I want to pretend to not see in public.',
  'You are like a corner piece of a puzzle. Without you ___, I am completely lost.',
  '___ I bet you make babies smile.',
  'You are like sunshine on a rainy day ___.',
  'Everything would be better if more people were like you!',
  'You know that thing you dont like about yourself ___, is what makes you so interesting.',
  'You ___, could survive a Zombie apocalypse.',
  '___ you bring out the best in the rest of us.',
  'Youre smarter than Google and Mary Poppins combined, ___.',
  '___ ,you are not someone I want to pretend to not see in public.',
  'You are like a corner piece of a puzzle. Without you ___, I am completely lost.'];

const place = Math.floor((Math.random() * 18) + 1);

const drawIt = (args) => {
  switch (args[1]) {
    case 'grumpy':
      logger.info(`     ${grumpyDraw[place]}     `);
      break;
    case 'nice':
      logger.info(`     ${niceDraw[place]}     `);
      break;
    default:
      logger.error(`The action ${args[0]} provided is not in our action list`);
      break;
  }
};

const writeIt = (args) => {
  if (validate.sendRequest(args)) {
    switch (args[1]) {
      case 'grumpy':
        logger.info(grumpyWrite[place].split('___').join(args[2]));
        break;
      case 'nice':
        logger.info(niceWrite[place].split('___').join(args[2]));
        break;
      default:
        logger.info(niceWrite[place].split('___').join('my friend'));
        break;
    }
  }
};

module.exports = {writeIt, drawIt};
