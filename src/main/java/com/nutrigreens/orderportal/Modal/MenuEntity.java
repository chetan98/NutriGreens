package com.nutrigreens.orderportal.Modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Menu")
@Entity(name="Menu")
public class MenuEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Menu_Id")
    private int menuId;
    @Column(name="Product")
    private String product;
    @Column(name ="Category")
    private String category;
    @Column(name="Price")
    private Float price;
}
