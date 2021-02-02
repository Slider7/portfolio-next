import Layout from '../components/Layout';

const Homepage = () => (
  <Layout>
    <h2>Добро пожаловать!</h2>
    <div className="about-text">
      <img src="/static/img/slider.jpg" />
      <p>
        <em>Меня зовут Кемалхан Шлембаев.</em> <br />
        Я - IT-специалист и разработчик-самоучка.
        Мне нравится программировать и учиться.
        Веб-разработка дает мне возможность самосовершенствоваться и постоянно расти в навыках.
        Цель - расти профессионально, создавая что-то полезное.
      </p>
      <p>
        13 лет в ИТ-сервисе - help-desk/техподдержка, локальные сети, системное администрирование.
      </p>
      <p>
        <em>Опыт программирования</em> - JavaScript, Object Pascal(Delphi), SQL/PL-SQL - реляционные СУБД (Interbase, MySQL, Oracle), знаком с Kotlin и Android Studio(retrofit, viewmodel).
      </p>

      <h4>Сертификаты:</h4>
      <ul>
        <li><a href="#">2020 Kolesa Upgrade Android-разработка</a></li>
        <li><a href="https://app.rs.school/certificate/92mvcp5l">2019 Rolling Scopes 2019 Q1 (JavaScript)</a></li>
        <li><a href="https://www.freecodecamp.org/certification/slider7/javascript-algorithms-and-data-structures">2018 freeCodeCamp JavaScript Algorithms and Data Structures</a>  </li>
        <li><a href="https://www.freecodecamp.org/certification/slider7/legacy-front-end">2016 freeCodeCamp Front End Development legacy certification</a></li>
      </ul>
      <a href="static/doc/Resume-Шлембаев-Кемалхан.pdf" download>Скачать резюме</a>
    </div>
    <style jsx>{`
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: justify;
        max-width: 800px;
        margin: 30px auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        width: 200px;
        border-radius: 50%;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;