package com.examen.Patient.repository;

import com.examen.Patient.entity.Creneaux;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CreneauxRepository extends CrudRepository <Creneaux,Long>{
    List<Creneaux> findByMedecinId(Long medecinId);
}
