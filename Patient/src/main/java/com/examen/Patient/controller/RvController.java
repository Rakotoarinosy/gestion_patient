package com.examen.Patient.controller;

import com.examen.Patient.entity.Rv;
import com.examen.Patient.service.RvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/rvs")
public class RvController {

    private final RvService rvService;

    @Autowired
    public RvController(RvService rvService) {
        this.rvService = rvService;
    }

    @GetMapping
    public ResponseEntity<List<Rv>> getAllRvs() {
        List<Rv> rvs = (List<Rv>) rvService.getAllRvs();
        return ResponseEntity.ok(rvs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rv> getRvById(@PathVariable Long id) {
        Rv rv = rvService.getRvById(id);
        return rv != null ? ResponseEntity.ok(rv) : ResponseEntity.notFound().build();
    }

    @PostMapping("/create")
    public ResponseEntity<Rv> createRv(@RequestBody Rv rv) {
        Rv createdRv = rvService.createRv(rv);
        return ResponseEntity.ok(createdRv);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rv> updateRv(@PathVariable Long id, @RequestBody Rv rv) {
        Rv updatedRv = rvService.updateRv(id, rv);
        return updatedRv != null ? ResponseEntity.ok(updatedRv) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRv(@PathVariable Long id) {
        boolean isDeleted = rvService.deleteRv(id);
        return isDeleted ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
