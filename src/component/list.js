import React from "react";

/**
 *
 * heading - Tua de cua lua chon - string
 * data - Selections - { id: number; url: string }[]
 * @returns
 */
export const List = ({ heading, data, selected, onChange }) => {
  return (
    <div className="list-container">
      <h2 className="list-title">{heading}</h2>
      <div>
        <ul className="list">
          {data.map((item, index) => {
            console.log(index, "1111");
            return (
              <li>
                <img
                  className={index === selected ? "imageAvatar" : ``}
                  onClick={() => {
                    onChange(index);
                  }}
                  src={item.url}
                  alt=""
                  height="60px"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
