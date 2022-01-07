const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、とても暑かった。 なので :insertx: は散歩に出かけた。 彼らが :inserty:へ行ったとき、彼らはしばらく恐ろしそうに見つめていた, そして :insertz:。 Bob は全てを目の当たりにしたが驚くことはなかった。そう、:insertx: の体重は300ポンドもあり、その日はとても暑かった。';
const insertX = ['ウィリー・ザ・ゴブリン', 'お父さん', 'サンタクロース'];
const insertY = ['炊き出し', 'ディズニーランド', 'ホワイトハウス'];
const insertZ = ['自発的に燃えた', '歩道の水溜りに溶けた', 'ナメクジになって這い去った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300/2.2046)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
