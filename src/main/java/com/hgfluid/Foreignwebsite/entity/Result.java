package com.hgfluid.Foreignwebsite.entity;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 结果类
 * 
 * @author D-37
 *
 */
@Getter
@Setter
@ToString
public class Result<T> implements Serializable {

	private static final long serialVersionUID = 3718955190572613786L;

	/**
	 * 结果代码
	 */
	private int code;

	/**
	 * 消息
	 */
	private String message;

	/**
	 * 是否操作成功
	 */
	private boolean success;

	/**
	 * 数据体
	 */
	private T data;

}