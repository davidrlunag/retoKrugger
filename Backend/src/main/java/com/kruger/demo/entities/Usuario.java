/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.entities;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.Data;

/**
 * Clase para la Entidad de Usuarios Permite manejar los usuarios
 *
 * @author David Luna
 * @version 1.0
 * @since 2021-09-11
 */
@Entity
@Table(name = "usuarios")
@Data
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(notes = "Id del usuario")
    private int id;
 
    @Pattern(regexp = "\\d{10}\\s?", message = "Formato de Cédula Incorrecto")
    @ApiModelProperty(notes = "Cédula del usuario")
    private String cedula;
    
    @Pattern(regexp = "[A-Za-z ]{1,40}", message = "Formato de Nombre Incorrecto")
    @NotBlank(message = "Nombre es Requerido")
    @ApiModelProperty(notes = "Nombre del usuario")
    private String nombre;
    
    @Pattern(regexp = "[A-Za-z ]{1,70}", message = "Formato de Apellidos Incorrecto")
    @NotBlank(message = "Apellido es Requerido")
    @ApiModelProperty(notes = "Apellido del usuario")
    private String apellido;
    
    @NotBlank(message = "Email es Requerido")
    @Email(message = "Formato de Email no válido")
    @ApiModelProperty(notes = "Email del usuario")
    private String email;

    @ApiModelProperty(notes = "Username del usuario")
    private String username;
    
    @ApiModelProperty(notes = "Password del usuario")
    private String password;
    
    @ApiModelProperty(notes = "Fecha de Nac del usuario")
    private LocalDate fechanac;
    
    @ApiModelProperty(notes = "Dirección del usuario")
    private String direccion;
    
    @ApiModelProperty(notes = "Telefono del usuario")
    private String telefono;
    
    @ApiModelProperty(notes = "Usuario está vacunado?")
    private char vacunado;

    @OneToMany(mappedBy = "usuario", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    
    @ApiModelProperty(notes = "Lista de Vacunas aplicadas")
    List<Vacuna> vacunas;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "rolesxusuario", joinColumns = {
        @JoinColumn(name = "user_id")}, inverseJoinColumns = {
        @JoinColumn(name = "role_id")})
    @ApiModelProperty(notes = "Lista de Roles del Usuario")
    private Set<Role> roles;
    
    @Transient
    @ApiModelProperty(notes = "Es Admin?")
    private boolean isAdmin;
}
