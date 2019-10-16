const Gallery = ({ works }) => (
  <div className="gallery">
    {works.map(work => {
      return (
        <div className="portfolio-item" key={work.path}>
          <img src={work.path} />
          <div className='info'>
            <p>{work.description}</p>
            <div>
              <a className='link-btn' href= {work.link} target='_blank'>Просмотреть</a>
              <a className='link-btn' href= {work.github} target='_blank'>GitHub</a>
            </div>
          </div>
        </div>
      );
    })}

    <style jsx>{`
      .gallery {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        max-width: 1240px;
        min-width: 330px;
        margin: 0px auto;
      }
      .gallery .portfolio-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
        box-shadow: 0px 0px 7px 1px grey;
        border: 1px solid grey;
        width: 80%;
        height: 300px;
        margin-top: 20px;
      }
      .portfolio-item img{
        width: 40%;
      }
      .portfolio-item .info{
        width: 55%;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .link-btn{
        border: 1px solid grey;
        display: inline-block;
        width: 150px;
      }
      .link-btn:nth-child(2){
        margin-left: 40px;
      }
      .link-btn:hover{
        background: dodgerblue;
        color: white;
      }
      
      @media (max-width: 845px) {
        .gallery .portfolio-item {
          width: auto;
          height: 250px;
          padding: 10px 20px;
          font-size: 1rem;
        }
        .portfolio-item .info .link-btn{
          margin-left: 5px;
          width: 120px;
        }
      }
    `}</style>
  </div>
);

export default Gallery;