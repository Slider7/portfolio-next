import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const works = [{
  path: `/static/img/neutron.jpg`,
  description: 'Шаблон веб-страницы почтового клиента, верстка с нуля из макета Photoshop.',
  link: 'https://slider7.github.io/neutron-mail/',
  github: 'https://github.com/Slider7/neutron-mail'
},
{
  path: `/static/img/nextphotos.jpg`,
  description: 'Интерфейс фотостока на основе API Unsplash, next.js.',
  link: 'https://next-photos.netlify.com/',
  github: 'https://github.com/Slider7/photos-next'
},
{
  path: `/static/img/valombard.jpg`,
  description: 'Сайт для небольшого ломбарда, Bootstrap.',
  link: 'https://slider7.github.io/VAlombard/',
  github: 'https://github.com/Slider7/valombard'
},
{
  path: `/static/img/piskel.jpg`,
  description: 'Клон веб приложения piskelApp, React.js',
  link: 'https://slider7.github.io/piskel-clone/',
  github: 'https://github.com/Slider7/piskel-clone'
},
{
  path: `/static/img/youtube.jpg`,
  description: 'Youtube-клиент для поиска и просмотра на основе Youtube API, vanilla JS.',
  link: 'https://slider7.github.io/youtube_client/',
  github: 'https://github.com/Slider7/youtube_client/'
},
];


const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <h1>Примеры работ</h1>
      <Gallery works={works} />
    </Layout>
  );

}

export default Portfolio;