import Layout from '../components/Layout';

const Contacts = () => (
  <Layout title="Контакты">
    <h1>Контакты</h1>
    <ul>
      <li><span class="icon">&#9742;</span> <a href="tel:+7 777 7180029">+7 777 7180029</a></li>
      <li><span class="icon">&#9993;</span> <a href="mailto:kemalsh771@gmail.com">kemalsh771@gmail.com</a></li>
      <li><span class="icon"><strong>in</strong></span> <a href="https://www.linkedin.com/in/kemalkhan-shlembayev">kemalkhan-shlembayev</a></li>
      <li><span class="icon github"><strong>GitHub</strong></span> <a href="https://github.com/Slider7">Slider7</a></li>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        align-items: flex-start;
        margin: 0 auto;
        width: 310px;
        padding: 10px;
      }
      ul li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 310px;
      }
    `}</style>
  </Layout>
)
  

export default Contacts;