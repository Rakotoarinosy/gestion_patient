package com.examen.Patient.repository;

import com.examen.Patient.entity.Patients;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patients,Long> {
}
