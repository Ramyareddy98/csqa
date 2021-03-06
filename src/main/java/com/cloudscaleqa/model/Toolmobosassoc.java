package com.cloudscaleqa.model;

// Generated Jan 25, 2018 1:06:55 PM by Hibernate Tools 4.0.0

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Toolmobosassoc generated by hbm2java
 */
@Entity
@Table(name = "toolmobosassoc")
public class Toolmobosassoc implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4858101994258596160L;
	private Integer id;
	private Tool tool;
	private Mobos mobos;

	public Toolmobosassoc() {
	}

	public Toolmobosassoc(Tool tool, Mobos mobos) {
		this.tool = tool;
		this.mobos = mobos;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ID", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TVal", nullable = false)
	public Tool getTool() {
		return this.tool;
	}

	public void setTool(Tool tool) {
		this.tool = tool;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MOSVal", nullable = false)
	public Mobos getMobos() {
		return this.mobos;
	}

	public void setMobos(Mobos mobos) {
		this.mobos = mobos;
	}

}
