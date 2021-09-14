import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import {Dialog} from 'primereact/dialog'
import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'
import { Dropdown } from "primereact/dropdown";
import {InputTextarea} from 'primereact/inputtextarea'
import React, {useContext,useState} from 'react'
import HeaderAdmin from './layout/HeaderAdmin'
import LoadingSpinner from './utils/LoadingSpinner'
import Mensaje from './utils/Mensaje'
import {getUsuarios} from './services/usersService'
import {showMessaje} from './utils/Utils'
import MainLayout from './layout/MainLayout'
import {constantsPage} from './utils/Constants'
import { Calendar } from 'primereact/calendar';
import { Fieldset } from "primereact/fieldset";
import AuthContext from './context/auth/authContext';
import AlertContext from './context/alertas/alertContext';

const rows = process.env.REACT_APP_ROWS

const Perfil = () => {
  const authContext = useContext(AuthContext);
  const {  usuario } = authContext;
  const [vacuna, setVacuna] = useState(null);
  const [panelCollapsed, setPanelCollapsed] = useState(true);
  const [userVacunas, setUserVacunas] = useState(usuario.vacunas);
  const [vacunaSelected, setVacunaSelected] = useState(usuario.vacunas);

  const [globalFilter, setGlobalFilter] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false)
  const [actionToDo, setActionToDo] = useState(null)
  const [errorBtn, setErrorBtn] = useState(false)
  const alertContext = useContext(AlertContext);
  const { typeAlert, alertMsg, showAlert } = alertContext;

  const {
    id,
    nombre,
    apellido,
    username,
    email,
    password,
    cedula,
    fechanac,
  } = usuario;

const {
  tipo,
  dosis,
  fecha,
} = userVacunas;
    /* CRUD operations */
    const onAdd = () => {
    
      setVacuna(null)
      setActionToDo('Alta')
      setVacuna({
        tipo: '',
        dosis: '',
        //puntos: 0,
        fecha: '',
        usuario:'',
      })
      setDisplayDialog(true)
    }

    
  /**
   * Footer de la tabla
   */
   let footer = (
    <div className='p-clearfix' style={{width: '100%'}}>
      <Button
        style={{float: 'right'}}
        label={constantsPage.genericas.btnNew}
        icon={'pi pi-plus'}
        id={'btnAgregar'}
        onClick={
           onAdd
        }
        className={'bel-btn-default'}
      />
    </div>
  );

  const tiposVacunas=[
    {"id":0,name:"Sputnik"},
    {"id":1,name:"AstraZeneca"},
    {"id":2,name:"Pfizer"},
    {"id":3,name:"Jhonson"},
  ];
  
  const updateProperty = (property, value) => {
    let data = {...vacuna}
    data[property] = value
    setVacuna(data)
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



    /**
   * Footer de la tabla
   */
     let dialogFooter = (
      <div className='p-clearfix' style={{width: '100%'}}>
       
      </div>
    )
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
          <Dialog
          visible={displayDialog}
          style={{width: '500px'}}
          header={header}
          modal={true}
          footer={dialogFooter}
          onHide={() => setDisplayDialog(false)}
        >
            
              <div className='p-col-4' style={{padding: '.75em'}}>
                <label htmlFor='nombre'>
                {constantsPage.vacunas.labelCampo1}
                </label>
              </div>
              <div className='p-col-8' style={{padding: '.5em'}}>
              <Dropdown
                  options={tiposVacunas}
                  optionValue="id"
                  optionLabel="nombre"
                  onChange={(e) => {
                    setVacunaSelected(e.value);
                    updateProperty("tipo", e.target.value);
                  }}
                  className={typeAlert==='warn'  ? 'p-invalid' : ''}
                  value={vacunaSelected}
                  placeholder="Seleccione"
                />
              </div>
              <div className='p-col-4' style={{padding: '.75em'}}>
                <label htmlFor='dosis'>
                {constantsPage.vacunas.labelCampo2}
                </label>
              </div>
              <div className='p-col-8' style={{padding: '.5em'}}>
              <InputText
                  id='dosis'
                  className={typeAlert==='warn'  ? 'p-invalid' : ''}
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      
                      setErrorBtn(true)
                    } else {
                      
                      setErrorBtn(false)
                    }
                    updateProperty('dosis', e.target.value)
                  }}
                  value={vacunaSelected}
                />
              </div>

              <div className="p-field p-col-12 p-md-4">
            <label htmlFor="lastname2">Fecha de Nacimiento:</label>
            <Calendar  value={editDate(fechanac)}  onChange={(e) =>
                  setVacuna({
                    ...vacuna,  fecnac: e.value ,
                  })
                }  dateFormat="dd-mm-yy" locale="es" monthNavigator yearNavigator yearRange="1930:2050" disabled >
                </Calendar>
          </div>
                
          
        </Dialog>
    </div>
    )
}

Perfil.Layout =  MainLayout

export default Perfil 
