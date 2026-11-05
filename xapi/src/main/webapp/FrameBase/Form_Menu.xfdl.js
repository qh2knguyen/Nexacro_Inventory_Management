(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Menu");
            this.set_titletext("Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(220,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMenu","0","0","220","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f7f7f7");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogo","18","18","44","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_image("imagerc::logo.png");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staBrand","68","18","120","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("KANBAN");
            obj.set_font("bold 28px \'Arial\'");
            obj.set_color("#0f7ad9");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnDashboard","15","90","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_text("Dashboard");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnInventory","15","140","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_text("Inventory");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnReports","15","190","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_text("Reports");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnSuppliers","15","240","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("5");
            obj.set_text("Suppliers");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnOrders","15","290","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("6");
            obj.set_text("Orders");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnStore","15","340","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("7");
            obj.set_text("Manage Store");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnSettings","15","560","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("8");
            obj.set_text("Settings");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnLogout","15","610","190","42",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("9");
            obj.set_text("Log Out");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2b3b4f");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 44px");
            this.divMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",220,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Menu.xfdl", function() {

        this.btnMenu_onclick = function(obj, e)
        {
            if (obj.id == "btnLogout") {
                var app = nexacro.getApplication();
                if (app) {
                    app.gvIsLoggedIn = false;
                    app.gvUserEmail = "";
                }

                try {
                    if (window && window.localStorage) {
                        window.localStorage.removeItem("kanban_last_login");
                    }
                } catch (e) {
                }

                var ownerFrame = this.getOwnerFrame();
                if (ownerFrame) {
                    ownerFrame.set_formurl("FrameBase::Form_Login.xfdl");
                }
                return;
            }

            var parentForm = this.parent.parent;
            if (parentForm && parentForm.fnLoadPage) {
                if (obj.id == "btnDashboard") {
                    parentForm.fnLoadPage("dashboard");
                } else if (obj.id == "btnInventory") {
                    parentForm.fnLoadPage("inventory");
                }
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divMenu.form.btnDashboard.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnInventory.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnReports.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnSuppliers.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnOrders.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnStore.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnSettings.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnLogout.addEventHandler("onclick",this.btnMenu_onclick,this);
        };
        this.loadIncludeScript("Form_Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
