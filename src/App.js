import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';

const cards = [
    {
        name: 'tempura',
        img_url: 'https://image.freepik.com/free-vector/cute-happy-funny-tempura-shrimp-chopsticks-soy-sauce-cartoon-character-illustration-icon-design-isolated_92289-1152.jpg',
        bg_color: '#e4b1e4'
    },
    {
        name: 'dumpling',
        img_url: 'https://i.pinimg.com/736x/1d/32/b0/1d32b049171582a7054e2281834d79d5.jpg',
        bg_color: 'lightblue'
    },
    {
        name: 'egg nigiri',
        img_url: 'https://previews.123rf.com/images/woters/woters1706/woters170600096/81149017-tasty-nigiri-tamago-sushi-with-japanese-egg-omelette-sesame-and-seaweed-nori-ribbon-vector-illustrat.jpg',
        bg_color: '#ffdd60'
    },
    {
        name: 'squid nigiri',
        img_url: 'https://thumbs.dreamstime.com/b/tako-nigiri-squid-sushi-white-japanese-cuisine-illustration-fresh-isolated-background-50689079.jpg',
        bg_color: '#ffdd60'
    },
    {
        name: 'salmon nigiri',
        img_url: 'https://ih1.redbubble.net/image.916685307.4094/flat,750x1000,075,f.jpg',
        bg_color: '#ffdd60'
    },
    {
        name: 'pudding',
        img_url: 'https://image.freepik.com/free-vector/cute-pudding-with-strawberry-whip-cream-dessert-cartoon-hand-drawn-style_42349-501.jpg',
        bg_color: 'pink'
    },
    {
        name: 'sashimi',
        img_url: 'https://mpng.subpng.com/20190424/kpo/kisspng-sashimi-japanese-cuisine-clip-art-sushi-yukhoe-5cc0fd5e311f27.7798505215561516462012.jpg',
        bg_color: 'lightgreen'
    },
    {
        name: 'maki',
        img_url: 'https://previews.123rf.com/images/kakigori/kakigori1707/kakigori170700058/82834396-illustration-of-japanese-food-of-salmon-sushi-maki.jpg',
        bg_color: 'salmon'
    },
    {
        name: 'wasabi',
        img_url: 'https://image.shutterstock.com/image-vector/wasabi-character-design-vector-on-260nw-1510259828.jpg',
        bg_color: 'forestgreen'
    }
]

function onClick(card) {
    console.log("clicked:",card)
}

function App() {
  return (
    <div className="App">
      <p>Sushi Go!!!</p>
      { cards.map((card,idx) => <Card key={card.title} click={onClick(card)} card={card} />)}
    </div>
  );
}

export default App;
