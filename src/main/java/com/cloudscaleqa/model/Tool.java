package com.cloudscaleqa.model;

// Generated Jan 25, 2018 1:06:55 PM by Hibernate Tools 4.0.0

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Tool generated by hbm2java
 */
@Entity
@Table(name = "tool")
public class Tool implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8959327644976859997L;
	private String value;
	private String id;
	private String name;
	private double cost;
	private int easeOfLearning;
	private int easeOfCollaboration;
	private int docLevel;
	private String supportType;
	private String notes;
	private String ref;
	private byte cloudExecutionSupport;
	private String pageLink;
	private Set<Toolgrouptoolassoc> toolgrouptoolassocs = new HashSet<Toolgrouptoolassoc>(
			0);
	private Set<Toolbrowserassoc> toolbrowserassocs = new HashSet<Toolbrowserassoc>(
			0);
	private Set<Toolosassoc> toolosassocs = new HashSet<Toolosassoc>(0);
	private Set<Toolfrontendtechassoc> toolfrontendtechassocs = new HashSet<Toolfrontendtechassoc>(
			0);
	private Set<Userrecommendation> userrecommendations = new HashSet<Userrecommendation>(
			0);
	private Set<Toolmobosassoc> toolmobosassocs = new HashSet<Toolmobosassoc>(0);
	private Set<Toolmobapptypeassoc> toolmobapptypeassocs = new HashSet<Toolmobapptypeassoc>(
			0);
	private Set<Tooldsktpapptypeassoc> tooldsktpapptypeassocs = new HashSet<Tooldsktpapptypeassoc>(
			0);

	public Tool() {
	}

	public Tool(String value, String id, String name, double cost,
			int easeOfLearning, int easeOfCollaboration, int docLevel,
			String supportType, byte cloudExecutionSupport) {
		this.value = value;
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.easeOfLearning = easeOfLearning;
		this.easeOfCollaboration = easeOfCollaboration;
		this.docLevel = docLevel;
		this.supportType = supportType;
		this.cloudExecutionSupport = cloudExecutionSupport;
	}

	public Tool(String value, String id, String name, double cost,
			int easeOfLearning, int easeOfCollaboration, int docLevel,
			String supportType, String notes, String ref,
			byte cloudExecutionSupport, String pageLink,
			Set<Toolgrouptoolassoc> toolgrouptoolassocs,
			Set<Toolbrowserassoc> toolbrowserassocs,
			Set<Toolosassoc> toolosassocs,
			Set<Toolfrontendtechassoc> toolfrontendtechassocs,
			Set<Userrecommendation> userrecommendations,
			Set<Toolmobosassoc> toolmobosassocs,
			Set<Toolmobapptypeassoc> toolmobapptypeassocs,
			Set<Tooldsktpapptypeassoc> tooldsktpapptypeassocs) {
		this.value = value;
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.easeOfLearning = easeOfLearning;
		this.easeOfCollaboration = easeOfCollaboration;
		this.docLevel = docLevel;
		this.supportType = supportType;
		this.notes = notes;
		this.ref = ref;
		this.cloudExecutionSupport = cloudExecutionSupport;
		this.pageLink = pageLink;
		this.toolgrouptoolassocs = toolgrouptoolassocs;
		this.toolbrowserassocs = toolbrowserassocs;
		this.toolosassocs = toolosassocs;
		this.toolfrontendtechassocs = toolfrontendtechassocs;
		this.userrecommendations = userrecommendations;
		this.toolmobosassocs = toolmobosassocs;
		this.toolmobapptypeassocs = toolmobapptypeassocs;
		this.tooldsktpapptypeassocs = tooldsktpapptypeassocs;
	}

	@Id
	@Column(name = "Value", unique = true, nullable = false, length = 100)
	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Column(name = "ID", nullable = false, length = 100)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "Name", nullable = false, length = 100)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "COST", nullable = false, precision = 22, scale = 0)
	public double getCost() {
		return this.cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Column(name = "EaseOfLearning", nullable = false)
	public int getEaseOfLearning() {
		return this.easeOfLearning;
	}

	public void setEaseOfLearning(int easeOfLearning) {
		this.easeOfLearning = easeOfLearning;
	}

	@Column(name = "EaseOfCollaboration", nullable = false)
	public int getEaseOfCollaboration() {
		return this.easeOfCollaboration;
	}

	public void setEaseOfCollaboration(int easeOfCollaboration) {
		this.easeOfCollaboration = easeOfCollaboration;
	}

	@Column(name = "DocLevel", nullable = false)
	public int getDocLevel() {
		return this.docLevel;
	}

	public void setDocLevel(int docLevel) {
		this.docLevel = docLevel;
	}

	@Column(name = "SupportType", nullable = false, length = 100)
	public String getSupportType() {
		return this.supportType;
	}

	public void setSupportType(String supportType) {
		this.supportType = supportType;
	}

	@Column(name = "Notes", length = 100)
	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Column(name = "Ref", length = 100)
	public String getRef() {
		return this.ref;
	}

	public void setRef(String ref) {
		this.ref = ref;
	}

	@Column(name = "CloudExecutionSupport", nullable = false)
	public byte getCloudExecutionSupport() {
		return this.cloudExecutionSupport;
	}

	public void setCloudExecutionSupport(byte cloudExecutionSupport) {
		this.cloudExecutionSupport = cloudExecutionSupport;
	}

	@Column(name = "PageLink", length = 100)
	public String getPageLink() {
		return this.pageLink;
	}

	public void setPageLink(String pageLink) {
		this.pageLink = pageLink;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolgrouptoolassoc> getToolgrouptoolassocs() {
		return this.toolgrouptoolassocs;
	}

	public void setToolgrouptoolassocs(
			Set<Toolgrouptoolassoc> toolgrouptoolassocs) {
		this.toolgrouptoolassocs = toolgrouptoolassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolbrowserassoc> getToolbrowserassocs() {
		return this.toolbrowserassocs;
	}

	public void setToolbrowserassocs(Set<Toolbrowserassoc> toolbrowserassocs) {
		this.toolbrowserassocs = toolbrowserassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolosassoc> getToolosassocs() {
		return this.toolosassocs;
	}

	public void setToolosassocs(Set<Toolosassoc> toolosassocs) {
		this.toolosassocs = toolosassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolfrontendtechassoc> getToolfrontendtechassocs() {
		return this.toolfrontendtechassocs;
	}

	public void setToolfrontendtechassocs(
			Set<Toolfrontendtechassoc> toolfrontendtechassocs) {
		this.toolfrontendtechassocs = toolfrontendtechassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Userrecommendation> getUserrecommendations() {
		return this.userrecommendations;
	}

	public void setUserrecommendations(
			Set<Userrecommendation> userrecommendations) {
		this.userrecommendations = userrecommendations;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolmobosassoc> getToolmobosassocs() {
		return this.toolmobosassocs;
	}

	public void setToolmobosassocs(Set<Toolmobosassoc> toolmobosassocs) {
		this.toolmobosassocs = toolmobosassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Toolmobapptypeassoc> getToolmobapptypeassocs() {
		return this.toolmobapptypeassocs;
	}

	public void setToolmobapptypeassocs(
			Set<Toolmobapptypeassoc> toolmobapptypeassocs) {
		this.toolmobapptypeassocs = toolmobapptypeassocs;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<Tooldsktpapptypeassoc> getTooldsktpapptypeassocs() {
		return this.tooldsktpapptypeassocs;
	}

	public void setTooldsktpapptypeassocs(
			Set<Tooldsktpapptypeassoc> tooldsktpapptypeassocs) {
		this.tooldsktpapptypeassocs = tooldsktpapptypeassocs;
	}

}
