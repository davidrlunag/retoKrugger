package com.kruger.demo.controllers;

import com.kruger.demo.entities.Vacuna;
import com.kruger.demo.services.UsuarioService;
import com.kruger.demo.services.VacunaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* Clase Controller para el manejo de los Endpoints de las Vacunas para los usuarios
* *
* @author  David Luna
* @version 1.0
* @since   2021-09-13 
**/
@RestController
@RequestMapping("/api/kruger/vacunas")
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value = "Endpoints para el manejo de las Vacunas de los Usuarios")
public class VacunaController {
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    VacunaService vacunaService;
   @GetMapping("/usuario/{id}")
    @ApiOperation(value = "Permite Obtener la Lista de las Vacunas por por Usuario", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved list"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    }
    )
    public ResponseEntity<?> list(@PathVariable Integer id) {
        return new ResponseEntity<List<Vacuna>>(vacunaService.findByUsuario(id), HttpStatus.OK);
    }
    
    @PostMapping
    @ApiOperation(value = "Permite Obtener la Lista de las Vacunas por por Usuario", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "Successfully vacuum created"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    }
    )
    public ResponseEntity<?> addVacuna(@RequestBody Vacuna vacu) {
        Vacuna vacuna=vacunaService.save(vacu);
        return new ResponseEntity<Vacuna>(vacuna, HttpStatus.CREATED);
    }
}