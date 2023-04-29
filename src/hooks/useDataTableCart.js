export const useDataTableCart = () => {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
    },

    {
      field: "category",
      headerName: "Categoria",
      flex: 0.5,
    },
    {
      field: "count",
      headerName: "Cantidad",
      flex: 0,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 100,
    },
  ];

  return {
    columns,
  };
};
