(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FROM_DATE","type" : "STRING","size" : "10"},{"id" : "TO_DATE","type" : "STRING","size" : "10"},{"id" : "EMPLOYEE_NAME","type" : "STRING","size" : "200"}]},"Rows" : [{"FROM_DATE" : "2021","TO_DATE" : "2023"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmployee", this);
            obj.set_keystring("G:Department");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "department","type" : "STRING","size" : "100"},{"id" : "employeeId","type" : "STRING","size" : "250"},{"id" : "fullName","type" : "STRING","size" : "200"},{"id" : "salary","type" : "INT","size" : "50"},{"id" : "birthDate","type" : "STRING","size" : "250"},{"id" : "phoneNumber","type" : "STRING","size" : "20"},{"id" : "status","type" : "STRING","size" : "20"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","22","40","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Date:");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cld_fromDate","Static00:3","22","115","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cld_toDate","cld_fromDate:15","22","115","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","cld_toDate:12","22","99","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Employee Name:");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ibx_employeeName","Static01:10","20","251","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","91","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_text("Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","100","814","239",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsEmployee");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"152\"/><Column size=\"165\"/><Column size=\"152\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"123\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"STT\"/><Cell col=\"1\" text=\"Department\"/><Cell col=\"2\" text=\"EmployeeID\"/><Cell col=\"3\" text=\"EmployeeName\"/><Cell col=\"4\" text=\"Salary\"/><Cell col=\"5\" text=\"Bith Date\"/><Cell col=\"6\" text=\"Phone Number\"/><Cell col=\"7\" text=\"Status\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:department\" expr=\"dataset.getRowLevel(currow) &gt; 0 ? &quot;Total&quot; : department\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:employeeId\" expr=\"dataset.getRowLevel(currow) &gt; 0 ? &quot;Count: &quot; + dataset.getGroupRangeCount(currow)  : employeeId\"/><Cell col=\"3\" text=\"bind:fullName\"/><Cell col=\"4\" text=\"bind:salary\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:birthDate\"/><Cell col=\"6\" text=\"bind:phoneNumber\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:status\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        /******************************************************
         * Dynamic Grid + Pivot Dataset Demo
         ******************************************************/

        /*----------------------------------------------------
         | onload
         ----------------------------------------------------*/
        this.Form_Work_onload = function ()
        {
        //     this.Div00.form.cmbFromYear.set_value(2021);
        //     this.Div00.form.cmbToYear.set_value(2026);
        //
        //     this.fnSearch();
        };

        /*----------------------------------------------------
         | Search button
         ----------------------------------------------------*/
        this.Div00_btnSearch_onclick = function ()
        {
            this.fnSearch();
        };

        /*----------------------------------------------------
         | fnSearch
         ----------------------------------------------------*/
        this.fnSearch = function ()
        {
            var fromDate = this.Div00.form.cld_fromDate.value;
            var toDate   = this.Div00.form.cld_toDate.value;
        	if ((fromDate == null && toDate == null) || (fromDate == '' && toDate == ''))
        	{
        		//
        	} else if (fromDate == null || fromDate == '' || toDate == null || toDate == '') {
        		alert('Vui nhập ngày start/end Date.');
        		return;
        	} else if (Number(fromDate) > Number(toDate)) {
        		this.alert('Vui lòng nhập ngày start nhỏ hơn end.')
        		return;
        	}

        	var employeeName   = this.Div00.form.ibx_employeeName.value;

            this.dsCond.clearData();
            var r = this.dsCond.addRow();
            this.dsCond.setColumn(r, "FROM_DATE", fromDate);
            this.dsCond.setColumn(r, "TO_DATE",   toDate);
        	this.dsCond.setColumn(r, "EMPLOYEE_NAME",   employeeName);

            this.dsEmployee.clearData();


        	var id = "search";
        	var url = "http://localhost:8080/employee/search";
        	var reqDs = "dsInput=dsCond";
        	var respDs = "dsEmployee=IDDataset";
        	var args = "";
        	var callback = "fnCallback";

        	this.transaction(id, url, reqDs, respDs, args, callback);
        };

        /*----------------------------------------------------
         | Callback
         ----------------------------------------------------*/
        this.fnCallback = function (svcID, errCD, errMsg)
        {
            if (errCD < 0) {
                alert(errMsg);
                return;
            }

        // 	if (code == 0) {
        // 		this.alert(this.ds_gridExpr.rowcount + " numbers of data have been found.");
        // 		trace(this.ds_gridExpr.rowcount + " numbers of data have been found.");
        // 	} else {
        // 		this.alert("Error["+code+"]:"+message);
        // 		trace("Error["+code+"]:"+message);
        //     }
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.ibx_employeeName.addEventHandler("onchanged",this.Div00_Edit00_onchanged,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.Div00_btnSearch_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
