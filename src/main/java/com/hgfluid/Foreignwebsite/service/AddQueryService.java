package com.hgfluid.Foreignwebsite.service;

import com.hgfluid.Foreignwebsite.entity.QueryEntity;
import com.hgfluid.Foreignwebsite.mapper.QueryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Service
@RestController
public class AddQueryService {
    @Autowired
    private QueryMapper queryMapper;

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    public String submit(QueryEntity queryEntity){
        String name = queryEntity.getName();
        String mail = queryEntity.getMail();
        String demand = queryEntity.getDemand();
        queryMapper.insertQuery(name, mail, demand);
        return "Success";
    }



}
