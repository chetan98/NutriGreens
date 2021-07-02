package com.nutrigreens.orderportal.DAO;

import com.nutrigreens.orderportal.Modal.MenuEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepo extends JpaRepository<MenuEntity, Integer> {
    
}
