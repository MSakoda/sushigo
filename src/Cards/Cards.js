import Card from './Card/Card';

const card_types = [
    {
      name: 'tempura',
        img_url: 'https://image.freepik.com/free-vector/cute-happy-funny-tempura-shrimp-chopsticks-soy-sauce-cartoon-character-illustration-icon-design-isolated_92289-1152.jpg',
        bg_color: '#e4b1e4',
        value_text: 'x2=5'
    },
    {
        name: 'dumpling',
        img_url: 'https://i.pinimg.com/736x/1d/32/b0/1d32b049171582a7054e2281834d79d5.jpg',
        bg_color: 'lightblue',
        value_text: '1 3 6 10 15'
    },
    {
        name: 'wasabi',
        img_url: 'https://image.shutterstock.com/image-vector/wasabi-character-design-vector-on-260nw-1510259828.jpg',
        bg_color: '#ffdd60',
        value_text: 'x2=5'
    },
    {
        name: 'egg nigiri',
        img_url: 'https://previews.123rf.com/images/woters/woters1706/woters170600096/81149017-tasty-nigiri-tamago-sushi-with-japanese-egg-omelette-sesame-and-seaweed-nori-ribbon-vector-illustrat.jpg',
        bg_color: '#ffdd60',
        value_text: '1'
    },
    {
        name: 'salmon nigiri',
        img_url: 'https://ih1.redbubble.net/image.916685307.4094/flat,750x1000,075,f.jpg',
        bg_color: '#ffdd60',
        value_text: '2'
    },
    {
        name: 'squid nigiri',
        img_url: 'https://thumbs.dreamstime.com/b/tako-nigiri-squid-sushi-white-japanese-cuisine-illustration-fresh-isolated-background-50689079.jpg',
        bg_color: '#ffdd60',
        value_text: '3'
    },
    {
        name: 'pudding',
        img_url: 'https://image.freepik.com/free-vector/cute-pudding-with-strawberry-whip-cream-dessert-cartoon-hand-drawn-style_42349-501.jpg',
        bg_color: 'pink',
        value_pudding: {
          line1: 'END',
          line2: 'MOST 6',
          line3: 'LEAST -6'
        }
    },
    {
        name: 'sashimi',
        img_url: 'https://mpng.subpng.com/20190424/kpo/kisspng-sashimi-japanese-cuisine-clip-art-sushi-yukhoe-5cc0fd5e311f27.7798505215561516462012.jpg',
        bg_color: 'lightgreen',
        value_text: 'x3=10'
    },
    {
        name: 'maki',
        img_url: 'https://previews.123rf.com/images/kakigori/kakigori1707/kakigori170700058/82834396-illustration-of-japanese-food-of-salmon-sushi-maki.jpg',
        bg_color: 'salmon',
        value_text: 'MOST: 6/3'
    }
]

function Cards() {


  function onClick(card) {
      console.log("clicked:",card)
  }
  return (
    <div>
      { card_types.map((card,idx) => <Card key={card.name} click={onClick} card={card} />)}
    </div>
  )
}

export default Cards;
