import React from "react";
import "./style.css";
import { ListItem } from "../List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Book = ({
  title,
  authors,
  link,
  description,
  image,
  Button

}) => {
  const truncateText = (str, length, ending) => {
    if (str) {
      if (length == null) {
        length = 140;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
    return str;
  };

  const truncateDescription = truncateText(description, 300, "...");

  return (
    <ListItem>
      <div className="media-div">
        <article className="media">
          <figure className="media-left">
            <img className="image is-128xauto" src={image} alt={title} size="200xauto"/>
          </figure>
          <div className="media-content">
            <h3 className="heading-title">{title}</h3>
            <p className="heading-subtitle">by {authors}</p>
            <p className="p-article">{truncateDescription}</p>
              <div className="btn-div">
                <a
                  href={link}
                  className="btn save-btn heading-subtitle ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
               <Button />
              </div>
          </div>
        </article>
      </div>
    </ListItem>
  );
};

export default Book;