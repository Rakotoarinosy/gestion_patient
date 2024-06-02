package com.examen.Patient.entity;

import jakarta.persistence.*;

@Entity
public class Creneaux {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int hdebut;
    private int mdebut;
    private int hfin;
    private int mfin;

    @ManyToOne
    @JoinColumn(name= "id_medecin")
    private Medecins medecin;

    public Creneaux(Long id, int hdebut, int mdebut, int hfin, int mfin, Medecins medecin) {
        this.id = id;
        this.hdebut = hdebut;
        this.mdebut = mdebut;
        this.hfin = hfin;
        this.mfin = mfin;
        this.medecin = medecin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getHdebut() {
        return hdebut;
    }

    public void setHdebut(int hdebut) {
        this.hdebut = hdebut;
    }

    public int getMdebut() {
        return mdebut;
    }

    public void setMdebut(int mdebut) {
        this.mdebut = mdebut;
    }

    public int getHfin() {
        return hfin;
    }

    public void setHfin(int hfin) {
        this.hfin = hfin;
    }

    public int getMfin() {
        return mfin;
    }

    public void setMfin(int mfin) {
        this.mfin = mfin;
    }

    public Medecins getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecins medecin) {
        this.medecin = medecin;
    }
}
