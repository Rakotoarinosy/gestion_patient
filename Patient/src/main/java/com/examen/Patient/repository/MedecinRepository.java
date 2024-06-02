package com.examen.Patient.repository;

import com.examen.Patient.entity.Medecins;
import org.springframework.data.repository.CrudRepository;

public interface MedecinRepository extends CrudRepository<Medecins,Long> {
}
