(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_InventoryContent");
            this.set_titletext("Inventory Content");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInventory", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ProductName","type" : "STRING","size" : "200"},{"id" : "Category","type" : "STRING","size" : "200"},{"id" : "SKU","type" : "STRING","size" : "100"},{"id" : "Supplier","type" : "STRING","size" : "200"},{"id" : "Stock","type" : "STRING","size" : "50"},{"id" : "Status","type" : "STRING","size" : "100"}]},"Rows" : [{"ProductName" : "Kit Kat","Category" : "Snack","SKU" : "KK-101","Supplier" : "Richard Martin","Stock" : "120","Status" : "Available"},{"ProductName" : "Dairy Milk","Category" : "Chocolate","SKU" : "DM-203","Supplier" : "Vandair","Stock" : "86","Status" : "Low stock"},{"ProductName" : "Tomato","Category" : "Vegetable","SKU" : "TM-702","Supplier" : "Charin","Stock" : "200","Status" : "Available"},{"ProductName" : "Milk Bikis","Category" : "Snack","SKU" : "MB-550","Supplier" : "Hoffman","Stock" : "42","Status" : "Low stock"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","30","40","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Inventory");
            obj.set_font("bold 32px \'Arial\'");
            obj.set_color("#1f2937");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInventory","30","110",null,null,"30","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsInventory");
            obj.set_autofittype("col");
            obj.set_border("1px solid #e5e7eb");
            obj.set_background("#ffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"Product\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"1\" text=\"Category\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"2\" text=\"SKU\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"3\" text=\"Supplier\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"4\" text=\"Stock\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/><Cell col=\"5\" text=\"Status\" font=\"bold 14px &apos;Arial&apos;\" color=\"#374151\"/></Band><Band id=\"body\"><Cell text=\"bind:ProductName\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"1\" text=\"bind:Category\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"2\" text=\"bind:SKU\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"3\" text=\"bind:Supplier\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"4\" text=\"bind:Stock\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/><Cell col=\"5\" text=\"bind:Status\" font=\"14px &apos;Arial&apos;\" color=\"#1f2937\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("Form_InventoryContent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
