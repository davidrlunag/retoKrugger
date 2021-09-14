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
import { Calendar } from 'primereact/calendar';
import { Fieldset } from "primereact/fieldset";

const rows = process.env.REACT_APP_ROWS

const UsuarioDetalle = ({ userShow }) => {
  const [userDetails, setUserDetailsEdit] = useState(userShow);
  const [userVacunas, setUserVacunas] = useState(userDetails.vacunas)
  const [loading, setLoading] = useState(false)
  const [usuarios, setUsuarios] = useState(null)
  const [userToShow, setUserToShow] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [globalFilter, setGlobalFilter] = useState(null)
  const [displayDialog, setDisplayDialog] = useState(false)
  const [panelCollapsed, setPanelCollapsed] = useState(true)
  const {
    id,
    nombre,
    apellido,
    username,
    email,
    password,
    cedula,
    fechanac,
  } = userShow;
  

  
  /**
   * Footer de la tabla
   */
  let footer = (
    <div className='p-clearfix' style={{width: '100%'}}>
     
    </div>
  )
  const onUserSelect = (e) => {
    console.log('Este es el usuario' + JSON.stringify(e))
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

  const editDate = (dateToEdit) =>{
    if(dateToEdit){
      let date = new Date(dateToEdit)
      date.setDate(date.getDate()+1)
      return date
    }  
  }
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
       <Fieldset  className="p-shadow-1 " style={{ backgroudColor: "#014452" }} legend="Datos basicos">
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="Nombre">Nombre</label>
            <InputText id="Nombre"  value={nombre} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Apellido</label>
            <InputText id="lastname2"  value={apellido} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Nombre de usuario</label>
            <InputText id="lastname2"   value={username} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="firstname2">Correo</label>
            <InputText id="firstname2"  value={email} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Contraseña</label>
            <InputText id="lastname2"  value={password} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Sexo</label>
            <InputText id="lastname2"  value={cedula} type="text" disabled />
          </div>
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Fecha de Nacimiento:</label>
            <InputText id="lastname2"  value={fechanac} type="text" disabled />
          </div>
        </div>
      </Fieldset>
      <Fieldset
        legend="Detalles de Vacunación"
        toggleable
        style={{ backgroudColor: "white", marginTop: "10px" }}
        collapsed={panelCollapsed} 
        onClick={(e) => setPanelCollapsed({panelCollapsed: e.value})}
        className="p-shadow-1 "
      >
        <div className="p-fluid p-formgrid p-grid">
        <DataTable
              value={userVacunas}
              responsive
              paginator
              header={constantsPage.vacunas.headerTabla}
              rows={rows}
              style={{width: '100%', marginTop: '20px', padding: '0.5rem 1rem', fontSize:'15px'}}
              dataKey='id'
              rowHover
              globalFilter={globalFilter}
              footer={footer}
              emptyMessage={constantsPage.vacunas.emptyMessage}
              className='bel-table p-shadow-4'
            >
              
              <Column field='tipo' header={constantsPage.vacunas.headerCampo1 } />
             <Column field='dosis' header={constantsPage.vacunas.headerCampo2} sortable />
              <Column field='fecha' header={constantsPage.vacunas.headerCampo3} sortable />
            </DataTable>
          
        </div>
          </Fieldset>
      </div>
    
  )
}

UsuarioDetalle.Layout =  MainLayout

export default UsuarioDetalle 
