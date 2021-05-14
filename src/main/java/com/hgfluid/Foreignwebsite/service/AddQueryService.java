package com.hgfluid.Foreignwebsite.service;

import com.hgfluid.Foreignwebsite.entity.QueryEntity;
import com.hgfluid.Foreignwebsite.entity.Result;
import com.hgfluid.Foreignwebsite.mapper.QueryMapper;
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
		if (queryMapper.insertQuery(name, mail, demand) == 1) {
			result.setCode(600);
			result.setMessage("添加表单成功！");
			result.setSuccess(true);
			result.setData(queryEntity);
		} else {
			result.setCode(601);
			result.setMessage("添加表单失败！请检查网络或者数据库状态！");
			result.setSuccess(false);
			result.setData(queryEntity);
		}
		return result;
	}

}