package com.examen.Patient.service;

import com.examen.Patient.entity.Medecins;
import com.examen.Patient.repository.MedecinRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MedecinService {
    private final MedecinRepository medecinRepository;

    public MedecinService(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

    public Iterable<Medecins> getAllMedecins() {
        return medecinRepository.findAll();
    }

    public Medecins getMedecinById(Integer id) {
        Optional<Medecins> medecin = medecinRepository.findById(Long.valueOf(id));
        return medecin.orElse(null);
    }

    public  Medecins createMedecin(Medecins medecins) {
        return medecinRepository.save(medecins);
    }

    public Medecins updateMedecin(Integer id, Medecins updateMedecin) {
        Optional<Medecins> existingMedecin = medecinRepository.findById(Long.valueOf(id));
        if(existingMedecin.isPresent()) {
            Medecins medecin = existingMedecin.get();
            medecin.setNom(updateMedecin.getNom());
            medecin.setTitre(updateMedecin.getTitre());
            medecin.setPrenom(updateMedecin.getPrenom());
            return medecinRepository.save(medecin);
        } else {
            return null;
        }
    }

    public boolean deleteMedecin(Integer id) {
        Optional<Medecins> existingMedecin = medecinRepository.findById(Long.valueOf(id));
        if (existingMedecin.isPresent()){
            medecinRepository.deleteById(Long.valueOf(id));
            return true;
        } else {
            return false;
        }
    }
}
