(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AddUpdateForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(588,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_status", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "ACTIVE","VALUE" : "Active"},{"ID" : "INACTIVE","VALUE" : "Inactive"},{"ID" : "PENDING","VALUE" : "Pending"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type_cd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "T01","VALUE" : "T01"},{"ID" : "T02","VALUE" : "T02"},{"ID" : "T03","VALUE" : "T03"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos_cd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "P01","VALUE" : "P01"},{"ID" : "P02","VALUE" : "P02"},{"ID" : "P03","VALUE" : "P03"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deg_cd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "D01","VALUE" : "D01"},{"ID" : "D02","VALUE" : "D02"},{"ID" : "D03","VALUE" : "D03"},{"ID" : "D04","VALUE" : "D04"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rank", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "1","VALUE" : "1"},{"ID" : "2","VALUE" : "2"},{"ID" : "3","VALUE" : "3"},{"ID" : "4","VALUE" : "4"},{"ID" : "5","VALUE" : "5"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_form_title","78","34",null,"36","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("normal 600 24px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Div("div00","40","84",null,"1","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_border("1px solid #D7DEDD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"100","40","40","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.set_color("#ffffff");
            obj.set_letterSpacing("0.5px");
            obj.set_cssclass("btn_WF_FillBlue");
            obj.set_background("#DA4B26");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_employee_name","40","123","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_displaynulltext("Enter Employee Name");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_coe_salary","40","181","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Coe Salary");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_coe_salary","40","204","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_emp_next_pro","298","285","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_borderRadius("6px");
            obj.set_dateformat("dd/MM/yy");
            obj.set_background("#ffffff");
            obj.set_datepickerchangetype("button");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_editformat("dd/MM/yy");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","40","99","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Employee Name");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_rank","170","262","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Rank");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_next_pro","299","262","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Emp Next Pro");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Button("btn_submit",null,null,"100","40","148","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Submit");
            obj.set_color("#ffffff");
            obj.set_letterSpacing("0.8px");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_title","40","40","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","298","99","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Type Code");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_type_cd","298","123","78","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_borderRadius("6px");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_innerdataset("ds_type_cd");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("VALUE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pos_cd","384","123","78","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_borderRadius("6px");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_innerdataset("ds_pos_cd");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("VALUE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","384","99","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Pos Code");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_deg_cd","470","123","78","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_borderRadius("6px");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_innerdataset("ds_deg_cd");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("VALUE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","470","99","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Deg Code");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_coe_limit","143","204","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_coe_limit","143","181","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Coe Limit");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_coe_pos","246","204","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_coe_pos","246","181","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Coe Pos");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_all_coe",null,"204","95","40","39",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_all_coe","454","181","96","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("All Coe");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_emp_rank","169","285","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_borderRadius("6px");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_innerdataset("ds_rank");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("VALUE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_decision","427","285","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_borderRadius("6px");
            obj.set_dateformat("dd/MM/yy");
            obj.set_background("#ffffff");
            obj.set_datepickerchangetype("button");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_editformat("dd/MM/yy");
            this.addChild(obj.name, obj);

            obj = new Static("sta_date_decision","427","262","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Date Decision");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no_decision","40","262","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("No Decision");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no_decision","40","285","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("normal");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_status","40","343","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Status");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_status","40","366",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","40","414",null,"1","40",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("div00");
            obj.set_border("1px solid #D7DEDD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_validate_message","40","430","290","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("This field is required!");
            obj.set_color("#da4b26");
            obj.set_font("normal 500 11px/normal \"Segoe UI\"");
            obj.set_visible("false");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_coe_res","350","204","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d7dedd");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter Value");
            obj.set_font("normal 400 14px/normal \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp_coe_res","350","181","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Coe Res");
            obj.set_font("normal 500 14px/normal \"Segoe UI\"");
            obj.set_color("#333333");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",588,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_employee_name","value","this.opener.ds_employees","empName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_type_cd","value","this.opener.ds_employees","typeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbo_pos_cd","value","this.opener.ds_employees","posCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbo_deg_cd","value","this.opener.ds_employees","degCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_emp_coe_salary","value","this.opener.ds_employees","empCoeSalary");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_emp_coe_limit","value","this.opener.ds_employees","empCoeLimit");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_emp_coe_pos","value","this.opener.ds_employees","empCoePos");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_emp_all_coe","value","this.opener.ds_employees","empAllCoe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_no_decision","value","this.opener.ds_employees","noDecision");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cbo_emp_rank","value","this.opener.ds_employees","empRank");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_emp_next_pro","value","this.opener.ds_employees","empNextPro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cal_date_decision","value","this.opener.ds_employees","dateDecision");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rdo_status","value","this.opener.ds_employees","status");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_emp_coe_res","value","this.opener.ds_employees","empCoeRes");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AddUpdateForm.xfdl", function() {
        this.formType = "add";
        this.updateProductId = "";

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close(false);
        };

        this.AddUpdateForm_onload = function(obj,e)
        {
        	var fType = this.getOwnerFrame().formType;
        	this.formType = fType;
        	switch(fType)
        	{
        		case "add":
        			this.img_title.set_image("theme://images/user-plus.png");
        			this.sta_form_title.set_text("Add New Employee");
        			this.edt_employee_name.setFocus();
        			break;
        		case "update":
        			this.img_title.set_image("theme://images/user-pen.png");
        			this.sta_form_title.set_text("Update Employee");
        			break;
        	}
        };

        this.btn_submit_onclick = function(obj,e)
        {
        	var isValid = true;
        	var empName = this.edt_employee_name.value ? this.edt_employee_name.value.trim() : "";
        	var typeCd = this.cbo_type_cd.value;
        	var posCd = this.cbo_pos_cd.value;
        	var degCd = this.cbo_deg_cd.value;
        	var coeSalary = this.edt_emp_coe_salary.value;
        	var coeLimit = this.edt_emp_coe_limit.value;
        	var coePos = this.edt_emp_coe_pos.value;
        	var coeRes = this.edt_emp_coe_res.value;
        	var allCoe = this.edt_emp_all_coe.value;
        	var noDecision = this.edt_no_decision.value ? this.edt_no_decision.value.trim() : "";
        	var empRank = this.cbo_emp_rank.value;
        	var empNextPro = this.cal_emp_next_pro.value;
        	var dateDecision = this.cal_date_decision.value;
        	var status = this.rdo_status.value;

        	if (!empName)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_employee_name.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!typeCd)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cbo_type_cd.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!posCd)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cbo_pos_cd.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!degCd)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cbo_deg_cd.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!coeSalary)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_emp_coe_salary.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!coeLimit)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_emp_coe_limit.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!coePos)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_emp_coe_pos.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!coeRes)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_emp_coe_res.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!allCoe)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_emp_all_coe.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!noDecision)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.edt_no_decision.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!empRank)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cbo_emp_rank.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!empNextPro)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cal_emp_next_pro.set_border("1px solid #DA4B26");
        		isValid = false;
        	}
        	if (!dateDecision)
        	{
        		this.sta_validate_message.set_visible(true);
        		this.sta_validate_message.set_text("Please fill in all required fields.");
        		this.cal_date_decision.set_border("1px solid #DA4B26");
        		isValid = false;
        	}

        	if (!isValid) {
        		return;
        	}

        	this.close(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AddUpdateForm_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_submit.addEventHandler("onclick",this.btn_submit_onclick,this);
        };
        this.loadIncludeScript("AddUpdateForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
