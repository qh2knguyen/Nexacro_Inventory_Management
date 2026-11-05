(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NewSupplier");
            this.set_titletext("New Form");
            this.set_font("normal 500 14px/20px \"Segoe UI\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","0","0","500","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","29","27","124","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("New Supplier");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            obj.set_color("#383e49");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","142","69","211","81",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new ImageViewer("img00","0","0","81","81",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_border("1px dashed #9d9d9d");
            obj.set_borderRadius("50%");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","101","9","110","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Drag image here");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","149","30","14","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("or");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","109","52","94","20",null,null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Browse image");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_color("#448df2");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","29","182","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("Supplier Name");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter supplier name");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Div("div01_00","29","250","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Product");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter product");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00","29","318","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Category");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter product category");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00_00","29","386","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","112","24",null,null,null,null,null,null,this.div00.form.div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Buying Price");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter buying price");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00_00_00.addChild(obj.name, obj);

            obj = new Div("div01_00_00_00_00","29","454","440","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","131","24",null,null,null,null,null,null,this.div00.form.div01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Contact Number");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"0","273","44","0",null,null,null,null,null,this.div00.form.div01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_displaynulltext("Enter supplier contact number");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div02","29","522","319","104",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("div02");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","38","24",null,null,null,null,null,null,this.div00.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("Type");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div02.addChild(obj.name, obj);

            obj = new Div("div00",null,"0","157","104","0",null,null,null,null,null,this.div00.form.div02.form);
            obj.set_taborder("1");
            this.div00.form.div02.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","157","44",null,null,null,null,null,null,this.div00.form.div02.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Not taking return");
            obj.set_borderRadius("8px");
            obj.set_color("#858d9d");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div02.form.div00.addChild(obj.name, obj);

            obj = new Button("btn01","0",null,"120","44",null,"0",null,null,null,null,this.div00.form.div02.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Taking return");
            obj.set_borderRadius("8px");
            obj.set_color("#858d9d");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            this.div00.form.div02.form.div00.addChild(obj.name, obj);

            obj = new Button("btn00","229","658","110","39",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("Discard");
            obj.set_borderRadius("4px");
            obj.set_color("#858d9d");
            obj.set_font("normal 500 16px/100% \"Segoe UI\"");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","351","658","119","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("Add Supplier");
            obj.set_borderRadius("4px");
            obj.set_background("#1366d9");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form,function(p){});
            this.div00.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00.form,function(p){});
            this.div00.form.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00.form,function(p){});
            this.div00.form.div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00_00.form,function(p){});
            this.div00.form.div01_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01_00_00_00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div01_00_00_00_00.form,function(p){});
            this.div00.form.div01_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div02.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div02.form.div00.form,function(p){});
            this.div00.form.div02.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div02.form
            obj = new Layout("default","",0,0,this.div00.form.div02.form,function(p){});
            this.div00.form.div02.form.addLayout(obj.name, obj);

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
        this.registerScript("NewSupplier.xfdl", function() {

        this.div00_btn00_onclick = function(obj,e)
        {
        	this.close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
        };
        this.loadIncludeScript("NewSupplier.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
