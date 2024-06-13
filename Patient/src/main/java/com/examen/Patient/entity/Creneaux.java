package com.examen.Patient.entity;

import jakarta.persistence.*;

import java.time.LocalTime;

@Entity
public class Creneaux {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalTime hdebut;
    private LocalTime hfin;

    @ManyToOne
    @JoinColumn(name= "id_medecin")
    private Medecins medecin;

    public Creneaux() {}

    public Creneaux(Long id, LocalTime hdebut, LocalTime hfin, Medecins medecin) {
        this.id = id;
        this.hdebut = hdebut;
        this.hfin = hfin;
        this.medecin = medecin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getHdebut() {
        return hdebut;
    }

    public void setHdebut(LocalTime hdebut) {
        this.hdebut = hdebut;
    }

    public LocalTime getHfin() {
        return hfin;
    }

    public void setHfin(LocalTime hfin) {
        this.hfin = hfin;
    }

    public Medecins getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecins medecin) {
        this.medecin = medecin;
    }
}
