import React, { useState, useEffect } from 'react';
import './style.css';

const Home = () => {
  const [publisherList, setPublisherList] = useState([]);

  function fakeApiCall() {
    return {
      name: 'DAMA',
      link: '/directory/dama',
    };
  }

  useEffect(() => {
    const arr = Array.from({ length: 6 })
      .fill()
      .map((_) => fakeApiCall());

    setPublisherList(arr);
  }, []);

  return (
    <div className="container">
      <div className="text_intro">
        <h1>Procurando estágio?</h1>
        <br />
        <p>
          Bem-vindo ao MEACH Estágios. Aqui as entidades estudantis estarão
          sempre publicando as vagas mais relevantes para cada curso!
          <br />
          <br />
          Selecione a entidade que te representa:
        </p>
      </div>
      {publisherList.length > 0 && (
        <section className="featured_publishers">
          {publisherList.map((publisher, i) => (
            <div className="publisher">
              <a href={publisher.link}>{publisher.name}</a>
            </div>
          ))}
        </section>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        recusandae iusto, inventore eveniet molestias architecto perspiciatis
        repellat dolores id nihil mollitia magnam facilis veritatis doloremque
        ex quia, explicabo dolorum odit fugiat, repellendus esse at tempore ad
        libero? Facere quis ut adipisci eum ipsa rerum quos a voluptatibus
        consequatur delectus iure officia, voluptas quisquam beatae
        reprehenderit odit sint quibusdam alias accusamus tenetur doloribus aut
        voluptate odio necessitatibus! Dolore suscipit animi, eius maxime hic
        laudantium fugiat inventore dolor nulla dignissimos nobis consectetur
        recusandae harum aspernatur adipisci repellendus in sint ut quam neque!
        Sequi error quam dicta beatae repellat sed assumenda mollitia distinctio
        aliquam, dolore, maxime minus praesentium nostrum veniam ab impedit
        architecto laborum. Repellat quia eaque accusantium quis voluptas
        veritatis id. Ex similique obcaecati temporibus, vel nostrum totam
        beatae excepturi adipisci itaque ratione iste error, quidem quod
        eligendi qui quos deserunt voluptatem nulla! Deleniti exercitationem
        pariatur, numquam blanditiis aspernatur dicta suscipit expedita in vitae
        culpa recusandae voluptas, earum, perferendis distinctio nesciunt
        reiciendis obcaecati repudiandae enim sed labore vero consectetur
        praesentium soluta. Deserunt neque temporibus corporis consequatur
        quaerat quia sed, vitae sapiente ad porro officia vel, minus pariatur
        dicta incidunt assumenda facilis saepe iste tempore impedit aliquid amet
        labore nulla laboriosam. Quae, recusandae.
      </p>
    </div>
  );
};

export default Home;
