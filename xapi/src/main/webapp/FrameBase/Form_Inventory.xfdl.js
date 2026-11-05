(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Inventory");
            this.set_titletext("Inventory");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInventory", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ProductName","type" : "STRING","size" : "200"},{"id" : "Category","type" : "STRING","size" : "200"},{"id" : "SKU","type" : "STRING","size" : "100"},{"id" : "Supplier","type" : "STRING","size" : "200"},{"id" : "Stock","type" : "STRING","size" : "50"},{"id" : "Status","type" : "STRING","size" : "100"}]},"Rows" : [{"ProductName" : "Kit Kat","Category" : "Snack","SKU" : "KK-101","Supplier" : "Richard Martin","Stock" : "120","Status" : "Available"},{"ProductName" : "Dairy Milk","Category" : "Chocolate","SKU" : "DM-203","Supplier" : "Vandair","Stock" : "86","Status" : "Low stock"},{"ProductName" : "Tomato","Category" : "Vegetable","SKU" : "TM-702","Supplier" : "Charin","Stock" : "200","Status" : "Available"},{"ProductName" : "Milk Bikis","Category" : "Snack","SKU" : "MB-550","Supplier" : "Hoffman","Stock" : "42","Status" : "Low stock"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f3f4f5");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","0","0","220","720",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_background("#f7f7f7");
            this.divMain.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogo","18","18","44","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("0");
            obj.set_image("imagerc::logo.png");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Static("staBrand","68","18","120","40",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("KANBAN");
            obj.set_font("bold 28px \'Arial\'");
            obj.set_color("#0f7ad9");
            obj.set_verticalAlign("middle");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnDashboard","15","90","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("2");
            obj.set_text("Dashboard");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnInventory","15","140","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("3");
            obj.set_text("Inventory");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnReports","15","190","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("4");
            obj.set_text("Reports");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnSuppliers","15","240","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("5");
            obj.set_text("Suppliers");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnOrders","15","290","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("6");
            obj.set_text("Orders");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnStore","15","340","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("7");
            obj.set_text("Manage Store");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnSettings","15","560","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("8");
            obj.set_text("Settings");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Button("btnLogout","15","610","190","42",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("9");
            obj.set_text("Log Out");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Div("divContent","220","0",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTitle","30","40","300","40",null,null,null,null,null,null,this.divMain.form.divContent.form);
            obj.set_taborder("0");
            obj.set_text("Inventory");
            obj.set_font("bold 32px \'Arial\'");
            obj.set_color("#1f2937");
            this.divMain.form.divContent.addChild(obj.name, obj);

            obj = new Grid("grdInventory","30","110",null,null,"30","40",null,null,null,null,this.divMain.form.divContent.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsInventory");
            obj.set_autofittype("col");
            obj.set_border("1px solid #e5e7eb");
            obj.set_background("#ffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Product\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"1\" text=\"Category\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"2\" text=\"SKU\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"3\" text=\"Supplier\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"4\" text=\"Stock\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"5\" text=\"Status\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/></Band><Band id=\"body\"><Cell text=\"bind:ProductName\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"1\" text=\"bind:Category\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"2\" text=\"bind:SKU\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"3\" text=\"bind:Supplier\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"4\" text=\"bind:Stock\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"5\" text=\"bind:Status\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/></Band></Format></Formats>");
            this.divMain.form.divContent.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divMenu.form
            obj = new Layout("default","",0,0,this.divMain.form.divMenu.form,function(p){});
            this.divMain.form.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divContent.form
            obj = new Layout("default","",0,0,this.divMain.form.divContent.form,function(p){});
            this.divMain.form.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

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
        this.registerScript("Form_Inventory.xfdl", function() {

        this.Form_Inventory_onload = function(obj, e)
        {
            this.addEventHandler("onsize", this.Form_Inventory_onsize, this);
            this.Form_Inventory_onsize();
        };

        this.Form_Inventory_onsize = function()
        {
            var formW = this.getOffsetWidth();
            var formH = this.getOffsetHeight();

            if (formW > 0) {
                this.divMain.set_left(0);
                this.divMain.set_top(0);
                this.divMain.set_right(0);
                this.divMain.set_bottom(0);
            }
        };

        this.btnMenu_onclick = function(obj, e)
        {
            var ownerFrame = this.getOwnerFrame();
            if (!ownerFrame) return;

            if (obj.id == "btnDashboard") {
                ownerFrame.set_formurl("FrameBase::Form_Dashboard.xfdl");
            } else if (obj.id == "btnInventory") {
                ownerFrame.set_formurl("FrameBase::Form_Inventory.xfdl");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Inventory_onload,this);
            this.divMain.form.divMenu.form.btnDashboard.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnInventory.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnReports.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnSuppliers.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnOrders.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnStore.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnSettings.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMain.form.divMenu.form.btnLogout.addEventHandler("onclick",this.btnMenu_onclick,this);
        };
        this.loadIncludeScript("Form_Inventory.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
