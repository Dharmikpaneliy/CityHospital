import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

function ListAppointment(props) {

    const history = useHistory();

    const [data, setData] = useState([]);

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"))
        setData(localData)
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, email, phone, date, department, message) {
        return { name, email, phone, date, department, message};
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        let dData = localData.filter((l,i) => l.id !== id )

        localStorage.setItem("appointment",JSON.stringify(dData));

        loadData();
    }

    const handleEdit = (id) => {
        history.push("/appointment",{"id":id});
    }

    useEffect(
        () => {
            loadData();
        },
        [])

    return (
        <>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>List Appointment</h2>
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>

                        <div className='row text-center py-3'>
                            <div className='col-6'>
                                <NavLink activeClassName='aptNav' to={"/appointment"}>Make An Appointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink activeClassName='aptNav' to={"/listappointment"}>List Appointment</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">E-mail</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Department</StyledTableCell>
                            <StyledTableCell align="right">Message</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.department}</StyledTableCell>
                                <StyledTableCell align="right">{row.message}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => handleDelete(row.id)}><DeleteIcon/></Button></StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => handleEdit(row.id)}><EditIcon/></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <div>
                {
                    data.map((d,i)=>{
                        {
                            return(
                                <h4>{d.name}</h4>
                            )
                        }
                    })
                }
            </div> */}
        </>
    );
}

export default ListAppointment;