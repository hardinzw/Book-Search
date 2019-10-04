import React from "react";
import "./style.css";
import { ListItem } from "../List";

const Book = ({
  title,
  authors,
  link,
  description,
  image,

}) => {
  return (
    <ListItem>
      <div className="media-snippet">
        <article className="media">
          <figure className="media-left">
            <p>
              <img className="image is-128xauto" src={image} alt={title} />
            </p>
          </figure>
          <div className="media-content">
            <h3 className="heading-title">{title}</h3>
            <p className="heading-subtitle">by {authors} (Author)</p>
            <p className="p-article">{description}</p>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <a
                  href={link}
                  className="btn view-button heading-subtitle ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
              <div className="p-2 bd-highlight">
              </div>
            </div>
          </div>
        </article>
      </div>
    </ListItem>
  );
};

export default Book;