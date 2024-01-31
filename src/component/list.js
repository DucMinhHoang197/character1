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
            // console.log(index, "1111");
            // console.log(data, "data");
            return (
              <li>
                <div style={{ border: " 2px dotted #1C6EA4" }}>
                  <img
                    className={index === selected - 1 ? "imageAvatar" : ``}
                    onClick={() => {
                      onChange(index + 1);
                    }}
                    src={item.url}
                    alt=""
                    height="60px"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
