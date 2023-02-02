import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import React from 'react'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 160,
      editable: true,
    },
    {
      field: 'botón',
      width: 100,
      editable: true,
      renderCell: (params: GridRenderCellParams <Date>)=> {
        return (
          <Button>Editar</Button>
        )
      }
    },
];
const rows = [
    { id: 1, lastName: 'Pérez Hernández', firstName: 'Samuel', age: 35, email: 'client1@hotmail.com'},
    { id: 2, lastName: 'Gómez', firstName: 'Pedro', age: 42, email: 'client2@hotmail.com'},
    { id: 3, lastName: 'Jiménez Cantú', firstName: 'Nancy', age: 45, email: 'client3@hotmail.com'},
    { id: 4, lastName: 'Fernández', firstName: 'Carlos', age: 16, email: 'client4@hotmail.com'},
    { id: 5, lastName: 'Ramos Zayas', firstName: 'Martín', age: 34, email: 'client5@hotmail.com'},
    { id: 6, lastName: 'Velázquez', firstName: 'Alonso', age: 46, email: 'client6@hotmail.com'},
    { id: 7, lastName: 'Sánchez De La Torre', firstName: 'Norberto', age: 44, email: 'client7@hotmail.com'},
    { id: 8, lastName: 'Hernández Gutiérrez', firstName: 'Eduardo', age: 36, email: 'client8@hotmail.com'},
    { id: 9, lastName: 'Camacho', firstName: 'Vicente', age: 65, email: 'client9@hotmail.com'},
    { id: 10, lastName: 'León Villegas', firstName: 'Miguel', age: 38, email: 'client10@hotmail.com'},
];
export const GridTheme =() =>{
    return(
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                rows = {rows}
                columns = {columns}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures = {{newEditingApi : true}}
            />
        </Box>
    )
}