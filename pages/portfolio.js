import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const works = [{
    path: `/static/img/neutron.jpg`,
    description: 'Шаблон веб-страницы почтового клиента, верстка с нуля из макета Photoshop.',
    link: 'https://slider7.github.io/neutron-mail/'
  },
  {
    path: `/static/img/nextphotos.jpg`,
    description: 'Интерфейс фотостока на основе API Unsplash, next.js.',
    link: 'https://next-photos.netlify.com/'
  },
  {
    path: `/static/img/valombard.jpg`,
    description: 'Сайт для небольшого ломбарда, Bootstrap.',
    link: 'https://slider7.github.io/VAlombard/'
  },
  {
    path: `/static/img/piskel.jpg`,
    description: 'Клон веб приложения piskelApp, React.js',
    link: 'https://slider7.github.io/piskel-clone/'
  },
  {
    path: `/static/img/youtube.jpg`,
    description: 'Youtube-клиентдля поиска и просмотра на основе Youtube API, vanilla JS.',
    link: 'https://slider7.github.io/youtube-client/'
  },
  {
    path: `/static/img/rss-chat.jpg`,
    description: 'Чат-клиент на основе websocket, React.js.',
    link: 'https://slider7.github.io/rss-chat'
  }
];


const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <h1>Portfolio</h1>
      <Gallery works={works} />
    </Layout>
  );
  
}

export default Portfolio;