package com.hgfluid.Foreignwebsite.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class QueryEntity implements Serializable {
    private Integer id;
    private String name;
    private String mail;
    private String demand;
}
