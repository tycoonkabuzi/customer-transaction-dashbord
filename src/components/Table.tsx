import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Table = () => {
  const [data, setData] = useState();

  const { theme, changeTheme } = useTheme();

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

  const sortByCustomerName = (e) => {
    const value = e.target.value;
    const filteredData = data.filter((element) =>
      element.name.toLowerCase().includes(value)
    );
    setData(filteredData);
  };

  console.log(theme);
  return (
    <div className={`main ${theme === true ? "mainChange" : ""}`}>
      <h1>Customer Transaction Dashboard</h1>
      <button onClick={changeTheme}>Change Theme</button>
      <div className="search">
        <label htmlFor="">Filter by city: </label>
        <input type="text" />
        <label htmlFor="">Sort alphabetically by name: </label>
        <input type="text" onChange={sortByCustomerName} />
      </div>

      <table>
        <tr>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>City</th>
          <th>Transaction Amount</th>
        </tr>
        {data?.map((singleData, index) => (
          <tr key={index}>
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
