(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Dashboard");
            this.set_titletext("Dashboard");
            this.set_background("#F0F1F3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1546,845);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_dashboard","43","8",null,null,"43","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","21","28","180","30",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("0");
            obj.set_text("Dashboard");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","21","62","280","24",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("1");
            obj.set_text("Overview of inventory and operations");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_color("#667085");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_card_1","21","108","260","120",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #E4E7EC");
            obj.set_borderRadius("12px");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_label","20","18","130","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_1.form);
            obj.set_taborder("0");
            obj.set_text("Total Products");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#667085");
            this.div_dashboard.form.div_card_1.addChild(obj.name, obj);

            obj = new Static("sta_value","20","46","120","34",null,null,null,null,null,null,this.div_dashboard.form.div_card_1.form);
            obj.set_taborder("1");
            obj.set_text("1,248");
            obj.set_font("normal 600 28px/34px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.form.div_card_1.addChild(obj.name, obj);

            obj = new Static("sta_delta","20","86","80","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_1.form);
            obj.set_taborder("2");
            obj.set_text("+8.2%");
            obj.set_font("normal 500 13px/20px \"Segoe UI\"");
            obj.set_color("#16A34A");
            this.div_dashboard.form.div_card_1.addChild(obj.name, obj);

            obj = new Div("div_card_2","295","108","260","120",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #E4E7EC");
            obj.set_borderRadius("12px");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_label","20","18","130","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_2.form);
            obj.set_taborder("0");
            obj.set_text("Revenue");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#667085");
            this.div_dashboard.form.div_card_2.addChild(obj.name, obj);

            obj = new Static("sta_value","20","46","120","34",null,null,null,null,null,null,this.div_dashboard.form.div_card_2.form);
            obj.set_taborder("1");
            obj.set_text("₹25.4K");
            obj.set_font("normal 600 28px/34px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.form.div_card_2.addChild(obj.name, obj);

            obj = new Static("sta_delta","20","86","80","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_2.form);
            obj.set_taborder("2");
            obj.set_text("+12.5%");
            obj.set_font("normal 500 13px/20px \"Segoe UI\"");
            obj.set_color("#16A34A");
            this.div_dashboard.form.div_card_2.addChild(obj.name, obj);

            obj = new Div("div_card_3","569","108","260","120",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #E4E7EC");
            obj.set_borderRadius("12px");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_label","20","18","130","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_3.form);
            obj.set_taborder("0");
            obj.set_text("Low Stock");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#667085");
            this.div_dashboard.form.div_card_3.addChild(obj.name, obj);

            obj = new Static("sta_value","20","46","120","34",null,null,null,null,null,null,this.div_dashboard.form.div_card_3.form);
            obj.set_taborder("1");
            obj.set_text("42");
            obj.set_font("normal 600 28px/34px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.form.div_card_3.addChild(obj.name, obj);

            obj = new Static("sta_delta","20","86","80","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_3.form);
            obj.set_taborder("2");
            obj.set_text("-3 items");
            obj.set_font("normal 500 13px/20px \"Segoe UI\"");
            obj.set_color("#D92D20");
            this.div_dashboard.form.div_card_3.addChild(obj.name, obj);

            obj = new Div("div_card_4","843","108","260","120",null,null,null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #E4E7EC");
            obj.set_borderRadius("12px");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_label","20","18","130","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_4.form);
            obj.set_taborder("0");
            obj.set_text("Suppliers");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#667085");
            this.div_dashboard.form.div_card_4.addChild(obj.name, obj);

            obj = new Static("sta_value","20","46","120","34",null,null,null,null,null,null,this.div_dashboard.form.div_card_4.form);
            obj.set_taborder("1");
            obj.set_text("86");
            obj.set_font("normal 600 28px/34px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.form.div_card_4.addChild(obj.name, obj);

            obj = new Static("sta_delta","20","86","80","20",null,null,null,null,null,null,this.div_dashboard.form.div_card_4.form);
            obj.set_taborder("2");
            obj.set_text("+5 new");
            obj.set_font("normal 500 13px/20px \"Segoe UI\"");
            obj.set_color("#16A34A");
            this.div_dashboard.form.div_card_4.addChild(obj.name, obj);

            obj = new Div("div_chart","21","260",null,null,"21","21",null,null,null,null,this.div_dashboard.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #E4E7EC");
            obj.set_borderRadius("12px");
            this.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_chart_title","20","20","140","24",null,null,null,null,null,null,this.div_dashboard.form.div_chart.form);
            obj.set_taborder("0");
            obj.set_text("Sales trend");
            obj.set_font("normal 600 18px/24px \"Segoe UI\"");
            obj.set_color("#101828");
            this.div_dashboard.form.div_chart.addChild(obj.name, obj);

            obj = new Static("sta_placeholder","0","0",null,null,"0","0",null,null,null,null,this.div_dashboard.form.div_chart.form);
            obj.set_taborder("1");
            obj.set_text("Chart area");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 24px/30px \"Segoe UI\"");
            obj.set_color("#98A2B3");
            this.div_dashboard.form.div_chart.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_dashboard.form.div_card_1.form
            obj = new Layout("default","",0,0,this.div_dashboard.form.div_card_1.form,function(p){});
            this.div_dashboard.form.div_card_1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_dashboard.form.div_card_2.form
            obj = new Layout("default","",0,0,this.div_dashboard.form.div_card_2.form,function(p){});
            this.div_dashboard.form.div_card_2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_dashboard.form.div_card_3.form
            obj = new Layout("default","",0,0,this.div_dashboard.form.div_card_3.form,function(p){});
            this.div_dashboard.form.div_card_3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_dashboard.form.div_card_4.form
            obj = new Layout("default","",0,0,this.div_dashboard.form.div_card_4.form,function(p){});
            this.div_dashboard.form.div_card_4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_dashboard.form.div_chart.form
            obj = new Layout("default","",0,0,this.div_dashboard.form.div_chart.form,function(p){});
            this.div_dashboard.form.div_chart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_dashboard.form
            obj = new Layout("default","",0,0,this.div_dashboard.form,function(p){});
            this.div_dashboard.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1546,845,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("Dashboard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
