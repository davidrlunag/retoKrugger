/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.controllers;

import com.kruger.demo.dto.LoginDTO;
import com.kruger.demo.entities.Role;
import com.kruger.demo.entities.Usuario;
import com.kruger.demo.services.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/kruger/usuarios")
@CrossOrigin(origins = "*", maxAge = 3600)
@Api(value = "Endpoints para el manejo de los Usuarios")
public class UsuarioController {

    private final String ADMIN_ROL = "ADMIN";
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("")
    @ApiOperation(value = "Permite Obtener la Lista de los Usuarios", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved list"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")
    }
    )
    public ResponseEntity<List<Usuario>> list() {
        List<Usuario> usuarios = usuarioService.getAll();
        for (Usuario usuario : usuarios) {
            for (Role rol : usuario.getRoles()) {
                if (rol.getNombre().equals(ADMIN_ROL)) {
                    usuario.setAdmin(true);
                }
                break;
            }
        }
        return new ResponseEntity<List<Usuario>>(usuarioService.getAll(), HttpStatus.OK);
    }

    @PostMapping("")
    @ApiOperation(value = "Permite guardar los Datos de un Usuario", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "Successfully user created"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")

    }
    )
    public ResponseEntity<?> addUsuario(@Valid @RequestBody Usuario user, Errors errors) {
        if (errors.hasErrors()) {
            List<String> errorValidacion = new ArrayList<>();
            for (FieldError error : errors.getFieldErrors()) {
                errorValidacion.add(error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorValidacion, HttpStatus.BAD_REQUEST);
        }
        if (usuarioService.findByEmail(user.getEmail()) != null || usuarioService.findByCedula(user.getCedula()) != null) {
            return new ResponseEntity<>("Usuario ya se encuentra registrado", HttpStatus.BAD_REQUEST);

        } else {
            Usuario userNew = usuarioService.save(user);
            return new ResponseEntity<>(userNew, HttpStatus.OK);

        }
    }
    
  @PutMapping("")
    @ApiOperation(value = "Permite modificar los Datos de un Usuario", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "Successfully user created"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")

    }
    )
    public ResponseEntity<?> modifyUsuario(@Valid @RequestBody Usuario user, Errors errors) {
        if (errors.hasErrors()) {
            List<String> errorValidacion = new ArrayList<>();
            for (FieldError error : errors.getFieldErrors()) {
                errorValidacion.add(error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorValidacion, HttpStatus.BAD_REQUEST);
        }
        Usuario usuario = usuarioService.findById(user.getId());
        if(usuario!=null){
            usuario.setAdmin(user.isAdmin());
            usuario.setApellido(user.getApellido());
            usuario.setCedula(user.getCedula());
            usuario.setDireccion(user.getDireccion());
            usuario.setEmail(user.getEmail());
            usuario.setNombre(user.getNombre());
            usuario.setPassword(user.getPassword());
            usuario.setTelefono(user.getTelefono());
            usuario.setUsername(user.getUsername());
            Usuario userNew = usuarioService.save(user);
            return new ResponseEntity<>(userNew, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Usuario No Existe", HttpStatus.BAD_REQUEST);
        }
    }    

    @PostMapping("/login")
    @ApiOperation(value = "Permite hacer Login a un Usuario", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 201, message = "Successfully user created"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found"),
        @ApiResponse(code = 500, message = "Internal Server Error")

    }
    )
    public ResponseEntity<?> login(@RequestBody LoginDTO login) {
        Usuario usuario = usuarioService.findByUsername(login.getUsername());
        if (usuario != null) {
            if (usuario.getPassword() != null && usuario.getPassword().trim().equals(login.getPassword())) {
                for (Role rol : usuario.getRoles()) {
                    if (rol.getNombre().equals(ADMIN_ROL)) {
                        usuario.setAdmin(true);
                    }
                    break;
                }
                return new ResponseEntity<>(usuario, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Password Incorrecto", HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>("Usuario no existe", HttpStatus.NOT_FOUND);
        }
    }
}
