(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Suppliers");
            this.set_titletext("New Form");
            this.set_background("#F0F1F3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1546,845);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_suppliers", this);
            obj._setContents("<ColumnInfo><Column id=\"supplierId\" type=\"STRING\" size=\"256\"/><Column id=\"supplierName\" type=\"STRING\" size=\"256\"/><Column id=\"product\" type=\"STRING\" size=\"256\"/><Column id=\"contactNumber\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"returnPolicy\" type=\"STRING\" size=\"256\"/><Column id=\"onTheWay\" type=\"STRING\" size=\"256\"/><Column id=\"totalRows\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_suppliers","43","8","1460",null,null,"8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("8px");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_employees","21","28","120","30",null,null,null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("0");
            obj.set_text("Suppliers");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Button("btn_add_supplier",null,"19","118","40","283",null,null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("1");
            obj.set_text("Add Supplier");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_background("#1366D9");
            obj.set_borderRadius("4px");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Grid("grd_suppliers","21","68",null,null,"21","68",null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("No data found");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_suppliers");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"Supplier Name\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"1\" text=\"Product\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"2\" text=\"Contact Number\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"3\" text=\"Email\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"4\" text=\"Type\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"5\" text=\"On The Way\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:supplierName\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"1\" text=\"bind:product\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"2\" text=\"bind:contactNumber\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"3\" text=\"bind:email\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"4\" text=\"bind:returnPolicy\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"5\" text=\"bind:onTheWay\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/></Band></Format></Formats>");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Button("btn_previous","21",null,"101","40",null,"12",null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("3");
            obj.set_text("Previous");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Button("btn_next",null,null,"101","40","21","12",null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("4");
            obj.set_text("Next");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Static("sta_pageText","734",null,"78","40",null,"12",null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("5");
            obj.set_text("Page 0 of 0");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Button("btn_download_add_suppliers",null,"19","118","40","21",null,null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("6");
            obj.set_text("Download all");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_suppliers.addChild(obj.name, obj);

            obj = new Button("btn_filter_supplier",null,"19","102","40","160",null,null,null,null,null,this.div_suppliers.form);
            obj.set_taborder("7");
            obj.set_text("Filters");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_suppliers.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_suppliers.form
            obj = new Layout("default","",0,0,this.div_suppliers.form,function(p){});
            this.div_suppliers.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1546,845,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Suppliers_copy0.xfdl", function() {

        this.currentPage = 1;
        this.recordsPerPage = 9;
        this.totalRecords = 0;
        this.totalPages = 0;

        this.div_products_btn_add_supplier_onclick = function(obj,e)
        {
        	var objArg = {formType: "supplier"};
        	var objOption = {width:"500", height:"720", popuptype:"modal", titlebar:false, resize:true};
        	this.gfnOpenPopup("addSupplierForm", "form::NewSupplier.xfdl", objArg, "fn_popup_callback", objOption);
        };

        this.Suppliers_onload = function(obj,e)
        {
        	this.currentPage = 1;
        	this.fn_loadPage("getSupplierList");
        };

        this.fn_loadPage = function(svcId) {
        	this.div_suppliers.form.btn_previous.set_enable(false);
        	this.div_suppliers.form.btn_next.set_enable(false);

        	this.transaction(
        		svcId,
        		"http://localhost:8080/supplier",
        		"",
        		"ds_suppliers=IDDataset",
        		"page=" + this.currentPage + " page_size=" + this.recordsPerPage,
        		"fn_callback"
        	);
        };

        this.fn_callback = function(serviceId, errorCode, errorMessage) {
        	if(errorCode >= 0) {
        		if(serviceId == "getSupplierList" || serviceId == "getSupplierPage" || serviceId == "searchSupplier") {
        			if (this.ds_suppliers.getRowCount() == 0 && this.currentPage > 1) {
        				this.currentPage = 1;
        				this.fn_loadPage("getSupplierPage");
        				return;
        			}

        			var total = 0;
        			if (this.ds_suppliers.getRowCount() > 0) {
        				total = parseInt(this.ds_suppliers.getColumn(0, "totalRows"), 10);
        				if (isNaN(total)) total = 0;
        			}
        			this.totalRecords = total;
        			this.fn_calculatePagination();
        			return;
        		}
        // 		if(serviceId == "str_get_all_employees") {
        // 			/*alert("Get all employees successfully");*/
        // 			return;
        // 		}
        // 		if(serviceId == "str_add_employee") {
        // 			this.alert("Added successfully.");
        // 			this.div_search_condition_btn_search_onclick();
        // 			return;
        // 		}
        // 		if(serviceId == "str_update_employee") {
        // 			this.alert("Changes saved.");
        // 			this.div_search_condition_btn_search_onclick();
        // 			return;
        // 		}
        // 		if(serviceId == "str_delete_employees") {
        // 			this.alert("Deleted successfully.");
        // 			this.div_search_condition_btn_search_onclick();
        // 			return;
        // 		}
        	}
        	else {
        		alert("Error");
        		this.fn_setButtonStatus();
        		return;
        	}
        }

        this.fn_calculatePagination = function() {
        	this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
        	if (this.totalPages === 0) {
        		this.currentPage = 0;
        	} else if (this.currentPage > this.totalPages) {
        		this.currentPage = this.totalPages;
        	}

        	this.div_suppliers.form.sta_pageText.set_text("Page " + this.currentPage + " of " + this.totalPages);
        	this.fn_setButtonStatus();
        };

        this.fn_displayPageData = function() {
        	this.fn_loadPage("getSupplierPage");
        };

        this.fn_setButtonStatus = function() {
        	var bEnable = (this.totalRecords > 0);
        	this.div_suppliers.form.btn_previous.set_enable(bEnable && this.currentPage > 1);
        	this.div_suppliers.form.btn_next.set_enable(bEnable && this.currentPage < this.totalPages);
        };

        this.div_suppliers_btn_previous_onclick = function(obj,e)
        {
        	if (this.currentPage > 1) {
        		this.currentPage--;
        		this.fn_displayPageData();
        	}
        };

        this.div_suppliers_btn_next_onclick = function(obj,e)
        {
        	if (this.currentPage < this.totalPages) {
        		this.currentPage++;
        		this.fn_displayPageData();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Suppliers_onload,this);
            this.div_suppliers.form.btn_add_supplier.addEventHandler("onclick",this.div_products_btn_add_supplier_onclick,this);
            this.div_suppliers.form.grd_suppliers.addEventHandler("onheadclick",this.div_employees_grd_employees_onheadclick,this);
            this.div_suppliers.form.grd_suppliers.addEventHandler("oncelldblclick",this.div_employees_grd_employees_oncelldblclick,this);
            this.div_suppliers.form.grd_suppliers.addEventHandler("oncellclick",this.div_employees_grd_employees_oncellclick,this);
            this.div_suppliers.form.btn_previous.addEventHandler("onclick",this.div_suppliers_btn_previous_onclick,this);
            this.div_suppliers.form.btn_next.addEventHandler("onclick",this.div_suppliers_btn_next_onclick,this);
        };
        this.loadIncludeScript("Suppliers_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
