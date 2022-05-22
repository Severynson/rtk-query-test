import { useGetUsersQuery } from "../redux";

interface user {
  id: number;
  name: string;
  age: number;
  job: string;
  isAlive: boolean;
  img: string;
}

const RTKQueryTesting = () => {
  const { data = [], isLoading } = useGetUsersQuery(null);

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
        RTK Query Testing:
      </h2>
      <div>
        {data.map((user: user) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                }}
                src={user?.img}
              />
              <div style={{ padding: 10 }}>
                <strong>Name: {user?.name}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RTKQueryTesting;
