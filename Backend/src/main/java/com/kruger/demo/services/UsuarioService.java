/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.services;

import com.kruger.demo.entities.Usuario;
import com.kruger.demo.repositories.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase para los servicios de Usuarios Implementa los métodos que se
 * definieron en el repository
 * 
 * @author David Luna
 * @version 1.0
 * @since 2020-09-12
 */

@Service
public class UsuarioService {
        @Autowired
	UsuarioRepository repository;

	/**
	 * Este método es utilizado para obtener la Lista de todos los Usuario.
	 * 
	 * @return List<Registro> Retorna la lista completa de Usuario.
	 */
	public List<Usuario> getAll() {
		return repository.findAll();
	}

	/**
	 * Este método es utilizado para salvar un Usuario.
	 * 
	 * @param Usuario Datos del Usuario a guardar
	 * @return Usuario Retorna el Usuario salvado
	 */
	public Usuario save(Usuario data) {
                data.setUsername(data.getCedula());
                data.setPassword(data.getCedula());
		return repository.save(data);
	}

	/**
	 * Este método es utilizado para obtener un Usuario en base a su Id.
	 * 
	 * @param id ID del pais a buscar
	 * @return Usuario Retorna el registro que corresponda al id
	 */
	public Usuario findById(int id) {
		return repository.findById(id).get();
	}

	/**
	 * Este método es utilizado para eliminar un Usuario
	 * 
	 * @param entity Usuario a Eliminar
         * @return Usuario Retorna el registro que corresponda al id
	 */
	public boolean delete(Usuario entity) {
		repository.delete(entity);
		return true;
	}
        

	/**
	 * Este método es utilizado para obtener un Usuario en base a su email.
	 * 
	 * @param email Email del usuario a buscar
	 * @return Usuario Retorna el registro que corresponda al email
	 */
	public Usuario findByEmail(String email) {
		return repository.findByEmail(email);
	}        

	/**
	 * Este método es utilizado para obtener un Usuario en base a su cedula.
	 * 
	 * @param cedula Cedula del usuario a buscar
	 * @return Usuario Retorna el registro que corresponda a la cedula
	 */
	public Usuario findByCedula(String cedula) {
		return repository.findByCedula(cedula);
	}    
	/**
	 * Este método es utilizado para obtener un Usuario en base a su cedula.
	 * 
	 * @param cedula Cedula del usuario a buscar
	 * @return Usuario Retorna el registro que corresponda a la cedula
	 */
	public Usuario findByUsername(String username) {
		return repository.findByUsername(username);
	}           
}
