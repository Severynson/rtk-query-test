import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useGetUsersQuery } from "../redux";
import classes from "./RTKQueryTesting.module.css";

export interface user {
  id: number;
  name: string;
  age: number;
  job: string;
  isAlive: boolean;
  img: string;
  chosen: any;
}

const RTKQueryTesting = () => {
  const { button } = classes;
  const { data = [], isLoading } = useGetUsersQuery(null);
  const [killMenuOpen, setKillMenuOpen] = useState<null | number>(null);

  if (isLoading) return <h2>Is loading...</h2>;

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          paddingTop: 30,
          borderTop: "3px solid black",
        }}
      >
        Hover the mouse on profile to update it
      </h2>

      <div style={{ display: "grid", gap: 20 }}>
        {data.map(({ img, name, age, job, isAlive, id }: user) => {
          return (
            <div style={{ display: "flex" }}>
              <div
                key={id}
                style={{
                  display: "flex",
                  height: 200,
                  borderRadius: 15,
                  background: "#f1f1f1",
                  width: 500,
                  cursor: "pointer",
                }}
                onMouseOver={() => setKillMenuOpen(id)}
              >
                <img
                  style={{
                    height: 200,
                    width: 200,
                    borderRadius: 15,
                  }}
                  src={img}
                />
                <div
                  style={{
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <strong style={{ margin: 0 }}>Name: {name}</strong>
                  <h4 style={{ margin: 0 }}>Age: {age}</h4>
                  <h4 style={{ margin: 0 }}>Job: {job}</h4>
                  <h4 style={{ margin: 0, color: isAlive ? "green" : "red" }}>
                    Is still alive: {isAlive ? "Yup" : "No"}
                  </h4>
                </div>
              </div>

              {killMenuOpen === id && (
                <div
                  style={{
                    marginLeft: "20px",
                    display: "flex",
                    height: 200,
                    borderRadius: 15,
                    background: "#f1f1f1",
                    width: 500,
                    cursor: "pointer",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    overflow: "hidden",
                  }}
                >
                  <h3 style={{ padding: 20 }}>
                    Are you sure about you want to kick off this developer from
                    inoXoft?
                  </h3>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <button className={button}>Yes</button>
                    <button
                      className={button}
                      onClick={() => setKillMenuOpen(null)}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RTKQueryTesting;
