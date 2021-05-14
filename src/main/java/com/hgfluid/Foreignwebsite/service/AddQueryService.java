package com.hgfluid.Foreignwebsite.service;

import com.hgfluid.Foreignwebsite.entity.QueryEntity;
import com.hgfluid.Foreignwebsite.entity.Result;
import com.hgfluid.Foreignwebsite.mapper.QueryMapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Service
@RestController
public class AddQueryService {

	@Autowired
	private QueryMapper queryMapper;

	@PostMapping("/submit")
	public Result<QueryEntity> submit(@RequestBody QueryEntity queryEntity) {
		Result<QueryEntity> result = new Result<QueryEntity>();
		String name = queryEntity.getName();
		String mail = queryEntity.getMail();
		String demand = queryEntity.getDemand();
		if (StringUtils.isEmpty(name)) {
			result.setCode(602);
			result.setMessage("Name cannot be null!");
			result.setSuccess(false);
			return result;
		}
		if (StringUtils.isEmpty(mail)) {
			result.setCode(602);
			result.setMessage("E-mail cannot be null!");
			result.setSuccess(false);
			return result;
		}
		if (StringUtils.isEmpty(demand)) {
			result.setCode(602);
			result.setMessage("Demand cannot be null!");
			result.setSuccess(false);
			return result;
		}
		if (queryMapper.insertQuery(name, mail, demand) == 1) {
			result.setCode(600);
			result.setMessage("Success!");
			result.setSuccess(true);
			result.setData(queryEntity);
		} else {
			result.setCode(601);
			result.setMessage("Failed!");
			result.setSuccess(false);
			result.setData(queryEntity);
		}
		return result;
	}

}