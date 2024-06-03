package com.examen.Patient.service;

import com.examen.Patient.entity.Patients;
import com.examen.Patient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientService {
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Iterable<Patients> getAllPatients() {
        return patientRepository.findAll();
    }


    public Patients getPatientById(Integer id) {
        Optional<Patients> patient = patientRepository.findById(Long.valueOf(id));
        return patient.orElse(null);
    }

    public Patients createPatient(Patients patient) {
        return patientRepository.save(patient);
    }

    public Patients updatePatient(Integer id, Patients updatedPatient) {
        Optional<Patients> existingPatient = patientRepository.findById(Long.valueOf(id));
        if (existingPatient.isPresent()) {
            Patients patient = existingPatient.get();
            patient.setNom(updatedPatient.getNom());
            patient.setPrenom(updatedPatient.getPrenom());
            patient.setTitre(updatedPatient.getTitre());
            return patientRepository.save(patient);
        } else {
            return null;
        }
    }

    public boolean deletePatient(Integer id) {
        Optional<Patients> existingPatient = patientRepository.findById(Long.valueOf(id));
        if (existingPatient.isPresent()) {
            patientRepository.deleteById(Long.valueOf(id));
            return true;
        } else {
            return false;
        }
    }
}
