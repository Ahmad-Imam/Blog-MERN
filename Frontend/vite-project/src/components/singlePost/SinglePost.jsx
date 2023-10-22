import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/230520165534-03-john-cena-dwayne-johnson-wwe-2011.jpg?c=16x9&q=h_720,w_1280,c_fill"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Dwayne</b>
          </span>
          <span className="singlePostDate">2 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore
          libero distinctio, alias officia, adipisci quaerat ducimus placeat rem
          et accusantium provident ipsa aperiam reiciendis ullam fugiat
          blanditiis sit nisi labore consequuntur eaque nulla? Iure pariatur
          nihil odit maxime tempore deleniti doloremque nesciunt rerum illum
          odio, laboriosam, placeat recusandae deserunt! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Ipsa totam magnam nulla nesciunt
          voluptates sint cum facilis quasi deleniti, optio beatae, nam
          architecto unde eveniet iure eius veritatis? Praesentium, tempora iste
          fugiat natus eaque doloribus neque commodi quos corrupti modi numquam
          sed, ducimus repellendus nobis temporibus rem odio quisquam facilis
          placeat. Quod laudantium tempore optio quisquam neque expedita debitis
          reiciendis, obcaecati aliquam architecto placeat exercitationem
          repudiandae non ea natus iure quos numquam ducimus nam? Maxime
          perferendis doloremque voluptas, aperiam recusandae, illo voluptate
          sit incidunt doloribus nesciunt delectus velit, praesentium fuga
          expedita magni? Laboriosam perferendis maiores non numquam. Inventore,
          maiores sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis tempore libero distinctio, alias officia, adipisci quaerat
          ducimus placeat rem et accusantium provident ipsa aperiam reiciendis
          ullam fugiat blanditiis sit nisi labore consequuntur eaque nulla? Iure
          pariatur nihil odit maxime tempore deleniti doloremque nesciunt rerum
          illum odio, laboriosam, placeat recusandae deserunt! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Ipsa totam magnam nulla
          nesciunt voluptates sint cum facilis quasi deleniti, optio beatae, nam
          architecto unde eveniet iure eius veritatis? Praesentium, tempora iste
          fugiat natus eaque doloribus neque commodi quos corrupti modi numquam
          sed, ducimus repellendus nobis temporibus rem odio quisquam facilis
          placeat. Quod laudantium tempore optio quisquam neque expedita debitis
          reiciendis, obcaecati aliquam architecto placeat exercitationem
          repudiandae non ea natus iure quos numquam ducimus nam? Maxime
          perferendis doloremque voluptas, aperiam recusandae, illo voluptate
          sit incidunt doloribus nesciunt delectus velit, praesentium fuga
          expedita magni? Laboriosam perferendis maiores non numquam. Inventore,
          maiores sapiente!
        </p>
      </div>
    </div>
  );
}
