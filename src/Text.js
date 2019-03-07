const text = "abdomen, Cheek, Skull, Fingers and toes, Thigh, Buttock, Great toe, lowest part of the spine,  below the false ribs, between the hips, Breast, Nose, Back of head, Chest, Breastbone, Navel, Belly, front of body, tongue side of teeth, cheek side of teeth, chin, breast bone, arm pit, Belly button, muscular part of upper arm where they sometimes give shots, inner arm, where they draw blood, frontal knee, foot, calf, heel, bottom of foot, dorsal, shoulder blades, above and between the gluteal muscles, rib, chest, ankle, elbow, ear region, Frontal lobe, Temporal lobe, Trapezius muscle, Cranial cavity, Anterior region of lower leg.";

function parseText(corpus) {
    return text.toLowerCase().split(' ');
}

function generateWordpairs(corpus) {
    var wordpairs = {};

    var words = parseText(corpus);

    for (var i = 0; i < words.length - 1; i++) {
      var currentWord = words[i];
      var nextWord = words[i+1];

      if (wordpairs[currentWord]) {
        wordpairs[currentWord].push(nextWord);
      } else {
        wordpairs[currentWord] = [nextWord];
      }
    }
    return wordpairs;
}
parseText();

function randomizer(wordArray) {
  var index = Math.floor(wordArray.length * Math.random());
  return wordArray[index];
}

function writeLine(corpus, minLength) {
    minLength = 70
    var words = parseText(corpus);
    var wordpairs = generateWordpairs(corpus);
    var word = randomizer(words);
    var phrase = [word]; // start the phrase
    while(wordpairs[word]) {
        var nextWord = wordpairs[word];
        word = randomizer(nextWord);
        phrase.push(word);

        if(phrase.length > minLength) {
            break;
        }
    }
    return phrase.join(' ');
}
writeLine()

function deploy(parseText, generateWordpairs, randomizer, writeLine) {
  return function(...args) {
    return parseText(args), generateWordpairs(args), randomizer(args), writeLine(args)
  }
}

const result = deploy(parseText, generateWordpairs, randomizer, writeLine)
module.exports = result
