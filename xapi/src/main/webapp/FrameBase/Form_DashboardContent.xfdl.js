(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_DashboardContent");
            this.set_titletext("Dashboard Content");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","30","40","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dashboard");
            obj.set_font("bold 32px \'Arial\'");
            obj.set_color("#1f2937");
            this.addChild(obj.name, obj);

            obj = new Static("staMessage","30","100","500","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("This is dashboard content placeholder.");
            obj.set_font("22px \'Arial\'");
            obj.set_color("#475569");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1060,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
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
        this.loadIncludeScript("Form_DashboardContent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
