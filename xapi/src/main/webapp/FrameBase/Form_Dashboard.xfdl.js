(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Dashboard");
            this.set_titletext("Dashboard");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#f3f4f5");
            this.addChild(obj.name, obj);

            obj = new Div("divSidebar","0","0","220","720",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_background("#f7f7f7");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divBody","220","0",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_background("#f3f4f5");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divSidebar
            obj = new Layout("default","",0,0,this.divMain.form.divSidebar.form,function(p){});
            this.divMain.form.divSidebar.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divBody
            obj = new Layout("default","",0,0,this.divMain.form.divBody.form,function(p){});
            this.divMain.form.divBody.form.addLayout(obj.name, obj);

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
        this.registerScript("Form_Dashboard.xfdl", function() {

        this.Form_Dashboard_onload = function(obj, e)
        {
            var app = nexacro.getApplication();
            if (app && (app.gvIsLoggedIn != true && app.gvIsLoggedIn != "true")) {
                var ownerFrame = this.getOwnerFrame();
                if (ownerFrame) {
                    ownerFrame.set_formurl("FrameBase::Form_Login.xfdl");
                }
                return;
            }

            this.addEventHandler("onsize", this.Form_Dashboard_onsize, this);
            this.Form_Dashboard_onsize();

            this.divMain.form.divSidebar.set_url("FrameBase::Form_Menu.xfdl");
            this.fnLoadPage("dashboard");
        };

        this.Form_Dashboard_onsize = function()
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

        this.fnLoadPage = function(pageId)
        {
            if (pageId == "dashboard") {
                this.divMain.form.divBody.set_url("FrameBase::Form_DashboardContent.xfdl");
            } else if (pageId == "inventory") {
                this.divMain.form.divBody.set_url("FrameBase::Form_InventoryContent.xfdl");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Dashboard_onload,this);
        };
        this.loadIncludeScript("Form_Dashboard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
