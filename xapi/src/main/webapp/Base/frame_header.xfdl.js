(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame_header");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_background("#00aeaf");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frame_header.xfdl", function() {

        this.Static02_onclick = function(obj,e)
        {

        };

        this.Menu00_onmenuclick = function(obj,e)
        {

        };

        this.frame_header_onload = function(obj,e)
        {
        	trace("Header");
        	trace(nexacro.Application._ginit);

        	nexacro.Application._ginit = "xin chao 1";
        	trace(nexacro.Application._ginit);

        	trace(nexacro.Application._gObj.name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frame_header_onload,this);
        };
        this.loadIncludeScript("frame_header.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
