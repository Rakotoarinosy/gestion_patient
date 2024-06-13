package com.examen.Patient.service;

import com.examen.Patient.entity.Rv;
import com.examen.Patient.repository.RvRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RvService {
    private final RvRepository rvRepository;

    public RvService(RvRepository rvRepository) {
        this.rvRepository = rvRepository;
    }

    public Iterable<Rv> getAllRvs() {
        return rvRepository.findAll();
    }

    public Rv getRvById(Long id) {
        Optional<Rv> rv = rvRepository.findById(id);
        return rv.orElse(null);
    }

    public Rv createRv(Rv rv) {
        return rvRepository.save(rv);
    }

    public Rv updateRv(Long id, Rv updatedRv) {
        Optional<Rv> existingRv = rvRepository.findById(id);
        if (existingRv.isPresent()) {
            Rv rv = existingRv.get();
            rv.setJour(updatedRv.getJour());
            rv.setPatient(updatedRv.getPatient());
            rv.setCreneau(updatedRv.getCreneau());
            return rvRepository.save(rv);
        } else {
            return null;
        }
    }

    public boolean deleteRv(Long id) {
        Optional<Rv> existingRv = rvRepository.findById(id);
        if (existingRv.isPresent()) {
            rvRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
