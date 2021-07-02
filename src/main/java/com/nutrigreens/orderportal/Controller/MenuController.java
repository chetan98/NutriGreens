package com.nutrigreens.orderportal.Controller;

import java.util.List;

import com.nutrigreens.orderportal.Modal.MenuEntity;
import com.nutrigreens.orderportal.Service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class MenuController {
    
    @Autowired
    private MenuService menuService;

    @GetMapping("/menu")
    public List<MenuEntity> fetchMenu(){
        return menuService.showMenu();
    }

    @PostMapping("/addproduct")
    public void addProduct(@RequestBody MenuEntity product){
        System.out.println("\n"+product);
        menuService.addToMeu(product);
    }

    @PostMapping("/addproducts")
    public void addProducts(@RequestBody List<MenuEntity> products){
        menuService.addsToMeu(products);
    }
}
