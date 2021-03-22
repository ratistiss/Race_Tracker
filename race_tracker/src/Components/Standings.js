import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'place', label: '#', minWidth: 30 },
  { id: 'name', label: 'Name', minWidth: 50 },
  {
    id: 'organization',
    label: 'Organization',
    minWidth: 30,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'trending',
    label: 'Trending',
    minWidth: 20,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(place, name, organization, trending) {
  return { place, name, organization, trending };
}

const rows = [
  createData('1', 'Dolce Anderson', "Hendrix", 'down'),
  createData('2', 'Jeremy Vazquez', "Gibbs", 'down'),
  createData('3', 'Your daddy', "Kaulig", 'way Up'),
  createData('4', 'mommy', "Penske", 'still behind daddy'),
  createData('5', 'Cal Anderson', "One Day", 'upward'),
  createData('6', 'Kevin Harvick', "Stewart Haus", 'down of course'),
  
];

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
});

const Standings = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <div className='body'>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  );
}

export default Standings;
