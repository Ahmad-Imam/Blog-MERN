import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      Post
      <img
        src="https://media.cnn.com/api/v1/images/stellar/prod/230520165534-03-john-cena-dwayne-johnson-wwe-2011.jpg?c=16x9&q=h_720,w_1280,c_fill"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Sports</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">2 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          magni ipsa eligendi voluptatem mollitia? Autem iure ex sunt aliquam ad
          rem alias modi, aperiam esse aut id mollitia sapiente officiis harum
          atque iste odit numquam natus velit reprehenderit officia nostrum!
          Quis, aspernatur vitae earum odit nam tempora debitis impedit non?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          consectetur nobis temporibus debitis delectus recusandae nisi laborum,
          velit distinctio, at, quia repudiandae explicabo error corrupti aut
          labore sed maxime ipsa id odio praesentium eos tenetur. Molestias
          nobis velit quam unde perspiciatis voluptates possimus labore quos
          incidunt. Assumenda voluptate odio enim! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eum rerum corrupti, quo quas labore
          maxime. Cum, aut. Laboriosam eaque sit pariatur. Aspernatur fugiat
          culpa numquam incidunt quas possimus quia reiciendis. Quasi et rerum,
          eaque vitae placeat, ratione cupiditate voluptates architecto illo
          perferendis sed repellat laudantium numquam quidem aperiam quos,
          labore ex asperiores nemo iusto necessitatibus ipsam dignissimos
          libero! Repudiandae voluptate assumenda odio harum dicta cumque hic
          quae. Voluptas voluptates incidunt adipisci! Voluptas aliquam,
          veritatis, illo ut soluta aperiam laborum laudantium hic quibusdam cum
          exercitationem pariatur recusandae, vitae repellat nihil itaque
          perferendis nam consequuntur! Voluptate ea rerum nihil quibusdam
          aliquam debitis.
        </p>
      </div>
    </div>
  );
}
