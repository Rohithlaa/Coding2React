function PopData({ populationData, deleteRow }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {populationData.map((row) => (
          <tr key={row.Year}>
            <td>{row.Year}</td>
            <td>{row.Population}</td>
            <td>
              {" "}
              <button onClick={() => deleteRow(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PopData;
