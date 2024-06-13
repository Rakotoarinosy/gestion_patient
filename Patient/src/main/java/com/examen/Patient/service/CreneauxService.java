package com.examen.Patient.service;

import com.examen.Patient.entity.Creneaux;
import com.examen.Patient.repository.CreneauxRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CreneauxService {
    private final CreneauxRepository creneauxRepository;

    public CreneauxService(CreneauxRepository creneauxRepository) {
     this.creneauxRepository = creneauxRepository;
    }

    public Iterable<Creneaux> getAllCrenaux() {
        return creneauxRepository.findAll();
    }

    public Creneaux getCreneauxById(Integer id){
        Optional<Creneaux> creneaux = creneauxRepository.findById(Long.valueOf(id));
        return creneaux.orElse(null);
    }

    public Creneaux createCreneaux(Creneaux creneaux) {
        return creneauxRepository.save(creneaux);
    }

    public Creneaux updateCreneaux(Integer id, Creneaux updateCreneaux){
        Optional<Creneaux> creneauxExisting = creneauxRepository.findById(Long.valueOf(id));
        if (creneauxExisting.isPresent()) {
            Creneaux creneaux = creneauxExisting.get();
            creneaux.setHdebut(updateCreneaux.getHdebut());
            creneaux.setHfin(updateCreneaux.getHfin());
            return creneauxRepository.save(creneaux);
        } else {
            return null;
        }
    }

    public boolean deleteCreaneaux(Integer id) {
        Optional<Creneaux> creneauxExisting = creneauxRepository.findById(Long.valueOf(id));
        if (creneauxExisting.isPresent()){
            creneauxRepository.deleteById(Long.valueOf(id));
            return true;
        } else {
            return false;
        }
    }

}
