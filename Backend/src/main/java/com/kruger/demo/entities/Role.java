package com.kruger.demo.entities;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

/**
* Clase para la Entidad de Roles
* Permite manejar roles a los usuarios
*
* @author  David Luna
* @version 1.0
* @since   2021-09-13 
*/
@Data
@Table(name = "roles")
@Entity
@ApiModel(description="Para el manejo de los Roles de Usuarios")  
public class Role implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes="Id del Rol")  	
	private long id;

	@Column
	@ApiModelProperty(notes="Nombre del Rol")  	
        private String nombre;

	@Column
	@ApiModelProperty(notes="Descripción del Rol")  	
	private String descripcion;

}