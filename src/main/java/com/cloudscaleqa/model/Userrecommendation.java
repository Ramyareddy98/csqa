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
 * Userrecommendation generated by hbm2java
 */
@Entity
@Table(name = "userrecommendation")
public class Userrecommendation implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1864750906852394502L;
	private Integer id;
	private User user;
	private Tool tool;
	private Toolgroup toolgroup;

	public Userrecommendation() {
	}

	public Userrecommendation(User user, Tool tool, Toolgroup toolgroup) {
		this.user = user;
		this.tool = tool;
		this.toolgroup = toolgroup;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Email", nullable = false)
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
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
	@JoinColumn(name = "TGVal", nullable = false)
	public Toolgroup getToolgroup() {
		return this.toolgroup;
	}

	public void setToolgroup(Toolgroup toolgroup) {
		this.toolgroup = toolgroup;
	}

}
