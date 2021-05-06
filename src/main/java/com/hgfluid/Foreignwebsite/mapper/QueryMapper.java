package com.hgfluid.Foreignwebsite.mapper;

import com.hgfluid.Foreignwebsite.entity.QueryEntity;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Component
public interface QueryMapper {

    @Insert("INSERT INTO query values(null,#{name},#{mail},#{demand})")
    int insertQuery(@Param("name") String name, @Param("mail") String mail, @Param("demand") String demand);

    @Select("SELECT * FROM query")
    QueryEntity selectAll();

}