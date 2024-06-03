package com.examen.Patient.controller;

import com.examen.Patient.entity.Medecins;
import com.examen.Patient.service.MedecinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/medecins")
public class MedecinController {
    private final MedecinService medecinService;

    @Autowired
    public MedecinController(MedecinService medecinService) {
        this.medecinService = medecinService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Medecins>> getAllMedecins() {
        Iterable<Medecins> medecin = medecinService.getAllMedecins();
        return new ResponseEntity<>(medecin, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medecins> getMedecinByid(@PathVariable Integer id) {
        Medecins medecin = medecinService.getMedecinById(id);
        if (medecin != null) {
            return new ResponseEntity<>(medecin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Medecins> createMedecin(@RequestBody Medecins medecin) {
        Medecins createMedecin = medecinService.createMedecin(medecin);
        return new ResponseEntity<>(medecin, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Medecins> updateMedecin(@PathVariable Integer id, @RequestBody Medecins updatedMedecin) {
        Medecins medecin = medecinService.updateMedecin(id, updatedMedecin);
        if (medecin != null) {
            return new ResponseEntity<>(medecin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedecin(@PathVariable Integer id) {
        boolean deleted = medecinService.deleteMedecin(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
