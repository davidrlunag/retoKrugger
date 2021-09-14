/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.services;

import com.kruger.demo.entities.Usuario;
import com.kruger.demo.entities.Vacuna;
import com.kruger.demo.repositories.UsuarioRepository;
import com.kruger.demo.repositories.VacunaRepository;
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
public class VacunaService {
        @Autowired
	VacunaRepository repository;

	/**
	 * Este método es utilizado para obtener la Lista de todos los Usuario.
	 * 
	 * @return List<Registro> Retorna la lista completa de Usuario.
	 */
	public List<Vacuna> getAll() {
		return repository.findAll();
	}

	/**
	 * Este método es utilizado para salvar un Usuario.
	 * 
	 * @param Usuario Datos del Usuario a guardar
	 * @return Usuario Retorna el Usuario salvado
	 */
	public Vacuna save(Vacuna data) {
		return repository.save(data);
	}

	/**
	 * Este método es utilizado para obtener un Usuario en base a su Id.
	 * 
	 * @param id ID del pais a buscar
	 * @return Usuario Retorna el registro que corresponda al id
	 */
	public Vacuna findById(int id) {
		return repository.findById(id).get();
	}
/**
	 * Este método es utilizado para obtener un Usuario en base a su Id.
	 * 
	 * @param id ID del pais a buscar
	 * @return Usuario Retorna el registro que corresponda al id
	 */
	public List<Vacuna> findByUsuario(int id) {
		return repository.findByUsuario(id);
	}
	/**
	 * Este método es utilizado para eliminar un Usuario
	 * 
	 * @param entity Usuario a Eliminar
         * @return Usuario Retorna el registro que corresponda al id
	 */
	public boolean delete(Vacuna entity) {
		repository.delete(entity);
		return true;
	}
        
}
