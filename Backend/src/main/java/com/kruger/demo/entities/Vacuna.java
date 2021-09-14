/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.entities;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

/**
 * Clase para la Entidad de Vacunas 
 * Permite manejar las vacunas aplicadas por el usuario
 *
 * @author David Luna
 * @version 1.0
 * @since 2021-09-11
 */
@Entity
@Table(name = "vacunas")
@Data
public class Vacuna implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(notes = "Id de la vacuna")
    private int id;

    @ApiModelProperty(notes = "Tipo de Vacuna aplicada")
    private TipoVacuna tipo;
    
    @ApiModelProperty(notes = "Fecha de Vacunación")
    private LocalDate fecha;
    
    @ApiModelProperty(notes = "Dosis de la vacuna aplicada")
    private int dosis;
    
    @ApiModelProperty(notes = "Usuario al que se le aplicó la vacuna")
    private int usuario;  
    
    enum TipoVacuna{
        Sputnik,
        AstraZeneca,
        Pfizer,
        Jhonson
    } 
}

