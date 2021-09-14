import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import {Dialog} from 'primereact/dialog'
import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'
import React, {useCallback, useEffect, useState} from 'react'
import HeaderAdmin from './layout/HeaderAdmin'
import LoadingSpinner from './utils/LoadingSpinner'
import Mensaje from './utils/Mensaje'
import {getUsuarios} from './services/usersService'
import {showMessaje} from './utils/Utils'
import MainLayout from './layout/MainLayout'
import {constantsPage} from './utils/Constants'
import UsuarioDetalle from './usuarioDetalle'

const rows = process.env.REACT_APP_ROWS

const Users = (props) => {

  const [loading, setLoading] = useState(false)
  const [usuarios, setUsuarios] = useState(null)
  const [userShow, setUserToShow] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [globalFilter, setGlobalFilter] = useState(null)
  const [displayDialog, setDisplayDialog] = useState(false)

  const cargaAPI = useCallback(async () => {
    showMessaje(
      {mensaje: {type: 'OK', mensaje: 'Cargando los Datos'}},
      setMensaje
    )
    setLoading(true)
    getUsuarios()
    .then((response) => {
      setUsuarios(response.data)
      showMessaje(
        {
          mensaje: {
            type: 'OK',
            mensaje: 'Data conseguida',
          },
        },
        setMensaje
      )
      setLoading(false)
    })
    .catch((err) => {
      showMessaje(
        {
          mensaje: {type: 'ERROR', mensaje: 'Ocurrió un error...'},
        },
        setMensaje
      )
      setLoading(false)
      return []
    })
  }, [])

  useEffect(() => {
    cargaAPI()
  }, [cargaAPI])

  
  /**
   * Footer de la tabla
   */
  let footer = (
    <div className='p-clearfix' style={{width: '100%'}}>
     
    </div>
  )
  const onUserSelect = (e) => {
    setDisplayDialog(true)
    setUserToShow(e)
  }
  /**
   * Botón para edutar el atributo
   * @param {*} rowData
   */
   const showDetails = (rowData) => {
    return (
      <div>
        <div>
          <Button
            data={rowData}
            icon="pi pi-cog"
            tooltip={constantsPage.usuarios.toolTipShow}
            onClick={() => {
              onUserSelect(rowData)
            }}
          />
        </div>
      </div>
    )
  }
  const header = (
    <div className='table-header'>
      <h5 className='p-m-0'>{constantsPage.usuarios.headerDialog}</h5>
    </div>
  )

  const headerTabla = (
    <div className="table-header">
        <h5 className="p-m-0">{constantsPage.usuarios.headerTable}</h5>
        <div style={{display: 'flex',justifyContent: 'flex-end'}}> <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder={constantsPage.genericas.searchTxt} />
        </span>
        </div>
    </div>
);
  return (
    <div>
      <HeaderAdmin
        title={constantsPage.usuarios.headerTitle}
        description={constantsPage.usuarios.headerDescription}
      />
      <div className='App-intro p-grid p-justify-center p-nogutter'>
        {mensaje != null ? <Mensaje mensaje={mensaje} /> : ''}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <DataTable
              value={usuarios}
              responsive
              paginator
              header={headerTabla}
              rows={rows}
              style={{width: '100%', marginTop: '20px', padding: '0.5rem 1rem', fontSize:'15px'}}
              dataKey='id'
              rowHover
              globalFilter={globalFilter}
              footer={footer}
              emptyMessage={constantsPage.usuarios.emptyMessage}
              className='bel-table p-shadow-4'
            >
              
              <Column field='cedula' header={constantsPage.usuarios.headerCampo4} />
             <Column field='nombre' header={constantsPage.usuarios.headerCampo1} sortable />
              <Column field='apellido' header={constantsPage.usuarios.headerCampo3} sortable />
              <Column field='email' header={constantsPage.usuarios.headerCampo2} />
              <Column field='vacunado' header={constantsPage.usuarios.headerCampo5} />
            <Column
                header="Opciones"
                body={showDetails}
                style={{textAlign: 'center', width: '8em'}}
              />
            </DataTable>
          </>
        )}
      </div>
      <Dialog
          visible={displayDialog}
          style={{width: '900px'}}
          header={header}
          modal={true}
          //footer={dialogFooter} 
          onHide={() => setDisplayDialog(false)}
        >
           <UsuarioDetalle userShow={userShow}/>
        
        </Dialog>
    </div>

    
  )
}

Users.Layout =  MainLayout

export default Users
