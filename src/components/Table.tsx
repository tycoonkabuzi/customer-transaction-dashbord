import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        setData(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="main">
      <h1>Customer Transaction Dashboard</h1>
      <table>
        <tr>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>City</th>
          <th>Transaction Amount</th>
        </tr>
        {data?.map((singleData) => (
          <tr>
            <td>{singleData.name}</td>
            <td>{singleData.email}</td>
            <td>{singleData.company.name}</td>
            <td>{singleData.address.city}</td>
            <td>120 000</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
