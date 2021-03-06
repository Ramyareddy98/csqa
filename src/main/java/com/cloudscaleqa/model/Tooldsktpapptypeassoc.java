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
 * Tooldsktpapptypeassoc generated by hbm2java
 */
@Entity
@Table(name = "tooldsktpapptypeassoc")
public class Tooldsktpapptypeassoc implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3802222555249444974L;
	private Integer id;
	private Tool tool;
	private Desktopapptype desktopapptype;

	public Tooldsktpapptypeassoc() {
	}

	public Tooldsktpapptypeassoc(Tool tool, Desktopapptype desktopapptype) {
		this.tool = tool;
		this.desktopapptype = desktopapptype;
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
	@JoinColumn(name = "DSKAPTPVal", nullable = false)
	public Desktopapptype getDesktopapptype() {
		return this.desktopapptype;
	}

	public void setDesktopapptype(Desktopapptype desktopapptype) {
		this.desktopapptype = desktopapptype;
	}

}
