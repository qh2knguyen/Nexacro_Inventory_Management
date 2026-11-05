(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TopFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1546,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_avatar",null,"28","40","40","43",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/avt.png\')");
            obj.set_stretch("fit");
            obj.set_borderRadius("50%");
            this.addChild(obj.name, obj);

            obj = new Button("btn_notification",null,"28","30","40","img_avatar:30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_Notification");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_name","43",null,"425","40",null,"32",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("4px");
            obj.set_font("normal 400 16px/normal \"Segoe UI\"");
            obj.set_displaynulltext("Search product, supplier, order");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1546,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_emp_name","value","ds_emp_search","empName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("TopFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
