/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kruger.demo.repositories;

import com.kruger.demo.entities.Vacuna;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
* Clase para el Repository de Usuarios
*
* @author  David Luna
* @version 1.0
* @since   2020-09-12 
*/

@Repository
public interface VacunaRepository extends JpaRepository<Vacuna, Integer> {
    
    List<Vacuna> findByUsuario(int usuario);
    
}
