import React, { useState } from "react";
import {
  CloseOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./Select.css";

export default function Select({ data, typeObject }) {
  console.log(data);

  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [Selecting, setSelecting] = useState(false);

  return (
    <div>
      <div>
        {" "}
        {searching ? (
          <div className="contactsTop contactsSearch">
            {!Selecting && (
              <input
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
            <CloseOutlined
              onClick={() => {
                setSearching(false);
                setSearchQuery("");
                setSelecting(false);
              }}
            />
          </div>
        ) : (
          <div
            className="contactsTop"
            style={{ justifyContent: "space-between" }}
          >
            {typeObject ? data[0].title : data[0]}
            <span>
              <SearchOutlined onClick={() => setSearching(true)} />
              <UnorderedListOutlined
                onClick={() => setSelecting(true) || setSearching(true)}
              />
            </span>
          </div>
        )}
      </div>

      <div>
        {typeObject
          ? searching &&
            data
              .filter((contact) =>
                contact.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((res, index) => (
                <div>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {Selecting && <input type="radio"></input>}
                    <h1>{res.title}</h1>
                  </span>
                </div>
              ))
          : searching &&
            data
              .filter((contact) =>
                contact.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((res, index) => (
                <div>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {Selecting && <input type="radio"></input>}
                    <h1>{res}</h1>
                  </span>
                </div>
              ))}

        {Selecting && (
          <div>
            <button>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}
