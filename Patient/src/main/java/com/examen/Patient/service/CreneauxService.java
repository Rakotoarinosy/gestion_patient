package com.examen.Patient.service;

import com.examen.Patient.entity.Creneaux;
import com.examen.Patient.repository.CreneauxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class CreneauxService {
    private final CreneauxRepository creneauxRepository;

    @Autowired
    public CreneauxService(CreneauxRepository creneauxRepository) {
        this.creneauxRepository = creneauxRepository;
    }

    public Iterable<Creneaux> getAllCreneaux() {
        return creneauxRepository.findAll();
    }

    public Creneaux getCreneauxById(Long id){
        Optional<Creneaux> creneaux = creneauxRepository.findById(id);
        return creneaux.orElse(null);
    }

    public boolean createCreneaux(Creneaux creneaux) {
        List<Creneaux> existingCreneaux = creneauxRepository.findByMedecinId(creneaux.getMedecin().getId());
        if (Creneaux.canCreateCreneau(existingCreneaux, creneaux.getHdebut(), creneaux.getHfin())) {
            creneauxRepository.save(creneaux);
            return true;
        } else {
            return false;
        }
    }

    public Creneaux updateCreneaux(Long id, Creneaux updateCreneaux) {
        Optional<Creneaux> creneauxExisting = creneauxRepository.findById(id);
        if (creneauxExisting.isPresent()) {
            Creneaux creneaux = creneauxExisting.get();
            creneaux.setHdebut(updateCreneaux.getHdebut());
            creneaux.setHfin(updateCreneaux.getHfin());
            return creneauxRepository.save(creneaux);
        } else {
            return null;
        }
    }

    public boolean deleteCreneaux(Long id) {
        Optional<Creneaux> creneauxExisting = creneauxRepository.findById(id);
        if (creneauxExisting.isPresent()) {
            creneauxRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
