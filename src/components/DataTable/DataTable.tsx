import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },
  {
    field: 'make',
    headerName: 'Make',
    width: 150,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Year',
    type: 'number',
    width: 110,
    editable: true,
  }
  
];

const rows = [
  { id: 1, make: 'Honda', model: 'Accord', year: 2018 },
  { id: 2, make: 'BMW', model: '128T1', year: 2021 },
  { id: 3, make: 'Ferarri', model: 'F8', year: 2020 },
  { id: 4, make: 'Toyota', model: 'Camry', year: 2022 },
  { id: 5, make: 'Infinity', model: 'QX50', year: 2022 },
  { id: 6, make: 'Ford', model: 'GT', year: 2020 },
  { id: 7, make: 'Fiat', model: '124 Spider', year: 2018 },
  { id: 8, make: 'Lincoln', model: 'Nautilus', year: 2021 },
  { id: 9, make: 'Mitsubishi', model: 'Outlander', year: 2022 },
];

export const DataTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
