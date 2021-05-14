package com.hgfluid.Foreignwebsite.service;

import java.util.Random;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hgfluid.Foreignwebsite.entity.Result;

/**
 * 验证码服务
 * 
 * @author swsk33
 *
 */
@Service
@RestController
public class VerificationCodeService {

	/**
	 * 获取验证码
	 * 
	 * @return 结果
	 */
	@GetMapping("/getcode")
	public Result<String> getCode() {
		Result<String> result = new Result<String>();
		char[] codeChars = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '$', '%' };
		StringBuilder codeString = new StringBuilder("");
		Random random = new Random();
		for (int i = 0; i < 4; i++) {
			codeString.append(codeChars[random.nextInt(codeChars.length)]);
		}
		result.setCode(600);
		result.setMessage("Get code successfully!");
		result.setSuccess(true);
		result.setData(codeString.toString());
		return result;
	}

}