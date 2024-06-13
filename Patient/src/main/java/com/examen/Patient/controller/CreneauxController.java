package com.examen.Patient.controller;

import com.examen.Patient.entity.Creneaux;
import com.examen.Patient.service.CreneauxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/creneaux")
public class CreneauxController {
    private final CreneauxService creneauxService;

    @Autowired
    public CreneauxController(CreneauxService creneauxService) {
        this.creneauxService = creneauxService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Creneaux>> getAllCreneaux() {
        Iterable<Creneaux> creneaux = creneauxService.getAllCrenaux();
        return new ResponseEntity<>(creneaux, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Creneaux> getCreneauxById(@PathVariable Integer id) {
        Creneaux creneaux = creneauxService.getCreneauxById(id);
        if (creneaux != null) {
            return new ResponseEntity<>(creneaux, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Creneaux> createCreneaux(@RequestBody Creneaux creneaux) {
        Creneaux createdCreneaux = creneauxService.createCreneaux(creneaux);
        return new ResponseEntity<>(createdCreneaux, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Creneaux> updateCreneaux(@PathVariable Integer id, @RequestBody Creneaux updatedCreneaux) {
        Creneaux creneaux = creneauxService.updateCreneaux(id, updatedCreneaux);
        if (creneaux != null) {
            return new ResponseEntity<>(creneaux, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCreneaux(@PathVariable Integer id) {
        boolean deleted = creneauxService.deleteCreaneaux(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
