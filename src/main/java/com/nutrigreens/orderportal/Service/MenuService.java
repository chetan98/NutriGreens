package com.nutrigreens.orderportal.Service;

import java.util.List;

import com.nutrigreens.orderportal.DAO.MenuRepo;
import com.nutrigreens.orderportal.Modal.MenuEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
    
    @Autowired
    private MenuRepo menuRepo;

    public List<MenuEntity> showMenu(){
        return menuRepo.findAll();
    }

    public void addToMeu(MenuEntity product) {
        menuRepo.save(product);
    }

    public void addsToMeu(List<MenuEntity> products) {
        menuRepo.saveAll(products);
    }
}
