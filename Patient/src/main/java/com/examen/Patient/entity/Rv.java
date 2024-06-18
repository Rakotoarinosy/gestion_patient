package com.examen.Patient.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Rv {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date jour;

    @ManyToOne
    @JoinColumn(name="id_patient")
    private Patients patient;

    @ManyToOne
    @JoinColumn(name="id_creneau")
    private Creneaux creneau;

    private String horaire;

    // Constructeur par défaut
    public Rv() {}

    public Rv(Long id, Date jour, Patients patient, Creneaux creneau, String horaire) {
        this.id = id;
        this.jour = jour;
        this.patient = patient;
        this.creneau = creneau;
        this.horaire = horaire;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getJour() {
        return jour;
    }

    public void setJour(Date jour) {
        this.jour = jour;
    }

    public Patients getPatient() {
        return patient;
    }

    public void setPatient(Patients patient) {
        this.patient = patient;
    }

    public Creneaux getCreneau() {
        return creneau;
    }

    public void setCreneau(Creneaux creneau) {
        this.creneau = creneau;
    }

    public String getHoraire() {
        return horaire;
    }

    public void setHoraire(String horaire) {
        this.horaire = horaire;
    }
}
