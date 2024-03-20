package com.minhvu.energyservice.service;

import com.minhvu.energyservice.model.Energy;

import java.util.List;

public interface EnergyService {
    Energy saveEnergy(Energy energy);
    List<Energy> getEnergies();
    Energy getEnergy(String id);
    Energy updateEnergy(String id, Energy energy);
    void deleteEnergy(String id);
}