import React from 'react'
import { Connect } from 'aws-amplify-react'
import {
  Container,
  Grid,
  TextField,
  InputAdornment,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from '@material-ui/core'
import { graphqlOperation } from 'aws-amplify'
import { listBusinesss } from '../../graphql/queries'
import PageTitle from '../commons/PageTitle'

const BusinessesCrudPage = () => {
  return (
    <Container>
      <PageTitle>Changarros</PageTitle>
      <Connect query={graphqlOperation(listBusinesss)}>
        {({ data, loading }) => {
          console.log(1111, data)
          return loading ? (
            <div>cargando</div>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre de Negocio o Profesional</TableCell>
                    <TableCell align="right">Teléfono</TableCell>
                    <TableCell align="right">Whatsapp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.listBusinesss.items.map((item) => (
                    <TableRow key={`table_key_${item.id}`}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.phoneNumber}</TableCell>
                      <TableCell align="right">{item.whatsappNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }}
      </Connect>
    </Container>
  )
}

export default BusinessesCrudPage
