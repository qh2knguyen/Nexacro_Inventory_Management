(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            this.set_titletext("Side bar");
            this.set_borderRadius("0px 8px 8px 0px");
            this.set_border("0px none,1px solid #f0f1f3,0px none,0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(373,945);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_ICON","type" : "STRING","size" : "256"},{"id" : "MENU_CAPTION","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "IS_SELECTED","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "menu01","MENU_CAPTION" : "Dashboard","MENU_ICON" : "theme://images/Home.png","MENU_URL" : "form::Dashboard.xfdl","IS_SELECTED" : "true"},{"MENU_ID" : "menu02","MENU_CAPTION" : "Inventory","MENU_ICON" : "theme://images/Inventory.png","MENU_URL" : "form::Inventory.xfdl","IS_SELECTED" : "false"},{"MENU_ID" : "menu03","MENU_ICON" : "theme://images/Suppliers.png","MENU_CAPTION" : "Suppliers","MENU_URL" : "form::Suppliers.xfdl","IS_SELECTED" : "false"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_sidebar","32","24","309",null,null,"24",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("div_sidebar_header","0","0","100%","56",null,null,null,null,null,null,this.div_sidebar.form);
            obj.set_taborder("0");
            this.div_sidebar.addChild(obj.name, obj);

            obj = new Div("div00","16","4",null,"48","16",null,null,null,null,null,this.div_sidebar.form.div_sidebar_header.form);
            obj.set_taborder("0");
            this.div_sidebar.form.div_sidebar_header.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","0","0","48","48",null,null,null,null,null,null,this.div_sidebar.form.div_sidebar_header.form.div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo.png\')");
            this.div_sidebar.form.div_sidebar_header.form.div00.addChild(obj.name, obj);

            obj = new Static("sta_kanban","64","0","120",null,null,"0",null,null,null,null,this.div_sidebar.form.div_sidebar_header.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("KANBAN");
            obj.set_font("normal 600 24px/30px \"Segoe UI\"");
            obj.set_color("#1570ef");
            this.div_sidebar.form.div_sidebar_header.form.div00.addChild(obj.name, obj);

            obj = new Div("div_menu","0","88","100%",null,null,"0",null,null,null,null,this.div_sidebar.form);
            obj.set_taborder("1");
            this.div_sidebar.addChild(obj.name, obj);

            obj = new ListView("lst_menu","21","8",null,null,"21","0",null,null,null,null,this.div_sidebar.form.div_menu.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"68\" border=\"0px none\"><Cell id=\"cell_icon\" left=\"0\" top=\"22\" width=\"24\" height=\"24\" displaytype=\"imagecontrol\" font=\"normal 500 16px/24px &quot;Segoe UI&quot;\" text=\"bind:MENU_ICON\" imagestretch=\"fit\"/><Cell id=\"cell_name\" left=\"45\" top=\"0\" bottom=\"0\" right=\"35\" text=\"bind:MENU_CAPTION\" font=\"normal 500 16px/24px &quot;Segoe UI&quot;\" cssclass=\"expr:IS_SELECTED == &quot;true&quot; ? &quot;SelectedTab&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.div_sidebar.form.div_menu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_sidebar.form.div_sidebar_header.form.div00.form
            obj = new Layout("default","",0,0,this.div_sidebar.form.div_sidebar_header.form.div00.form,function(p){});
            this.div_sidebar.form.div_sidebar_header.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_sidebar.form.div_sidebar_header.form
            obj = new Layout("default","",0,0,this.div_sidebar.form.div_sidebar_header.form,function(p){});
            this.div_sidebar.form.div_sidebar_header.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_sidebar.form.div_menu.form
            obj = new Layout("default","",0,0,this.div_sidebar.form.div_menu.form,function(p){});
            this.div_sidebar.form.div_menu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_sidebar.form
            obj = new Layout("default","",0,0,this.div_sidebar.form,function(p){});
            this.div_sidebar.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",373,945,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LeftFrame.xfdl", function() {

        this.div_sidebar_div_menu_lst_menu_oncellclick = function(obj,e)
        {
            var objApp = nexacro.getApplication();
            var menuUrl = this.ds_menu.getColumn(e.row, "MENU_URL");

            if (!menuUrl || menuUrl == "") {
                return;
            }

            var mainVfrs = objApp && objApp.mainframe && objApp.mainframe.vfrs;
            var mainHfrs = mainVfrs && mainVfrs.hfrs;
            var workVfrs = mainHfrs && mainHfrs.vfrs_work;
            var mainFrame = workVfrs && workVfrs.frm_main;

            if (mainFrame) {
                mainFrame.set_formurl(menuUrl);
            }

            this.ds_menu.set_enableevent(false);
            for (var i = 0; i < this.ds_menu.getRowCount(); i++) {
                this.ds_menu.setColumn(i, "IS_SELECTED", "false");
            }
            this.ds_menu.set_enableevent(true);

            this.ds_menu.setColumn(e.row, "IS_SELECTED", "true");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_sidebar.form.div_menu.form.lst_menu.addEventHandler("oncellclick",this.div_sidebar_div_menu_lst_menu_oncellclick,this);
        };
        this.loadIncludeScript("LeftFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
