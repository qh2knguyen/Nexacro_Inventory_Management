(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NewInventoryForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,945);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","0","0","500","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","29","27","124","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("New Product");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            obj.set_color("#383e49");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","142","69","211","81",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,945,this,function(p){});
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
        this.loadIncludeScript("NewInventoryForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
